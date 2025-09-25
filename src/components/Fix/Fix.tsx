'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { FixCard } from './FixCard'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import pointIco from '@/assets/point.png'
import { fixConfig } from '../contentConfig'
import { useLenisContext } from '@/context/LenisContext'

gsap.registerPlugin(ScrollTrigger)

export const Fix = ({ id = '' }: { id: string }) => {
    const { lenis } = useLenisContext()
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const trackRef = useRef<HTMLDivElement | null>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const [activeCard, setActiveCard] = useState(0)

    useEffect(() => {
        if (!lenis) return // 🔹 wait until lenis is ready

        const section = sectionRef.current
        const track = trackRef.current
        if (!section || !track) return

        // 🔹 Tie ScrollTrigger to Lenis
        lenis.on('scroll', ScrollTrigger.update)
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                return arguments.length
                    ? lenis.scrollTo(value as number, { immediate: true })
                    : lenis.scroll ?? 0
            },
            getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: window.innerWidth,
                    height: window.innerHeight,
                }
            },
            pinType: document.body.style.transform ? 'transform' : 'fixed',
        })

        const mm = gsap.matchMedia()

        mm.add('(min-width: 1024px)', () => {
            const totalWidth = track.scrollWidth - section.offsetWidth
            const steps = fixConfig.length - 2

            gsap.to(track, {
                x: -totalWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'bottom bottom',
                    end: '+=' + totalWidth,
                    scrub: true,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    snap: {
                        snapTo: (value) => Math.round(value * steps) / steps,
                        duration: 0.3,
                        ease: 'power1.inOut',
                    },
                },
            })
        })

        // Mobile fallback
        mm.add('(max-width: 1023px)', () => {
            const cards = cardsRef.current
            gsap.set(track, { clearProps: 'all' })

            cards.forEach((card, index) => {
                if (!card) return
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 80%',
                    end: 'bottom 50%',
                    onEnter: () => setActiveCard(index),
                    onEnterBack: () => setActiveCard(index),
                })
            })
        })

        ScrollTrigger.refresh()

        return () => {
            mm.revert()
            ScrollTrigger.getAll().forEach((t) => t.kill())
            lenis.off('scroll', ScrollTrigger.update)
        }
    }, [lenis])

    return (
        <section
            ref={sectionRef}
            id={id}
            className="relative flex flex-col overflow-hidden border-[#363E44]"
        >
            <FlexContainer
                direction="flex-col lg:flex-row"
                gap="gap-8 lg:gap-0"
                justifyContent="justify-between"
                className="relative py-8 lg:py-10 px-4 lg:px-14 lg:border-b-[0.5px] lg:border-t-[0.5px] border-[#363E44]"
            >
                <FlexContainer
                    justifyContent="justify-between"
                    className="lg:hidden font-roboto-mono tracking-tight text-[#E4ECF4] uppercase"
                >
                    <FlexContainer
                        width="w-fit"
                        gap="gap-1.5"
                        alignItems="items-center"
                    >
                        <Image src={pointIco} alt="pointer icon" /> Solution
                    </FlexContainer>
                    <span>/02</span>
                </FlexContainer>
                <FlexContainer
                    alignItems="items-center"
                    justifyContent="justify-between"
                >
                    <H2>
                        The{' '}
                        <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                            Fix
                        </span>
                    </H2>
                    <FlexContainer
                        width="w-fit"
                        gap="gap-1.5"
                        alignItems="items-center"
                        className="hidden lg:flex uppercase"
                    >
                        <Image src={pointIco} alt="" /> Solution
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer
                    justifyContent="justify-end"
                    alignItems="items-center"
                    className="hidden lg:flex"
                >
                    <span>/02</span>
                </FlexContainer>
            </FlexContainer>

            <FlexContainer
                ref={trackRef}
                direction="flex-col lg:flex-row"
                gap="lg:gap-[120px]"
                className="relative px-4 lg:px-14 pb-10 lg:py-[100px] will-change-transform"
            >
                {fixConfig.map((card, index) => (
                    <div
                        key={card.index}
                        ref={(el) => {
                            cardsRef.current[index] = el
                        }}
                        className="shrink-0 lg:w-[40vw]"
                    >
                        <FixCard {...card} isActive={activeCard === index} />
                    </div>
                ))}
            </FlexContainer>
        </section>
    )
}
