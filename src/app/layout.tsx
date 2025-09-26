import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import '@/components/borders.css'
import { LenisProvider } from '@/context/LenisContext'

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
    title: 'Cadbury',
    description: 'Website',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`antialiased bg-gradient-dots ${robotoMono.variable}`}
            >
                <LenisProvider>{children}</LenisProvider>
            </body>
        </html>
    )
}
