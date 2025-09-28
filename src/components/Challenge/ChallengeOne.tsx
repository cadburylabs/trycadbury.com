'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useLenisContext } from '@/context/LenisContext'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { ChallengeCardOne } from './ChallengeCardOne'
import Image from 'next/image'
import pointIco from '@/assets/point.png'
import { challengeConfig } from '../contentConfig'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ChallengeCardTwo } from './ChallengeCardTwo'

gsap.registerPlugin(ScrollTrigger)

export const ChallengeOne = ({ id = '' }: { id: string }) => {
    const { lenis } = useLenisContext()
    const sectionRef = useRef<HTMLElement | null>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const titleRef = useRef<HTMLHeadingElement | null>(null)
    const [activeCard, setActiveCard] = useState(0)

    const updateActiveCard = useCallback((newIndex: number) => {
        setActiveCard((prevActive) =>
            prevActive !== newIndex ? newIndex : prevActive
        )
    }, [])

    useEffect(() => {
        const section = sectionRef.current
        const cards = cardsRef.current
        if (!section || cards.length === 0 || !lenis) return

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
            // Pin the whole left column
            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: 'bottom bottom',
                pin: '.challenge-left-column',
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            })

            // Pin only the H2 inside the column
            if (titleRef.current) {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    end: 'bottom bottom',
                    pin: titleRef.current,
                    pinSpacing: false,
                })
            }
        })

        // Track active card
        cards.forEach((card, index) => {
            if (!card) return
            ScrollTrigger.create({
                trigger: card,
                start: 'center 70%',
                end: 'center center',
                onEnter: () => updateActiveCard(index),
                onEnterBack: () => updateActiveCard(index),
            })
        })

        ScrollTrigger.refresh()

        return () => {
            mm.revert()
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            lenis.off('scroll', ScrollTrigger.update)
        }
    }, [lenis, updateActiveCard])

    return (
        <div className="bg-gradient-dots">
            <section
                ref={sectionRef}
                id={id}
                className="relative flex flex-col lg:flex-row mx-3 lg:mx-5 overflow-hidden bg-gradient-dots"
            >
                {/* vertical gradient line */}
                <span className="block lg:hidden absolute top-0 left-0 h-full w-px border-y-gradient" />
                <span className="block lg:hidden absolute top-0 right-0 h-full w-px border-y-gradient" />

                {/* Left column */}
                <div className="lg:w-1/2 lg:flex-shrink-0">
                    <FlexContainer
                        direction="flex-col"
                        gap="gap-10"
                        className="relative h-full xl:justify-between pb-10 lg:py-32 px-4 lg:px-14 overflow-hidden"
                    >
                        <span className="hidden lg:block absolute top-0 right-0 h-full w-px border-y-gradient" />

                        {challengeConfig.map((card, index) => (
                            <div
                                key={card.index}
                                ref={(el) => {
                                    cardsRef.current[index] = el
                                }}
                                className="w-full max-w-full"
                            >
                                <ChallengeCardTwo {...card} />
                            </div>
                        ))}
                    </FlexContainer>
                </div>

                {/* Right column */}
                <div className="lg:w-1/2 lg:flex-shrink-0">
                    <FlexContainer
                        direction="flex-col"
                        gap="gap-10 lg:gap-[120px]"
                        className="relative h-full xl:justify-between pb-10 lg:py-32 px-4 lg:px-14 overflow-hidden"
                    >
                        <span className="hidden lg:block absolute top-0 right-0 h-full w-px border-y-gradient" />

                        {challengeConfig.map((card, index) => (
                            <div
                                key={card.index}
                                ref={(el) => {
                                    cardsRef.current[index] = el
                                }}
                                className="w-full max-w-full"
                            >
                                <ChallengeCardOne
                                    {...card}
                                    isActive={activeCard === index}
                                />
                            </div>
                        ))}
                    </FlexContainer>
                </div>
            </section>
        </div>
    )
}
