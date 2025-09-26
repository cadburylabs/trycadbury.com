'use client'
import React, { useRef, useEffect } from 'react'
import { H2 } from '../Typography/H2'
import { P } from '../Typography/P'
import { Button } from '../Button'
import { FlexContainer } from '../FlexContainer'
import Image from 'next/image'
import pointIco from '@/assets/point.png'
import logoColor from '@/assets/logoColor.svg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useLenisContext } from '@/context/LenisContext'
import { Footer } from '../Footer'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export const Contact = ({ id = '' }: { id: string }) => {
    const { lenis } = useLenisContext()
    const contactRef = useRef<HTMLElement>(null)
    const animatedBlockRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!contactRef.current || !animatedBlockRef.current || !lenis) return

        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
                if (arguments.length) {
                    lenis.scrollTo(value as number, { immediate: true })
                }
                return lenis.scroll
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

        gsap.set(animatedBlockRef.current, {
            y: 60,
            opacity: 0,
            visibility: 'visible',
        })

        const trigger = ScrollTrigger.create({
            trigger: contactRef.current,
            scroller: document.body,
            start: 'bottom 120%',
            end: 'bottom 70%',
            // markers: true,
            onEnter: () =>
                gsap.to(animatedBlockRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                }),
            onLeave: () =>
                gsap.to(animatedBlockRef.current, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                }),
            onEnterBack: () =>
                gsap.to(animatedBlockRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                }),
            onLeaveBack: () =>
                gsap.to(animatedBlockRef.current, {
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                }),
        })

        ScrollTrigger.refresh()
        return () => trigger.kill()
    }, [lenis])

    return (
        <div className="bg-[#090D14]">
            <section
                ref={contactRef}
                id={id}
                className="relative mx-3 lg:mx-5 pt-20 min-h-screen flex flex-col"
            >
                {/* gradient borders */}
                <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
                <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />
                <span className="absolute top-0 left-0 h-full w-px border-y-gradient z-40" />
                <span className="absolute top-0 right-0 h-full w-px border-y-gradient z-40" />

                {/* content */}
                <FlexContainer
                    direction="flex-col"
                    gap="gap-10"
                    alignItems="items-center"
                    className="h-full flex-1 justify-evenly lg:justify-between pb-[150px] lg:pb-10"
                >
                    <FlexContainer
                        direction="flex-col"
                        gap="gap-10"
                        center
                        className="px-5"
                    >
                        <FlexContainer direction="flex-col" gap="gap-5" center>
                            <FlexContainer
                                width="w-fit"
                                gap="gap-1.5"
                                alignItems="items-center"
                                className="uppercase text-[13px] lg:text-[16px] font-roboto-mono"
                            >
                                <Image src={pointIco} alt="" /> Start your
                                journey
                            </FlexContainer>
                            <H2>
                                Get{' '}
                                <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                                    Started
                                </span>
                            </H2>
                            <P>PS - we’re at SuiteWorld 2025. Come say hi!</P>
                        </FlexContainer>
                        <Button>Schedule a Consultation</Button>
                    </FlexContainer>
                    <Image src={logoColor} alt="" />
                </FlexContainer>

                <Footer animatedBlockRef={animatedBlockRef} />
            </section>
        </div>
    )
}
