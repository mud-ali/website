import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Mudasir Ali',
    description: 'Student. Engineer. Programmer.',
    keywords: [
        'Mudasir', 'Mudasir Ali', 'Engineer', 'Programmer', 'Cybersecurity', 
        'Robotics', 'Web Development', 'Software Development', 
        'Bergen County Academies', 'BCA'
    ],
    creator: 'Mudasir Ali',
    robots: { index: true, follow: false },
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico",
    },
    twitter: {
        card: "summary_large_image",
        images: "/favicon.ico",
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
