import "@/styles/globals.css"
import { Questrial } from "next/font/google"
import type React from "react"

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={questrial.className}>{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
