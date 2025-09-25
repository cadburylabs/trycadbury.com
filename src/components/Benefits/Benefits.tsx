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
    const lastIndex = useRef(0)
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

        // Initial setup
        gsap.set(cards, { opacity: 0, y: 20, scale: 0.95 })
        gsap.set(cards[0], { opacity: 1, y: 0, scale: 1 })

        // ScrollTrigger
        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            id: 'benefits-card-container',
            onUpdate: (self) => {
                const progress = self.progress
                const totalCards = cards.length
                const cardIndex = Math.min(
                    Math.floor(progress * totalCards * 0.8 + progress * 2),
                    totalCards - 1
                )

                if (cardIndex !== lastIndex.current) {
                    const prev = cards[lastIndex.current]
                    const next = cards[cardIndex]

                    if (prev) {
                        gsap.to(prev, {
                            opacity: 0,
                            y: 20,
                            scale: 0.95,
                            duration: 0.3,
                            ease: 'power2.out',
                            overwrite: 'auto',
                        })
                    }
                    if (next) {
                        gsap.to(next, {
                            opacity: 1,
                            y: cardIndex * CARD_OFFSET,
                            scale: 1,
                            duration: 0.5,
                            ease: 'power2.out',
                            overwrite: 'auto',
                        })
                    }

                    lastIndex.current = cardIndex
                }
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
        <section id={id} className="relative mx-3 lg:mx-5">
            <div className="relative">
                {/* vertical gradient line */}
                <span className="absolute top-0 left-0 h-full w-px border-y-gradient z-50" />
                <span className="absolute top-0 right-0 h-full w-px border-y-gradient z-50" />

                <FlexContainer className="px-14 py-10">
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
                            <span>/04</span>
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
                        <span>/04</span>
                    </FlexContainer>
                </FlexContainer>

                <div
                    ref={containerRef}
                    className="relative h-[530px] lg:h-[485px]"
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
            </div>
        </section>
    )
}
