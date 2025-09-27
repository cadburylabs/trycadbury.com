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
    const cardsContainerRef = useRef<HTMLDivElement | null>(null)
    const [activeCard, setActiveCard] = useState(0)
    const currentIcon = challengeConfig[activeCard]?.icon

    const updateActiveCard = useCallback((newIndex: number) => {
        setActiveCard((prevActive) =>
            prevActive !== newIndex ? newIndex : prevActive
        )
    }, [])

    useEffect(() => {
        const section = sectionRef.current
        const cardsContainer = cardsContainerRef.current
        if (!section || !cardsContainer || !lenis) return

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
            const scrollDistance =
                challengeConfig.length * (window.innerHeight * 0.6)

            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: () => `+=${scrollDistance}`,
                pin: section,
                pinSpacing: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            })

            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                end: () => `+=${scrollDistance}`,
                onUpdate: (self) => {
                    const progress = self.progress
                    let cardIndex = 0

                    console.log(
                        `Progress: ${progress.toFixed(
                            3
                        )}, Current active: ${activeCard}`
                    )

                    if (progress <= 0.3) {
                        cardIndex = 0
                    } else if (progress <= 0.55) {
                        cardIndex = 1
                    } else if (progress <= 0.8) {
                        cardIndex = 2
                    } else {
                        cardIndex = 3
                    }

                    cardIndex = Math.min(cardIndex, challengeConfig.length - 1)

                    console.log(`Calculated cardIndex: ${cardIndex}`)

                    updateActiveCard(cardIndex)

                    const targetX = -cardIndex * 100
                    gsap.to(cardsContainer, {
                        x: `${targetX}%`,
                        duration: 0.6,
                        ease: 'power2.out',
                    })
                },
            })
        })

        mm.add('(max-width: 1023px)', () => {
            challengeConfig.forEach((_, index) => {
                ScrollTrigger.create({
                    trigger: section,
                    start: () => `${index * 25}% center`,
                    end: () => `${(index + 1) * 25}% center`,
                    onEnter: () => updateActiveCard(index),
                    onEnterBack: () => updateActiveCard(index),
                })
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
                        justifyContent="justify-center"
                        className="relative h-full lg:h-screen overflow-hidden pb-10 lg:py-32 px-4 lg:px-14"
                    >
                        <span className="hidden lg:block absolute top-0 right-0 h-full w-px border-y-gradient" />

                        <div className="hidden lg:block w-full h-full relative overflow-hidden">
                            <div
                                ref={cardsContainerRef}
                                className="flex absolute inset-0"
                            >
                                {challengeConfig.map((card, index) => (
                                    <div
                                        key={card.index}
                                        className="w-full h-full flex-shrink-0 flex items-center justify-center px-4"
                                    >
                                        <div className="w-full max-w-full">
                                            <ChallengeCard
                                                {...card}
                                                isActive={activeCard === index}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:hidden w-full space-y-10">
                            {challengeConfig.map((card, index) => (
                                <div key={card.index} className="w-full">
                                    <ChallengeCard
                                        {...card}
                                        isActive={activeCard === index}
                                    />
                                </div>
                            ))}
                        </div>
                    </FlexContainer>
                </div>
            </section>
        </div>
    )
}
