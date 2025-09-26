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
        const leftIcon = leftIconRef.current
        const cards = cardsRef.current
        if (!section || !leftIcon || cards.length === 0 || !lenis) return

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

        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

        gsap.set(cards, { y: 60, opacity: 0.5, scale: 0.95 })
        if (cards[0]) gsap.set(cards[0], { y: 0, opacity: 1, scale: 1 })

        // Pin left column on desktop
        ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            pin: '.challenge-left-column',
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: (self) => {
                if (window.innerWidth < 1024) {
                    self.disable(false, true)
                } else {
                    self.enable()
                }
            },
        })

        // One trigger per card – switches when card center hits viewport center
        cards.forEach((card, index) => {
            if (!card) return
            ScrollTrigger.create({
                trigger: card,
                start: 'center 70%',
                end: 'center center',
                onEnter: () => {
                    updateActiveCard(index)
                    gsap.to(card, {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: 'power2.out',
                    })
                },
                onEnterBack: () => {
                    updateActiveCard(index)
                    gsap.to(card, {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: 'power2.out',
                    })
                },
                onLeave: () => {
                    gsap.to(card, {
                        y: -20,
                        opacity: 0.5,
                        scale: 0.98,
                        duration: 0.4,
                    })
                },
                onLeaveBack: () => {
                    gsap.to(card, {
                        y: 20,
                        opacity: 0.5,
                        scale: 0.98,
                        duration: 0.4,
                    })
                },
            })
        })

        ScrollTrigger.refresh()

        return () => {
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
        <section
            ref={sectionRef}
            id={id}
            className="relative flex flex-col lg:flex-row mx-3 lg:mx-5 overflow-hidden"
        >
            {/* vertical gradient line */}
            <span className="block lg:hidden absolute top-0 left-0 h-full w-px border-y-gradient" />
            <span className="block lg:hidden absolute top-0 right-0 h-full w-px border-y-gradient" />

            <div className="lg:w-1/2 lg:flex-shrink-0">
                <FlexContainer
                    direction="flex-col"
                    gap="lg:gap-[40px]"
                    className="challenge-left-column relative py-8 lg:py-32 px-4 lg:px-14 lg:h-screen lg:max-h-screen overflow-hidden"
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
                        >
                            <Image src={pointIco} alt="pointer icon" /> Our
                            Problem
                        </FlexContainer>
                        <span>/01</span>
                    </FlexContainer>
                    <H2 className="pt-[30px] lg:w-[160px] flex-shrink-0">
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
    )
}
