'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import pointIco from '@/assets/point.png'
import { BenefitsCard } from './BenefitsCard'
import { benefitsConfig } from '../contentConfig'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Benefits: React.FC = () => {
    const n = benefitsConfig.length
    const containerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const [currentCard, setCurrentCard] = useState(0)

    const CARD_OFFSET = 40

    useEffect(() => {
        if (!containerRef.current) return

        const cards = cardsRef.current.filter(Boolean)
        if (cards.length === 0) return

        // Wait for Lenis to be ready
        const initScrollTrigger = () => {
            // Clear previous animations
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.vars.id?.includes('benefits-card')) {
                    trigger.kill()
                }
            })

            // Set initial states
            cards.forEach((card, index) => {
                if (index === 0) {
                    // First card is always visible
                    gsap.set(card, {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        zIndex: 1,
                    })
                } else {
                    // Other cards start hidden
                    gsap.set(card, {
                        opacity: 0,
                        y: 20,
                        scale: 0.95,
                        zIndex: index + 1, // Higher index = higher z-index
                    })
                }
            })

            // Create ScrollTrigger that works with Lenis
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top 70%',
                end: 'bottom 30%',
                id: 'benefits-card-container',
                refreshPriority: -1, // Lower priority for Lenis compatibility
                onUpdate: (self) => {
                    const progress = self.progress
                    const totalCards = cards.length
                    // Much more gradual progression - each card needs more scroll
                    const cardIndex = Math.min(
                        Math.floor(progress * totalCards * 0.8 + progress * 2),
                        totalCards - 1
                    )

                    if (cardIndex !== currentCard) {
                        setCurrentCard(cardIndex)

                        // Animate cards with better performance
                        cards.forEach((card, index) => {
                            if (index <= cardIndex) {
                                // Show card
                                gsap.to(card, {
                                    opacity: 1,
                                    y: index * CARD_OFFSET,
                                    scale: 1,
                                    duration: 0.5,
                                    ease: 'power2.out',
                                    delay: index * 0.05,
                                    overwrite: true, // Prevent animation conflicts
                                })
                            } else {
                                // Hide card
                                gsap.to(card, {
                                    opacity: 0,
                                    y: 20,
                                    scale: 0.95,
                                    duration: 0.3,
                                    ease: 'power2.out',
                                    overwrite: true,
                                })
                            }
                        })
                    }
                },
            })

            // Refresh ScrollTrigger after setup
            ScrollTrigger.refresh()
        }

        // Delay initialization to ensure Lenis is ready
        const timer = setTimeout(initScrollTrigger, 100)

        return () => {
            clearTimeout(timer)
            ScrollTrigger.getAll().forEach((trigger) => {
                if (trigger.vars.id?.includes('benefits-card')) {
                    trigger.kill()
                }
            })
        }
    }, [n, currentCard])

    return (
        <section className="relative mx-5">
            <div className="relative border-x-[0.5px] border-[#363E44]">
                <FlexContainer className="px-14 py-10 border-b-[0.5px] border-[#363E44]">
                    <FlexContainer
                        direction="flex-col lg:flex-row"
                        gap="gap-8 lg:gap-0"
                        justifyContent="justify-between"
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
                                <Image src={pointIco} alt="pointer icon" />{' '}
                                Value
                            </FlexContainer>
                            <span>/{String(n).padStart(2, '0')}</span>
                        </FlexContainer>

                        <H2>Benefits</H2>

                        <FlexContainer
                            width="w-fit"
                            gap="gap-1.5"
                            alignItems="items-center"
                            className="hidden lg:flex uppercase"
                        >
                            <Image src={pointIco} alt="" /> Value
                        </FlexContainer>
                    </FlexContainer>

                    <FlexContainer
                        justifyContent="justify-end"
                        alignItems="items-center"
                        className="hidden lg:flex"
                    >
                        <span>/{String(n).padStart(2, '0')}</span>
                    </FlexContainer>
                </FlexContainer>

                {/* Compact Stacking Cards Container */}
                <div
                    ref={containerRef}
                    className="relative h-[530px] lg:h-[485px] border-b-[0.5px] border-[#363E44]"
                >
                    <div className="sticky top-20">
                        <div className="relative overflow-hidden h-[530px] lg:h-[485px]">
                            {benefitsConfig.map((card, index) => (
                                <div
                                    key={card.index ?? index}
                                    ref={(el) => {
                                        cardsRef.current[index] = el
                                    }}
                                    className="absolute top-0 left-0 w-full h-[450px] lg:h-[426px]"
                                >
                                    <BenefitsCard {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="animate-move-x-bottom" />
            </div>
        </section>
    )
}
