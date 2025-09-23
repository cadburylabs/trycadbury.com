'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import type { LenisRef } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger)

export default function LenisRoot() {
    const lenisRef = useRef<LenisRef>(null)

    useEffect(() => {
        const update = (time: number) => {
            lenisRef.current?.lenis?.raf(time * 1000)
            ScrollTrigger.update()
        }
        gsap.ticker.add(update)

        return () => {
            gsap.ticker.remove(update)
        }
    }, [])

    return (
        <ReactLenis
            root
            ref={lenisRef}
            options={{
                autoRaf: false,
                duration: 1.05,
                smoothWheel: true,
                gestureOrientation: 'vertical',
            }}
        />
    )
}
