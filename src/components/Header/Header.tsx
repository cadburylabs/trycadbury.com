'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FlexContainer } from '../FlexContainer'
import { TypographyLead } from '../Typography/Typography'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import icoButton from '@/assets/icoButton.svg'
import gsap from 'gsap'
import { useLenisContext } from '@/context/LenisContext'

const menuConfig = [
    { label: 'The Challenge', target: 'challenge' },
    { label: 'The Fix', target: 'fix' },
    { label: 'How it works', target: 'online' },
    { label: 'Benefits', target: 'benefits' },
    { label: 'Comparison', target: 'plans' },
]

export const Header = () => {
    const { lenis } = useLenisContext()
    const lineRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const navRef = useRef<HTMLUListElement>(null)
    const loopTween = useRef<gsap.core.Tween>(null)
    const [locked, setLocked] = useState(false)

    useEffect(() => {
        if (lineRef.current && containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth
            const lineWidth = 100

            loopTween.current = gsap.to(lineRef.current, {
                x: containerWidth - lineWidth,
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            })
        }
    }, [])

    useEffect(() => {
        console.log('Lenis in Header:', lenis)
    }, [lenis])

    const moveToLink = (target: HTMLElement) => {
        if (!lineRef.current || !containerRef.current) return
        if (loopTween.current) loopTween.current.kill()

        const linkRect = target.getBoundingClientRect()
        const containerRect = containerRef.current!.getBoundingClientRect()

        gsap.to(lineRef.current, {
            x: linkRect.left - containerRect.left - 28,
            width: linkRect.width + 14,
            duration: 0.4,
            ease: 'power3.out',
        })
    }

    const resumeLoop = () => {
        if (!locked && lineRef.current && containerRef.current) {
            if (loopTween.current) loopTween.current.kill()

            const containerWidth = containerRef.current.offsetWidth
            const lineWidth = lineRef.current.offsetWidth
            const currentX = gsap.getProperty(lineRef.current, 'x') as number

            loopTween.current = gsap.to(lineRef.current, {
                x:
                    currentX >= containerWidth / 2
                        ? 0
                        : containerWidth - lineWidth,
                duration: 20,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            })
        }
    }

    const lockLine = (target: HTMLElement) => {
        moveToLink(target)
        setLocked(true)
    }

    const handleNavClick = (
        e: React.MouseEvent,
        targetId: string,
        li: HTMLElement
    ) => {
        e.preventDefault()
        lockLine(li)

        const section = document.getElementById(targetId)
        if (section && lenis) {
            console.log('[NavClick] Scrolling to', targetId)
            lenis.scrollTo(section, { offset: -80 }) // adjust for header
        } else {
            console.warn('[NavClick] Lenis not available in context')
        }
    }

    return (
        <header className="fixed top-0 left-0 w-full px-3 lg:px-5 z-50 font-roboto-mono">
            <FlexContainer
                ref={containerRef}
                justifyContent="justify-between"
                alignItems="items-center"
                className="relative py-3.5 px-5 border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-[#363E44] bg-gradient-dots"
            >
                <div
                    ref={lineRef}
                    className="absolute bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#6de1ce] to-transparent w-[100px]"
                />

                <FlexContainer width="w-fit" gap="gap-[7px]">
                    <Image src={logo} alt="Cadbury logo" />
                    <TypographyLead className="font-pp-montreal">
                        Cadbury
                    </TypographyLead>
                </FlexContainer>
                <nav>
                    <ul ref={navRef} className="hidden lg:flex gap-7 relative">
                        {menuConfig.map(({ label, target }) => (
                            <li
                                key={label}
                                className="cursor-pointer tracking-tight text-[#cfdae5]"
                                onMouseEnter={(e) =>
                                    moveToLink(e.currentTarget)
                                }
                                onMouseLeave={resumeLoop}
                                onClick={(e) =>
                                    handleNavClick(e, target, e.currentTarget)
                                }
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                    <a className="inline-block lg:hidden">MENU</a>
                </nav>
                <button className="hidden lg:flex gap-3 px-3.5 py-2.5 bg-gradient-to-r text-[15px] from-[#0DBFBB33] to-[#0F8D8C33] text-[#6DE1CE] font-medium tracking-tight uppercase cursor-pointer">
                    Let’s talk
                    <Image
                        src={icoButton}
                        alt="button icon"
                        className="inline-block"
                    />
                </button>
            </FlexContainer>
        </header>
    )
}
