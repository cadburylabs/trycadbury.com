'use client'
import React, { useEffect, useRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { FixCard } from './FixCard'
import fixImage1 from '@/assets/fix_1.png'
import fixImage2 from '@/assets/fix_2.png'
import fixImage3 from '@/assets/fix_3.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import pointIco from '@/assets/point.png'

gsap.registerPlugin(ScrollTrigger)

const fixConfig = [
    {
        index: 'CH-01',
        title: 'Down with the bureaucracy',
        image: fixImage1,
        description:
            'Stop depending on large consulting firms that have to fit your needs into their bureaucracy. Cadbury is your always available AI powered NetSuite Consultant, ready to act when your business needs it—not the other way around.',
    },
    {
        index: 'CH-02',
        title: 'Context aware',
        image: fixImage2,
        description:
            'After installation, Cadbury automatically builds a dense understanding of the inner workings of your NetSuite instance by scanning scripts, workflows, and integrations. Combined with its own proprietary trained data—sourced from hundreds of expert NetSuite consultants—Cadbury moves faster and more accurately than the typical consultant.',
    },
    {
        index: 'CH-03',
        title: 'A modern DX',
        image: fixImage3,
        description:
            'Stop depending on large consulting firms that have to fit your needs into their bureaucracy. Cadbury is your always available AI powered NetSuite Consultant, ready to act when your business needs it—not the other way around.',
    },
]

export const Fix = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const section = sectionRef.current
        const track = trackRef.current
        if (!section || !track) return

        const mm = gsap.matchMedia()

        mm.add('(min-width: 1024px)', () => {
            const totalWidth = track.scrollWidth - section.offsetWidth
            const steps = fixConfig.length - 2

            gsap.to(track, {
                x: -totalWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'bottom bottom',
                    end: '+=' + totalWidth,
                    scrub: true,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    snap: {
                        snapTo: (value) => Math.round(value * steps) / steps,
                        duration: 0.3,
                        ease: 'power1.inOut',
                    },
                },
            })
        })

        mm.add('(max-width: 1023px)', () => {
            gsap.set(track, { clearProps: 'all' })
        })

        return () => mm.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative flex flex-col mx-5 overflow-hidden border-[0.5px] border-[#363E44]"
        >
            <FlexContainer
                direction="flex-col lg:flex-row"
                gap="gap-8 lg:gap-0"
                justifyContent="justify-between"
                className="relative py-8 lg:py-10 px-4 lg:px-14 lg:border-b-[0.5px] border-[#363E44]"
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
                        <Image src={pointIco} alt="pointer icon" /> Solution
                    </FlexContainer>
                    <span>/02</span>
                </FlexContainer>
                <FlexContainer
                    alignItems="items-center"
                    justifyContent="justify-between"
                >
                    <H2>
                        The{' '}
                        <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                            Fix
                        </span>
                    </H2>
                    <FlexContainer
                        width="w-fit"
                        gap="gap-1.5"
                        alignItems="items-center"
                        className="uppercase hidden lg:flex"
                    >
                        <Image src={pointIco} alt="" /> Solution
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer
                    justifyContent="justify-end"
                    alignItems="items-center"
                    className="hidden lg:flex"
                >
                    <span>/02</span>
                </FlexContainer>
            </FlexContainer>

            <FlexContainer
                ref={trackRef}
                direction="flex-col lg:flex-row"
                gap="lg:gap-[120px]"
                className="relative px-4 lg:px-14 pb-10 lg:py-[100px] will-change-transform"
            >
                {fixConfig.map((card) => (
                    <div key={card.index} className="shrink-0 lg:w-[40vw]">
                        <FixCard {...card} />
                    </div>
                ))}
            </FlexContainer>
        </section>
    )
}
