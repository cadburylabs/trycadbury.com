'use client'

import { createContext, useContext, useRef, useEffect, useState } from 'react'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { LenisRef } from 'lenis/react'
import type Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

type LenisContextType = {
    lenis: Lenis | null
}

const LenisContext = createContext<LenisContextType>({ lenis: null })
export const useLenisContext = () => useContext(LenisContext)

export function LenisProvider({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<LenisRef>(null)
    const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null)

    // Wait until lenis is ready
    useEffect(() => {
        let frame: number

        const checkLenis = () => {
            if (lenisRef.current?.lenis && !lenisInstance) {
                setLenisInstance(lenisRef.current.lenis)
            } else {
                frame = requestAnimationFrame(checkLenis)
            }
        }

        checkLenis()
        return () => cancelAnimationFrame(frame)
    }, [lenisInstance])

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
        <LenisContext.Provider value={{ lenis: lenisInstance }}>
            <ReactLenis
                root
                ref={lenisRef}
                options={{
                    autoRaf: false,
                    duration: 1.85,
                    wheelMultiplier: 0.7,
                    touchMultiplier: 0.8,
                    smoothWheel: true,
                    gestureOrientation: 'vertical',
                }}
            >
                {children}
            </ReactLenis>
        </LenisContext.Provider>
    )
}
