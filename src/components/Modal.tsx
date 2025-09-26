'use client'
import { useEffect, useCallback, useState } from 'react'
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

    const handleEsc = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        },
        [onClose]
    )

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
            window.addEventListener('keydown', handleEsc)
            lenis?.stop()

            gsap.fromTo(
                '.modal-content',
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
            )
        } else if (isVisible) {
            // play exit animation
            gsap.to('.modal-content', {
                opacity: 0,
                y: 40,
                duration: 0.25,
                ease: 'power2.in',
                onComplete: () => {
                    setIsVisible(false)
                    lenis?.start()
                    window.removeEventListener('keydown', handleEsc)
                },
            })
        }
        return () => window.removeEventListener('keydown', handleEsc)
    }, [isOpen, isVisible, handleEsc, lenis])

    if (!isVisible) return null

    const baseWrapper =
        'fixed inset-0 z-[1000] flex items-center bg-[#121A21B3] justify-center'
    const modalBase = 'modal-content relative rounded-lg shadow-lg'
    const modalVariants = {
        fullscreen: 'w-screen h-screen rounded-none bg-black',
        dialog: 'w-full max-w-lg p-2.5 bg-[#1E262D]',
    }

    return createPortal(
        <div className={baseWrapper}>
            <div
                className={`${modalBase} ${modalVariants[variant]} ${className} backdrop-blur-sm`}
            >
                {children}
            </div>
        </div>,
        document.body
    )
}
