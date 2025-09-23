import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'
import LenisRoot from '@/hooks/useLenisScroller'

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
            <body className={`antialiased ${robotoMono.variable}`}>
                <LenisRoot />
                {children}
            </body>
        </html>
    )
}
