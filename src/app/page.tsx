import { Challenge } from '@/components/Challenge/Challenge'
import { Header } from '@/components/Header/Header'
import { Intro } from '@/components/Intro/Intro'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Challenge />
            </main>
            <footer />
        </>
    )
}
