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
    title: 'Cadbury - AI Powered NetSuite Consultant',
    description: 'AI powered NetSuite consultant that executes tasks in minutes, rather than weeks. Get instant help with NetSuite implementations, integrations, and customizations.',
    keywords: 'NetSuite, AI, consultant, automation, ERP, implementation, integration',
    authors: [{ name: 'Manish Sinha' }],
    openGraph: {
        title: 'Cadbury - AI Powered NetSuite Consultant',
        description: 'AI powered NetSuite consultant that executes tasks in minutes, rather than weeks. Get instant help with NetSuite implementations, integrations, and customizations.',
        url: 'https://trycadbury.com',
        siteName: 'Cadbury',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Cadbury - AI Powered NetSuite Consultant',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cadbury - AI Powered NetSuite Consultant',
        description: 'AI powered NetSuite consultant that executes tasks in minutes, rather than weeks.',
        images: ['/images/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`antialiased ${robotoMono.variable}`}>
                <LenisProvider>{children}</LenisProvider>
            </body>
        </html>
    )
}
