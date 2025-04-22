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

// Properly format the private key
const formatPrivateKey = (key: string | undefined): string | undefined => {
  if (!key) return undefined
  // If the key doesn't start with -----BEGIN PRIVATE KEY-----, it may need fixing
  if (!key.includes('-----BEGIN PRIVATE KEY-----')) {
    // Try to fix the key by properly formatting each line
    return key.replace(/\\n/g, '\n')
  }
  return key
}

// Initialize Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: formatPrivateKey(process.env.GOOGLE_PRIVATE_KEY),
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

    // Debug the private key format
    if (!process.env.GOOGLE_PRIVATE_KEY) {
      throw new Error('GOOGLE_PRIVATE_KEY is not configured')
    }

    // Validate the credentials
    if (!process.env.GOOGLE_CLIENT_EMAIL) {
      throw new Error('GOOGLE_CLIENT_EMAIL is not configured')
    }

    // Prepare the values to be inserted - match exact spreadsheet column order:
    // Name | Email | Number | Answer | Quoted | Agreed | Notes
    const values = [
      [
        name, // Column A: Name
        email, // Column B: Email
        number, // Column C: Number
        '', // Column D: Answer (default 'wp')
        '', // Column E: Quoted (empty)
        '', // Column F: Agreed (empty)
        `website: ${notes}`, // Column G: Notes
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
        range: 'CPR - Leads', // Exact sheet name from Google Sheets
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
        // If there's an error with the sheet name (maybe spaces causing issues), try with the first sheet
        await sheets.spreadsheets.values.append({
          spreadsheetId: SPREADSHEET_ID,
          range: 'A:G', // Use column range without sheet name
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
