'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
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

export const Challenge = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const leftIconRef = useRef<HTMLDivElement | null>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    const [activeCard, setActiveCard] = useState(0)
    const currentIcon = challengeConfig[activeCard]?.icon

    // Debounced state update to prevent infinite loops
    const updateActiveCard = useCallback(
        (newIndex: number) => {
            setActiveCard((prevActive) => {
                if (prevActive !== newIndex) {
                    console.log(
                        `Updating active card from ${prevActive} to ${newIndex}`
                    )
                    return newIndex
                }
                return prevActive
            })
        },
        [] // Remove activeCard from dependencies
    )

    useEffect(() => {
        const section = sectionRef.current
        const leftIcon = leftIconRef.current
        const cards = cardsRef.current

        if (!section || !leftIcon || cards.length === 0) return

        // Set up ScrollTrigger to work with Lenis if it exists
        if (window.lenis) {
            const lenis = window.lenis
            lenis.on('scroll', ScrollTrigger.update)
            ScrollTrigger.scrollerProxy(document.body, {
                scrollTop(value) {
                    return arguments.length
                        ? lenis.scrollTo(value as number, 0, 0)
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
        }

        // Clean up any existing triggers
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

        // Set initial states for cards
        gsap.set(cards, {
            y: 60,
            opacity: 0.5,
            scale: 0.95,
        })

        if (cards[0]) {
            gsap.set(cards[0], {
                y: 0,
                opacity: 1,
                scale: 1,
            })
        }

        // Pin the left column for the duration of the section
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
                    // lg breakpoint
                    self.disable(false, true) // disable without killing
                } else {
                    self.enable()
                }
            },
        })

        // Create individual triggers for each card, starting from the LAST card
        // This prevents conflicts between triggers
        for (let index = cards.length - 1; index >= 0; index--) {
            const card = cards[index]
            if (!card) continue

            ScrollTrigger.create({
                trigger: card,
                start: 'top 80%',
                end: 'bottom 50%',
                onEnter: () => {
                    updateActiveCard(index)

                    // Animate current card in
                    gsap.to(card, {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: 'power2.out',
                    })
                },
                onLeave: () => {
                    // Animate card out
                    gsap.to(card, {
                        y: -20,
                        opacity: 0.5,
                        scale: 0.98,
                        duration: 0.4,
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
                onLeaveBack: () => {
                    gsap.to(card, {
                        y: 20,
                        opacity: 0.5,
                        scale: 0.98,
                        duration: 0.4,
                        ease: 'power2.out',
                    })
                },
            })
        }

        // Add a special trigger that covers the area ABOVE the first card
        // This ensures the first card becomes active when scrolling back up
        ScrollTrigger.create({
            trigger: cards[0],
            start: 'top bottom', // When the top of first card hits bottom of viewport
            end: 'top 80%', // Until it hits the normal trigger zone
            onEnterBack: () => {
                updateActiveCard(0)

                if (cards[0]) {
                    gsap.to(cards[0], {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 0.6,
                        ease: 'power2.out',
                    })
                }
            },
        })

        // Add a trigger at the section level for additional safety
        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'top top',
            onEnterBack: () => {
                // Only set to first card if we're not already past it
                const firstCardRect = cards[0]?.getBoundingClientRect()
                const viewportHeight = window.innerHeight

                if (firstCardRect && firstCardRect.top < viewportHeight * 0.8) {
                    updateActiveCard(0)

                    if (cards[0]) {
                        gsap.to(cards[0], {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 0.6,
                            ease: 'power2.out',
                        })
                    }
                }
            },
        })

        // Refresh ScrollTrigger
        ScrollTrigger.refresh()

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            if (window.lenis) {
                window.lenis.off('scroll', ScrollTrigger.update)
            }
        }
    }, []) // Remove activeCard from dependencies to prevent infinite loop

    // Handle icon animation separately
    useEffect(() => {
        const iconElement = leftIconRef.current
        if (!iconElement) return

        // Smooth transition when icon changes
        gsap.fromTo(
            iconElement,
            { scale: 0.9, opacity: 0.7 },
            { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' }
        )
    }, [activeCard]) // Only depend on activeCard for icon animation

    return (
        <section
            ref={sectionRef}
            className="relative flex flex-col lg:flex-row mx-5 overflow-hidden"
        >
            <div className="lg:w-1/2 lg:flex-shrink-0">
                <FlexContainer
                    direction="flex-col"
                    gap="lg:gap-[40px]"
                    className="challenge-left-column relative py-8 lg:py-32 px-4 lg:px-14 border-r-[0.5px] border-l-[0.5px] lg:border-b-[0.5px] border-[#363E44] lg:h-screen lg:max-h-screen overflow-hidden"
                >
                    <div className="animate-move-y-left" />
                    <div className="animate-move-y-right" />
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
                            key={`icon-${activeCard}`} // Force re-render when activeCard changes
                        />
                    </div>
                </FlexContainer>
            </div>

            <div className="lg:w-1/2 lg:flex-shrink-0">
                <FlexContainer
                    direction="flex-col"
                    gap="gap-10 lg:gap-[120px]"
                    className="relative h-full xl:justify-between pb-10 lg:py-32 px-4 lg:px-14 border-l-[0.5px] lg:border-l-0 border-r-[0.5px] border-b-[0.5px] border-[#363E44] overflow-hidden"
                >
                    <div className="animate-move-y-right" />
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
            <div className="animate-move-x-bottom" />
        </section>
    )
}
