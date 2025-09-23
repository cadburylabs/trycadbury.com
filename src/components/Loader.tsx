'use client'

import React, { useEffect, useRef } from 'react'
import { LottieAnimation } from './LottieAnimation'
import loader from '@/assets/loader.json'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Loader = ({ isLoading }: { isLoading: boolean }) => {
    const loaderRef = useRef<HTMLDivElement>(null)
    const logoRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
            ScrollTrigger.refresh()
        }
    }, [isLoading])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // fade logo in quickly (0 → 1 opacity in 0.3s)
            gsap.fromTo(
                logoRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 1.15, delay: 0.15, ease: 'power2.out' }
            )

            // slide whole loader up after animation finishes
            gsap.to(loaderRef.current, {
                y: '-100%',
                duration: 0.5,
                delay: 3.6, // keep synced with your timer
                ease: 'power3.inOut',
            })
        }, loaderRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={loaderRef}
            className="fixed top-0 left-0 w-full h-screen flex justify-center items-center border-[0.5px] bg-gradient-black border-[#363E44] z-[100]"
        >
            <div ref={logoRef}>
                <LottieAnimation animationData={loader} className="w-[150px]" />
            </div>
        </div>
    )
}
