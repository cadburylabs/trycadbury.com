'use client'
import { Benefits } from '@/components/Benefits/Benefits'
import { Challenge } from '@/components/Challenge/Challenge'
import { Contact } from '@/components/Contact/Contact'
import { Fix } from '@/components/Fix/Fix'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header/Header'
import { Intro } from '@/components/Intro/Intro'
import { Loader } from '@/components/Loader'
import { Online } from '@/components/Online/Online'
import { Plans } from '@/components/Plans/Plans'
import { useEffect, useState } from 'react'

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 4100)
        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            <Loader isLoading={isLoading} />
            <Header />
            <main className="bg-gradient-dots">
                <Intro />
                <Challenge />
                <div className="mx-3 lg:mx-5 border-[0.5px] border-[#363E44]">
                    <Fix />
                </div>
                <Online />
                <Benefits />
                <Plans />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
