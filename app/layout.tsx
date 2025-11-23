import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import "./globals.css"

// Premium fonts: Space Grotesk for headings, Inter for body
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Renor Labs — AI-First Product Studio",
  description: "Renor Labs helps founders turn ideas into polished, scalable MVPs using AI-driven development and modern system design.",
  generator: "renorlabs.com",
  openGraph: {
    title: "Renor Labs — AI-First Product Studio",
    description: "Renor Labs helps founders turn ideas into polished, scalable MVPs using AI-driven development and modern system design.",
    images: ["/renor-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renor Labs — AI-First Product Studio",
    description: "Renor Labs helps founders turn ideas into polished, scalable MVPs using AI-driven development and modern system design.",
    images: ["/renor-logo.png"],
  },
  metadataBase: new URL("https://renorlabs.com"),
  alternates: {
    canonical: "https://renorlabs.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
