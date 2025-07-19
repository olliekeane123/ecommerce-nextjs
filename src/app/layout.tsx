import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer"
import SessionProvider from "./SessionProvider"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Ecommerce",
    description: "Shop fast and easy",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" data-theme="light">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <SessionProvider>
                    <Navbar />
                    <main className="m-auto max-w-7xl min-w-[300px] p-4">
                        {children}
                    </main>
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    )
}
