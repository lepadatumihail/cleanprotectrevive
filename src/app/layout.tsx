import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import clsx from 'clsx'

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
  metadataBase: new URL('https://biodika.vercel.app'),
  title: {
    template: '%s | Bio-Dika Nettoyage',
    default: 'Bio-Dika Nettoyage - Eco-Friendly Cleaning Services',
  },
  description:
    'Bio-Dika Nettoyage offers professional eco-friendly cleaning services for homes and businesses. Our green cleaning solutions are safe for people, pets, and the environment.',
  keywords: [
    'eco-friendly cleaning',
    'green cleaning',
    'professional cleaning services',
    'Bio-Dika Nettoyage',
  ],
  authors: [
    { name: 'Bio-Dika Nettoyage', url: 'https://biodika-nettoyage.com' },
  ],
  openGraph: {
    title: 'Bio-Dika Nettoyage - Eco-Friendly Cleaning Services',
    description:
      'Professional eco-friendly cleaning services for homes and businesses.',
    type: 'website',
    url: 'https://www.biodikanettoyage.com',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bio-Dika Nettoyage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bio-Dika Nettoyage - Eco-Friendly Cleaning Services',
    description:
      'Professional eco-friendly cleaning services for homes and businesses.',
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
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
