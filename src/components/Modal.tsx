'use client'
import { useEffect, useCallback, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'
import { useLenisContext } from '@/context/LenisContext'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    variant?: 'fullscreen' | 'dialog'
    children: React.ReactNode
    className?: string
}

export const Modal = ({
    isOpen,
    onClose,
    variant = 'dialog',
    children,
    className = '',
}: ModalProps) => {
    const { lenis } = useLenisContext()
    const [isVisible, setIsVisible] = useState(isOpen)
    const contentRef = useRef<HTMLDivElement>(null)

    const handleEsc = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        },
        [onClose]
    )

    useEffect(() => {
        if (isOpen) {
            lenis?.stop?.()
            document.body.style.overflow = 'hidden'
        } else {
            lenis?.start?.()
            document.body.style.overflow = ''
        }

        return () => {
            lenis?.start?.()
            document.body.style.overflow = ''
        }
    }, [isOpen, lenis])

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
            window.addEventListener('keydown', handleEsc)

            if (contentRef.current) {
                gsap.fromTo(
                    contentRef.current,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
                )
            }
        } else if (isVisible) {
            if (contentRef.current) {
                gsap.to(contentRef.current, {
                    opacity: 0,
                    y: 40,
                    duration: 0.25,
                    ease: 'power2.in',
                    onComplete: () => {
                        setIsVisible(false)
                        window.removeEventListener('keydown', handleEsc)
                    },
                })
            }
        }

        return () => window.removeEventListener('keydown', handleEsc)
    }, [isOpen, isVisible, handleEsc])

    if (!isVisible) return null

    const baseWrapper =
        'fixed inset-0 z-[1000] flex items-center bg-[#121A21B3] justify-center touch-pan-y-pinch'
    const modalBase = 'relative rounded-lg shadow-lg'
    const modalVariants = {
        fullscreen: 'w-screen h-dvh rounded-none bg-black',
        dialog: 'w-full max-w-lg p-2.5 bg-[#1E262D]',
    }

    return createPortal(
        <div className={baseWrapper}>
            <div
                ref={contentRef}
                className={`${modalBase} ${modalVariants[variant]} ${className} backdrop-blur-sm overflow-y-auto`}
            >
                {children}
            </div>
        </div>,
        document.body
    )
}
