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

        const totalWidth = track.scrollWidth - section.offsetWidth
        const steps = fixConfig.length - 2 // since you want 2 visible

        gsap.to(track, {
            x: -totalWidth,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'bottom bottom', // pin when bottom reaches viewport
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

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill())
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="relative flex flex-col mx-5 overflow-hidden border-[0.5px] border-[#363E44]"
        >
            {/* Header (no sticky) */}
            <FlexContainer
                justifyContent="justify-between"
                className="relative py-10 px-14 border-b-[0.5px] border-[#363E44]"
            >
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
                    <span>Solution</span>
                </FlexContainer>
                <FlexContainer
                    justifyContent="justify-end"
                    alignItems="items-center"
                >
                    <span>/02</span>
                </FlexContainer>
            </FlexContainer>

            {/* Track (only flex + spacing, no borders) */}
            <FlexContainer
                ref={trackRef}
                gap="gap-[120px]"
                className="relative px-14 py-[100px] will-change-transform"
            >
                {fixConfig.map((card) => (
                    <div key={card.index} className="shrink-0 w-[40vw]">
                        <FixCard {...card} />
                    </div>
                ))}
            </FlexContainer>
        </section>
    )
}
