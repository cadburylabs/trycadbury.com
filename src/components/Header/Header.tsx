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
import videoPreview from '@/assets/videoPreview_2.png'
import icoBack from '@/assets/icoBack.svg'
import { VideoPreview } from '../VideoPreview'
import { menuConfig, MenuItem } from '../contentConfig'

export const Header = () => {
    const { lenis } = useLenisContext()

    const containerRef = useRef<HTMLDivElement>(null)
    const overlayRef = useRef<HTMLDivElement>(null)
    const linksRef = useRef<HTMLLIElement[]>([])
    const closeTween = useRef<gsap.core.Timeline | null>(null)

    const [mobileOpen, setMobileOpen] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [showVideo, setShowVideo] = useState(false)

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

    const toggleMobileMenu = () => {
        if (!overlayRef.current) return

        if (!mobileOpen) {
            setMobileOpen(true)
            lenis?.stop()

            gsap.to(overlayRef.current, {
                y: '0%',
                opacity: 1,
                duration: 0.5,
                ease: 'power3.out',
                pointerEvents: 'auto',
            })

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
                    '>-0.1'
                )
                .fromTo(
                    '.overlay-video',
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' },
                    '>-0.1'
                )
        } else {
            if (closeTween.current) {
                closeTween.current.kill()
            }

            lenis?.start()

            closeTween.current = gsap.timeline({
                onComplete: () => {
                    setMobileOpen(false)
                    closeTween.current = null
                },
            })

            closeTween.current
                .to('.overlay-video', {
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
                    linksRef.current.slice().reverse(),
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.3,
                        ease: 'power3.in',
                        stagger: 0.05,
                    },
                    '<'
                )
                .to(
                    overlayRef.current,
                    {
                        y: '-100%',
                        opacity: 0,
                        duration: 0.4,
                        ease: 'power3.in',
                    },
                    '<'
                )
        }
    }

    const handleNavClick = (e: React.MouseEvent, item: MenuItem) => {
        if (item.href) {
            if (mobileOpen) toggleMobileMenu()
            return
        }

        if (item.target) {
            e.preventDefault()
            if (mobileOpen) toggleMobileMenu()

            setTimeout(() => {
                const section = document.getElementById(item.target!)
                if (section && lenis) {
                    lenis.scrollTo(section, {
                        offset: 0,
                        duration: 2,
                        easing: (t) => 1 - Math.pow(1 - t, 3),
                    })
                }
            }, 300)
        }
    }

    const scrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, {
                duration: 2,
                easing: (t) => 1 - Math.pow(1 - t, 3),
            })
        }
    }

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
            closeOverlay(() => setShowForm(true))
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
                    {!mobileOpen && (
                        <>
                            {/* horizontal gradient line */}
                            <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
                            <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />
                        </>
                    )}

                    <FlexContainer
                        width="w-fit"
                        gap="gap-[7px]"
                        onClick={scrollToTop}
                        className="cursor-pointer"
                    >
                        <Image src={logo} alt="Cadbury logo" />
                        <TypographyLead className="font-pp-montreal">
                            Cadbury
                        </TypographyLead>
                    </FlexContainer>

                    <nav>
                        <ul className="hidden lg:flex gap-7 relative">
                            {menuConfig.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href ?? `#${item.target}`}
                                        onClick={(e) => handleNavClick(e, item)}
                                        className="cursor-pointer tracking-tight text-[#cfdae5] hover:text-white transition-colors duration-200"
                                        target={
                                            item.href?.startsWith('http')
                                                ? '_blank'
                                                : undefined
                                        }
                                        rel={
                                            item.href?.startsWith('http')
                                                ? 'noreferrer'
                                                : undefined
                                        }
                                    >
                                        {item.label}
                                        {item.icon && (
                                            <span 
                                                className="ml-1 inline-block"
                                                dangerouslySetInnerHTML={{ __html: item.icon }}
                                            />
                                        )}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden text-[#cfdae5] tracking-tight text-[10px]"
                        >
                            {mobileOpen ? 'CLOSE' : 'MENU'}
                        </button>
                    </nav>

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
                    {menuConfig.map((item, i) => (
                        <li
                            key={item.label}
                            ref={(el) => {
                                if (el) linksRef.current[i] = el
                            }}
                            className="cursor-pointer hover:text-[#6DE1CE] transition-colors duration-200"
                        >
                            <a
                                href={item.href ?? `#${item.target}`}
                                onClick={(e) => handleNavClick(e, item)}
                                target={
                                    item.href?.startsWith('http')
                                        ? '_blank'
                                        : undefined
                                }
                                rel={
                                    item.href?.startsWith('http')
                                        ? 'noreferrer'
                                        : undefined
                                }
                            >
                                {item.label}
                            </a>
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

            <Form open={showForm} onClose={() => setShowForm(false)} />

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
