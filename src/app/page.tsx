import { Benefits } from '@/components/Benefits/Benefits'
import { Challenge } from '@/components/Challenge/Challenge'
import { Fix } from '@/components/Fix/Fix'
import { Header } from '@/components/Header/Header'
import { Intro } from '@/components/Intro/Intro'
import { Online } from '@/components/Online/Online'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Challenge />
                <Fix />
                <Online />
                <Benefits />
            </main>
            <footer />
        </>
    )
}
