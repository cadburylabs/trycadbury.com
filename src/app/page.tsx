'use client'
import { Benefits } from '@/components/Benefits/Benefits'
import { Challenge } from '@/components/Challenge/Challenge'
import { Contact } from '@/components/Contact/Contact'
import { Fix } from '@/components/Fix/Fix'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header/Header'
import { Intro } from '@/components/Intro/Intro'
import { Online } from '@/components/Online/Online'
import { Plans } from '@/components/Plans/Plans'

export default function Home() {
    return (
        <>
            <Header />
            <main className="bg-gradient-dots">
                <Intro id="intro" />
                <Challenge id="challenge" />
                <div className="mx-3 lg:mx-5 border-[0.5px] border-[#363E44]">
                    <Fix id="fix" />
                </div>
                <Online id="online" />
                <Benefits id="benefits" />
                <Plans id="plans" />
                <Contact id="contact" />
            </main>
            <Footer />
        </>
    )
}
