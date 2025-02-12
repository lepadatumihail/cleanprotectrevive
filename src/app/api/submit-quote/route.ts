import { NextResponse } from 'next/server'
import { google } from 'googleapis'

interface GoogleAPIError {
  response?: {
    status?: number
    data?: {
      error?: {
        message?: string
        status?: string
        errors?: Array<{
          domain?: string
          reason?: string
          message?: string
        }>
      }
    }
  }
  message?: string
}

// Initialize Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

const sheets = google.sheets({ version: 'v4', auth })
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, number, notes = '' } = data

    if (!SPREADSHEET_ID) {
      throw new Error('GOOGLE_SHEET_ID is not configured')
    }

    // Prepare the values to be inserted - match exact spreadsheet column order:
    // Name | Email | Number | Answer | Quoted | Agreed | Notes
    const values = [
      [
        name, // Column A: Name
        email, // Column B: Email
        number, // Column C: Number
        'wp', // Column D: Answer (default 'wp')
        '', // Column E: Quoted (empty)
        '', // Column F: Agreed (empty)
        notes, // Column G: Notes
      ],
    ]

    try {
      // First, try to get the spreadsheet metadata to verify access
      await sheets.spreadsheets.get({
        spreadsheetId: SPREADSHEET_ID,
      })
    } catch (error) {
      const apiError = error as GoogleAPIError
      if (apiError?.response?.status === 404) {
        throw new Error(
          'Spreadsheet not found. Please check the GOOGLE_SHEET_ID and make sure the service account has access.',
        )
      }
      if (apiError?.response?.data?.error?.message?.includes('permission')) {
        console.error('Permission error details:', {
          email: process.env.GOOGLE_CLIENT_EMAIL,
          spreadsheetId: SPREADSHEET_ID,
          error: apiError.response.data.error,
        })
        throw new Error(
          `Permission denied. Please make sure the service account (${process.env.GOOGLE_CLIENT_EMAIL}) has editor access to the spreadsheet.`,
        )
      }
      throw error
    }

    try {
      // Append the data to the sheet
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Sheet1!A:E', // Updated range to match new structure
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values,
        },
      })
    } catch (error) {
      const apiError = error as GoogleAPIError
      if (
        apiError?.response?.data?.error?.message?.includes(
          'Unable to parse range',
        )
      ) {
        // If the sheet name is wrong, try with a different sheet name
        await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: 'Leads!A:E', // Updated range to match new structure
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values,
          },
        })
      } else {
        throw error
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    const apiError = error as GoogleAPIError
    console.error('Error submitting form:', {
      message: apiError?.message || error,
      details: apiError?.response?.data?.error,
    })

    let errorMessage = apiError?.message || 'Failed to submit form'
    if (apiError?.response?.data?.error?.message) {
      errorMessage = apiError.response.data.error.message
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
