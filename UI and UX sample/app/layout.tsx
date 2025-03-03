import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { DynamicBackground } from "@/components/DynamicBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dynamic Background Demo",
  description: "A demo of a dynamic background effect with moving lines",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DynamicBackground />
        {children}
      </body>
    </html>
  )
}



import './globals.css'