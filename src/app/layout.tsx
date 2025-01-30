import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cleanprotectrevive.com/'),
  title: {
    template: '%s | Clean Protect Revive',
    default: 'Clean Protect Revive - Cleaning Services Manchester',
  },
  description:
    'From driveways to roofs in Manchester, we will leave your property spotless and refreshed. Ready to transform your space? Let us get started today!',
  keywords: [
    'eco-friendly cleaning',
    'green cleaning',
    'professional cleaning services',
    'Clean Protect Revive',
  ],
  authors: [
    { name: 'Clean Protect Revive', url: 'https://www.cleanprotectrevive.com' },
  ],
  openGraph: {
    title: 'Clean Protect Revive - Cleaning Services Manchester',
    description:
      'From driveways to roofs in Manchester, we will leave your property spotless and refreshed. Ready to transform your space? Let us get started today!',
    type: 'website',
    url: 'https://www.cleanprotectrevive.com',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Clean Protect Revive',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clean Protect Revive - Cleaning Services Manchester',
    description:
      'From driveways to roofs in Manchester, we will leave your property spotless and refreshed. Ready to transform your space? Let us get started today!',
    images: ['/images/og-image.png'],
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        inter.variable,
        dmSans.variable,
      )}
    >
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
