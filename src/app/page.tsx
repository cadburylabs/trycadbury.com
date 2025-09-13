import { Fix } from '@/components/Fix/Fix'
import { Header } from '@/components/Header/Header'
import { Intro } from '@/components/Intro/Intro'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Intro />
                <Fix />
            </main>
            <footer />
        </>
    )
}
