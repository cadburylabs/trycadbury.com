'use client'
import React, { useEffect, useRef, useState } from 'react'
import { FlexContainer } from '../FlexContainer'
import { TypographyLead } from '../Typography/Typography'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import icoButton from '@/assets/icoButton.svg'
import gsap from 'gsap'
import { useLenisContext } from '@/context/LenisContext'
import { Form } from '../Contact/Form'
import { Modal } from '../Modal'
import videoPreview from '@/assets/videoPreview.png'
import icoBack from '@/assets/icoBack.svg'
import { VideoPreview } from '../VideoPreview'

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

    const overlayRef = useRef<HTMLDivElement>(null)
    const linksRef = useRef<HTMLLIElement[]>([])
    const [mobileOpen, setMobileOpen] = useState(false)

    const loopTween = useRef<gsap.core.Tween>(null)
    const [locked, setLocked] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [showVideo, setShowVideo] = useState(false)

    // inside Header component
    useEffect(() => {
        const mql = window.matchMedia('(min-width: 1024px)')

        const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
            if (e.matches && mobileOpen) {
                setMobileOpen(false)
                if (overlayRef.current) {
                    gsap.set(overlayRef.current, {
                        y: '-100%',
                        opacity: 0,
                        pointerEvents: 'none',
                    })
                }
            }
        }

        mql.addEventListener('change', onChange)
        return () => mql.removeEventListener('change', onChange)
    }, [mobileOpen])

    // --- Desktop line animation ---
    useEffect(() => {
        if (lineRef.current && containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth
            const lineWidth = lineRef.current.offsetWidth

            loopTween.current = gsap.to(lineRef.current, {
                x: containerWidth - lineWidth - 28,
                duration: 14,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            })
        }
    }, [])

    const resumeTween = useRef<gsap.core.Tween | null>(null)

    const moveToLink = (target: HTMLElement) => {
        if (!lineRef.current || !containerRef.current) return
        if (loopTween.current) loopTween.current.kill()
        if (resumeTween.current) resumeTween.current.kill()

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
            if (resumeTween.current) resumeTween.current.kill()

            const containerWidth = containerRef.current.offsetWidth
            const lineWidth = lineRef.current.offsetWidth

            resumeTween.current = gsap.to(lineRef.current, {
                x: 0,
                duration: 14,
                ease: 'power2.out',
                onComplete: () => {
                    resumeTween.current = null
                    loopTween.current = gsap.to(lineRef.current, {
                        x: containerWidth - lineWidth - 28,
                        duration: 14,
                        repeat: -1,
                        yoyo: true,
                        ease: 'power1.inOut',
                        fromCurrent: true,
                    })
                },
            })
        }
    }

    const lockLine = (target: HTMLElement) => {
        moveToLink(target)
        setLocked(true)
    }

    // --- Mobile overlay animation ---
    const toggleMobileMenu = () => {
        if (!overlayRef.current) return

        if (!mobileOpen) {
            setMobileOpen(true)

            // Overlay in
            gsap.to(overlayRef.current, {
                y: '0%',
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out',
                pointerEvents: 'auto',
            })

            // Sequence for children
            const tl = gsap.timeline({ delay: 0.2 })
            tl.fromTo(
                linksRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power3.out',
                    stagger: 0.1,
                }
            )
                .fromTo(
                    '.overlay-cta',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
                    '>-0.1' // start right after links
                )
                .fromTo(
                    '.overlay-video',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
                    '>-0.1'
                )
        } else {
            // Close children first
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.to(overlayRef.current, {
                        y: '-100%',
                        opacity: 0,
                        duration: 0.4,
                        ease: 'power3.in',
                        onComplete: () => setMobileOpen(false),
                    })
                },
            })

            tl.to('.overlay-video', {
                y: 30,
                opacity: 0,
                duration: 0.3,
                ease: 'power3.in',
            })
                .to(
                    '.overlay-cta',
                    { y: 30, opacity: 0, duration: 0.3, ease: 'power3.in' },
                    '<'
                )
                .to(
                    linksRef.current.slice().reverse(), // reverse order for nav items
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power3.in',
                        stagger: 0.05,
                    },
                    '<'
                )
        }
    }

    const handleNavClick = (
        e: React.MouseEvent,
        targetId: string,
        li: HTMLElement
    ) => {
        e.preventDefault()

        // desktop underline
        lockLine(li)

        // mobile close
        if (mobileOpen) {
            toggleMobileMenu()
        }

        // delayed scroll
        setTimeout(() => {
            const section = document.getElementById(targetId)
            if (section && lenis) {
                lenis.scrollTo(section, { offset: -80 })
            }
        }, 300)
    }

    // close overlay safely
    const closeOverlay = (onDone?: () => void) => {
        if (!overlayRef.current || !mobileOpen) {
            onDone?.()
            return
        }

        const tl = gsap.timeline({
            onComplete: () => {
                setMobileOpen(false)
                onDone?.()
            },
        })

        tl.to('.overlay-video', {
            y: 30,
            opacity: 0,
            duration: 0.25,
            ease: 'power3.in',
        })
            .to(
                '.overlay-cta',
                { y: 30, opacity: 0, duration: 0.25, ease: 'power3.in' },
                '<'
            )
            .to(
                linksRef.current.slice().reverse(),
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.25,
                    ease: 'power3.in',
                    stagger: 0.05,
                },
                '<'
            )
            .to(overlayRef.current, {
                y: '-100%',
                opacity: 0,
                duration: 0.4,
                ease: 'power3.in',
                pointerEvents: 'none',
            })
    }

    const openForm = () => {
        if (mobileOpen) {
            closeOverlay(() => setShowForm(true)) // pass callback
        } else {
            setShowForm(true)
        }
    }

    const openVideo = () => {
        if (mobileOpen) {
            closeOverlay(() => setShowVideo(true))
        } else {
            setShowVideo(true)
        }
    }

    return (
        <>
            <header className="fixed top-0 left-0 w-full px-[13px] lg:px-[21px] z-[100] font-roboto-mono">
                <FlexContainer
                    ref={containerRef}
                    justifyContent="justify-between"
                    alignItems="items-center"
                    className={`relative py-3.5 px-5 ${
                        mobileOpen ? '' : 'bg-gradient-dots'
                    }`}
                >
                    {/* gradient borders */}
                    {!mobileOpen && (
                        <>
                            <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
                            <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />
                        </>
                    )}

                    {/* moving line (desktop only) */}
                    <div
                        ref={lineRef}
                        className="absolute bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#6de1ce] to-transparent w-[100px] hidden lg:block"
                    />

                    {/* logo */}
                    <FlexContainer width="w-fit" gap="gap-[7px]">
                        <Image src={logo} alt="Cadbury logo" />
                        <TypographyLead className="font-pp-montreal cursor-default">
                            Cadbury
                        </TypographyLead>
                    </FlexContainer>

                    {/* nav */}
                    <nav>
                        <ul
                            ref={navRef}
                            className="hidden lg:flex gap-7 relative"
                        >
                            {menuConfig.map(({ label, target }) => (
                                <li
                                    key={label}
                                    className="cursor-pointer tracking-tight text-[#cfdae5]"
                                    onMouseEnter={(e) =>
                                        moveToLink(e.currentTarget)
                                    }
                                    onMouseLeave={resumeLoop}
                                    onClick={(e) =>
                                        handleNavClick(
                                            e,
                                            target,
                                            e.currentTarget
                                        )
                                    }
                                >
                                    {label}
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden text-[#cfdae5] tracking-tight"
                        >
                            {mobileOpen ? 'CLOSE' : 'MENU'}
                        </button>
                    </nav>

                    {/* desktop CTA */}
                    <button
                        onClick={() => setShowForm(true)}
                        className="hidden lg:flex gap-3 px-3.5 py-2.5 bg-gradient-to-r from-[#0DBFBB33] to-[#0F8D8C33] hover:from-[#0DBFBB66] hover:to-[#0F8D8C66] text-[15px] text-[#6DE1CE] font-medium tracking-tight uppercase cursor-pointer transition-colors duration-300"
                    >
                        Let’s talk
                        <Image
                            src={icoButton}
                            alt="button icon"
                            className="inline-block"
                        />
                    </button>
                </FlexContainer>
            </header>

            {/* mobile overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 pt-[80px] px-8 z-50 lg:hidden md:items-center flex flex-col font-roboto-mono"
                style={{
                    transform: 'translateY(-100%)',
                    opacity: 0,
                    pointerEvents: 'none',
                    background:
                        'linear-gradient(281deg, rgba(9, 13, 20, 0.01) 38.07%, rgba(18, 26, 33, 0.01) 97.55%)',
                    backdropFilter: 'blur(75px)',
                    WebkitBackdropFilter: 'blur(75px)',
                    boxShadow: '0 -5px 30px rgba(9, 13, 20, 0.15)',
                }}
            >
                {/* nav */}
                <ul className="flex flex-col gap-6 text-[23px] tracking-tighter text-[#cfdae5] mb-8">
                    {menuConfig.map(({ label, target }, i) => (
                        <li
                            key={label}
                            ref={(el) => {
                                if (el) linksRef.current[i] = el
                            }}
                            className="cursor-pointer hover:text-[#6DE1CE] transition-colors duration-200"
                            onClick={(e) =>
                                handleNavClick(e, target, e.currentTarget)
                            }
                        >
                            {label}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <button
                    onClick={openForm}
                    className="overlay-cta flex justify-center gap-3 px-5 py-3 bg-gradient-to-r from-[#0DBFBB33] to-[#0F8D8C33] hover:from-[#0DBFBB66] hover:to-[#0F8D8C66] text-[15px] text-[#6DE1CE] font-medium tracking-tight uppercase cursor-pointer transition-colors duration-300 opacity-0"
                >
                    Let’s talk
                    <Image
                        src={icoButton}
                        alt="button icon"
                        className="inline-block"
                    />
                </button>

                {/* video */}
                <FlexContainer
                    center
                    className="overlay-video relative opacity-0"
                >
                    <VideoPreview
                        header
                        src={videoPreview}
                        onClick={openVideo}
                    />
                </FlexContainer>
            </div>

            {/* form */}
            <Form open={showForm} onClose={() => setShowForm(false)} />

            {/* video modal (if needed) */}
            <Modal
                isOpen={showVideo}
                onClose={() => setShowVideo(false)}
                variant="fullscreen"
            >
                <FlexContainer center className="relative h-full">
                    <Image
                        src={icoBack}
                        alt="icon back"
                        className="absolute top-8 right-8 cursor-pointer"
                        onClick={() => setShowVideo(false)}
                    />
                    <Image src={videoPreview} alt="preview video" />
                </FlexContainer>
            </Modal>
        </>
    )
}
