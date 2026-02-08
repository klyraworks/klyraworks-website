import React from "react"
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Klyra Works',
  description: 'Empresa ecuatoriana de desarrollo de software.',
  generator: 'klyraworks',
  icons: {
    icon: [
      {
        url: '/32-claro.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/32-oscuro.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo-light.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo-light.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${outfit.variable}`}>
      <body className={`${outfit.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
