import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ClientOnly from './ClientOnly';
console.log(`[Layout] Loaded file: Process ID: ${process.pid}`);

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  console.log(`[Layout] Loaded file: Process ID: ${process.pid}`);

  return (
    <html lang="en">
      <ClientOnly />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
