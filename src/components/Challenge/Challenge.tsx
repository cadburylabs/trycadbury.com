'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useLenisContext } from '@/context/LenisContext'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { ChallengeCard } from './ChallengeCard'
import Image from 'next/image'
import pointIco from '@/assets/point.png'
import { LottieAnimation } from '../LottieAnimation'
import { challengeConfig } from '../contentConfig'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Challenge = ({ id = '' }: { id: string }) => {
    const { lenis } = useLenisContext()
    const sectionRef = useRef<HTMLElement | null>(null)
    const leftIconRef = useRef<HTMLDivElement | null>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const [activeCard, setActiveCard] = useState(0)
    const currentIcon = challengeConfig[activeCard]?.icon

    const updateActiveCard = useCallback((newIndex: number) => {
        setActiveCard((prevActive) =>
            prevActive !== newIndex ? newIndex : prevActive
        )
    }, [])

    useEffect(() => {
        const section = sectionRef.current
        const cards = cardsRef.current
        if (!section || cards.length === 0 || !lenis) return

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
            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: 'bottom bottom',
                pin: '.challenge-left-column',
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            })
        })

        // 🔹 All viewports: just track active card like Fix
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

    useEffect(() => {
        const iconElement = leftIconRef.current
        if (!iconElement) return
        gsap.fromTo(
            iconElement,
            { scale: 0.9, opacity: 0.7 },
            { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' }
        )
    }, [activeCard])

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

                <div className="lg:w-1/2 lg:flex-shrink-0">
                    <FlexContainer
                        direction="flex-col"
                        gap="gap-8 lg:gap-[40px]"
                        className="challenge-left-column relative pt-8 lg:py-32 px-4 lg:px-14 lg:h-screen lg:max-h-screen overflow-hidden"
                    >
                        {/* vertical gradient line */}
                        <span className="hidden lg:block absolute top-0 left-0 h-full w-px border-y-gradient" />
                        <span className="hidden lg:block absolute top-0 right-0 h-full w-px border-y-gradient" />

                        <FlexContainer
                            justifyContent="justify-between"
                            className="font-roboto-mono tracking-tight text-[#E4ECF4] uppercase"
                        >
                            <FlexContainer
                                width="w-fit"
                                gap="gap-1.5"
                                alignItems="items-center"
                                className="text-[13px] lg:text-[16px]"
                            >
                                <Image src={pointIco} alt="pointer icon" /> Our
                                Problem
                            </FlexContainer>
                            <span className="text-[13px] lg:text-[16px]">
                                /01
                            </span>
                        </FlexContainer>
                        <H2 className="lg:pt-[30px] lg:w-[160px] flex-shrink-0">
                            The{' '}
                            <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                                Challenge
                            </span>
                        </H2>

                        {/* Dynamic Lottie Icon */}
                        <div ref={leftIconRef} className="flex-shrink-0">
                            <LottieAnimation
                                animationData={currentIcon}
                                className="hidden lg:block w-[300px] max-w-[300px]"
                                key={`icon-${activeCard}`}
                            />
                        </div>
                    </FlexContainer>
                </div>

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
                                <ChallengeCard
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
