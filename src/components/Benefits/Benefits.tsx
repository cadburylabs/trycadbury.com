'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import pointIco from '@/assets/point.png'
import { BenefitsCard } from './BenefitsCard'
import { benefitsConfig } from '../contentConfig'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenisContext } from '@/context/LenisContext'

gsap.registerPlugin(ScrollTrigger)

export const Benefits = ({ id = '' }: { id: string }) => {
    const n = benefitsConfig.length
    const containerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const { lenis } = useLenisContext()

    const CARD_OFFSET = 40

    useEffect(() => {
        if (!containerRef.current || !lenis) return

        const cards = cardsRef.current.filter(Boolean)
        if (cards.length === 0) return

        // Tie ScrollTrigger to Lenis
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

        const isMobile = window.innerWidth < 1024

        // Initial setup
        gsap.set(cards, { opacity: 0, y: 20, scale: 0.95 })
        gsap.set(cards[0], { opacity: 1, y: 0, scale: 1 })

        // ScrollTrigger
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: isMobile ? 'top 65%' : 'top 70%', // earlier start
            end: isMobile ? 'bottom 35%' : 'bottom 30%', // earlier end
            id: 'benefits-card-container',
            onUpdate: (self) => {
                const progress = self.progress
                const totalCards = cards.length
                const cardIndex = Math.min(
                    Math.floor(progress * totalCards),
                    totalCards - 1
                )

                cards.forEach((card, i) => {
                    if (!card) return

                    if (i <= cardIndex) {
                        // Active or below → visible + stacked
                        gsap.to(card, {
                            opacity: 1,
                            y: i * CARD_OFFSET,
                            scale: 1,
                            duration: 0.4,
                            ease: 'power2.out',
                            overwrite: 'auto',
                        })
                    } else {
                        // Above → hide
                        gsap.to(card, {
                            opacity: 0,
                            y: 20,
                            scale: 0.95,
                            duration: 0.3,
                            ease: 'power2.out',
                            overwrite: 'auto',
                        })
                    }
                })
            },
        })

        ScrollTrigger.refresh()

        return () => {
            ScrollTrigger.getAll().forEach((t) => {
                if (t.vars.id === 'benefits-card-container') t.kill()
            })
            lenis.off('scroll', ScrollTrigger.update)
        }
    }, [lenis, n])

    return (
        <div className="bg-gradient-dots">
            <section id={id} className="relative mx-3 lg:mx-5 bg-gradient-dots">
                <div className="relative">
                    {/* vertical gradient line */}
                    <span className="absolute top-0 left-0 h-full w-px border-y-gradient z-40" />
                    <span className="absolute top-0 right-0 h-full w-px border-y-gradient z-40" />

                    <FlexContainer className="px-4 lg:px-14 py-10">
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
                                    className="text-[13px] lg:text-[16px]"
                                >
                                    <Image src={pointIco} alt="pointer icon" />{' '}
                                    Value
                                </FlexContainer>
                                <span className="text-[13px] lg:text-[16px]">
                                    /04
                                </span>
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
                            <span className="font-roboto-mono">/04</span>
                        </FlexContainer>
                    </FlexContainer>

                    <div
                        ref={containerRef}
                        className="relative h-[530px] lg:h-[500px]"
                    >
                        <div className="sticky top-20">
                            <div className="relative overflow-hidden h-[530px] lg:h-[500px]">
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
                </div>
            </section>
        </div>
    )
}
