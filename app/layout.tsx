import './globals.css'
import React from "react"

export const metadata = {
  title: 'Leadster',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="plus-jakarta-sans">{children}</body>
    </html>
  )
}
