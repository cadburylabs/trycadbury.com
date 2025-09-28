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
    const sectionRef = useRef<HTMLElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const { lenis } = useLenisContext()

    useEffect(() => {
        if (!containerRef.current || !lenis) return

        const cards = cardsRef.current.filter(Boolean)
        if (cards.length === 0) return

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

        const cardsLength = cards.length

        cards.forEach((card, index) => {
            if (!card) return

            if (index < cards.length - 1) {
                const nextCard = cards[index + 1]
                const scaleValue =
                    (100 - cardsLength) / 100 + (index + 1) * 0.01

                ScrollTrigger.create({
                    trigger: nextCard,
                    start: 'top 60%',
                    end: 'top 40%',
                    scrub: 1,
                    id: `benefits-scale-${index}`,
                    animation: gsap.to(card, {
                        scale: scaleValue,
                        duration: 1,
                        ease: 'none',
                    }),
                })
            }

            const visiblePortion = 0
            const stackOffset = index * visiblePortion

            ScrollTrigger.create({
                trigger: cards[cards.length - 1],
                start: 'top 20%',
                end: 'top 5%',
                scrub: 1,
                id: `benefits-stack-${index}`,
                animation: gsap.to(card, {
                    y: -stackOffset,
                    duration: 1,
                    ease: 'none',
                }),
            })

            const headerHeight = 0
            const finalPushUp =
                (cardsLength - index - 1) * visiblePortion + headerHeight

            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: true,
                id: `benefits-hide-${index}`,
                animation: gsap.to(card, {
                    y: -finalPushUp,
                    duration: 1,
                    ease: 'none',
                }),
            })
        })

        ScrollTrigger.refresh()

        return () => {
            ScrollTrigger.getAll().forEach((t) => {
                if (t.vars.id?.includes('benefits-')) t.kill()
            })
            lenis.off('scroll', ScrollTrigger.update)
        }
    }, [lenis, n])

    return (
        <div className="bg-gradient-dots">
            <section
                ref={sectionRef}
                id={id}
                className="relative mx-3 lg:mx-5 bg-gradient-dots"
            >
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

                    <div ref={containerRef} className="relative">
                        {benefitsConfig.map((card, index) => {
                            const stackOffset = index * 40
                            return (
                                <div
                                    key={card.index ?? index}
                                    ref={(el) => {
                                        cardsRef.current[index] = el
                                    }}
                                    className="sticky h-[450px] lg:h-[426px]"
                                    style={{
                                        top: `${50 + stackOffset}px`,
                                        zIndex: index + 1,
                                    }}
                                >
                                    <div className="h-full transition-all duration-300">
                                        <BenefitsCard {...card} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
