'use client'
import { Benefits } from '@/components/Benefits/Benefits'
import { Challenge } from '@/components/Challenge/Challenge'
import { Contact } from '@/components/Contact/Contact'
import { Fix } from '@/components/Fix/Fix'
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
                <div className="relative mx-3 lg:mx-5">
                    <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
                    <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />
                    <span className="absolute top-0 left-0 h-full w-px border-y-gradient" />
                    <span className="absolute top-0 right-0 h-full w-px border-y-gradient" />

                    <Fix id="fix" />
                </div>
                <Online id="online" />
                <Benefits id="benefits" />
                <Plans id="plans" />
                <Contact id="contact" />
            </main>
        </>
    )
}
