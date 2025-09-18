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
                <Intro />
                <Challenge />
                <Fix />
                <Online />
                <Benefits />
                <Plans />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
