'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import pointIco from '@/assets/point.png'
import { BenefitsCard } from './BenefitsCard'
import { benefitsConfig } from '../contentConfig'

export const Benefits: React.FC = () => {
    const n = benefitsConfig.length
    const [index, setIndex] = useState(0)
    const clamp = (v: number) => Math.max(0, Math.min(n - 1, v))

    const deckRef = useRef<HTMLDivElement>(null)
    const wheelLock = useRef(false)

    const DEADZONE = 10 // ignore tiny deltas
    const STEP_MS = 420 // matches CSS transition

    // Tiny in-view check (no IO/observer needed)
    const deckIsActive = () => {
        const el = deckRef.current
        if (!el) return false
        const r = el.getBoundingClientRect()
        const vh = window.innerHeight
        // visible fraction >= ~50%
        const visible = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0))
        return visible / Math.max(r.height, 1) >= 0.5
    }

    const onWheel = useCallback((e: WheelEvent) => {
        if (!deckIsActive()) return

        const dy = e.deltaY
        if (Math.abs(dy) <= DEADZONE) return

        if (wheelLock.current) {
            e.preventDefault()
            return
        }

        const dir = dy > 0 ? 1 : -1
        setIndex((curr) => {
            const next = clamp(curr + dir)
            if (next !== curr) {
                e.preventDefault()
                wheelLock.current = true
                setTimeout(() => {
                    wheelLock.current = false
                }, STEP_MS)
                return next
            }
            return curr // at edges, don't preventDefault → page can scroll
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        window.addEventListener('wheel', onWheel, { passive: false })
        return () => window.removeEventListener('wheel', onWheel)
    }, [onWheel])

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

                {/* One-card viewport
           Set --card-h per breakpoint with Tailwind arbitrary properties */}
                <div
                    ref={deckRef}
                    className="
            relative overflow-hidden border-b-[0.5px] border-[#363E44]
            [--card-h:450px] lg:[--card-h:236px]
          "
                    style={{ height: 'var(--card-h)' }}
                >
                    {/* Stacked column, translated by index * card height via CSS vars */}
                    <div className="absolute inset-0">
                        <div
                            className="w-full h-full"
                            style={
                                {
                                    '--i': index.toString(),
                                    transform:
                                        'translateY(calc(-1 * var(--i) * var(--card-h)))',
                                    transition:
                                        'transform 420ms cubic-bezier(.22,.61,.36,1)',
                                } as React.CSSProperties &
                                    Record<string, string | number>
                            }
                        >
                            {benefitsConfig.map((card, i) => (
                                <div
                                    key={card.index ?? i}
                                    className="w-full"
                                    style={{ height: 'var(--card-h)' }}
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
