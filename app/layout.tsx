import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "KeyLimePie · Método de Bisección",
  description: "Sitio educativo sobre el Método de Bisección para encontrar raíces de funciones",
  generator: "KeyLimePie Team",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.jpg" />
      </head>
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense>
          {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
          {children}
          {/* </ThemeProvider> */}
        </Suspense>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
