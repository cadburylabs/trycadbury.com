import { useEffect } from 'react'

export const useRandomizeAnimations = (
    selector: string,
    min = 12,
    max = 25
) => {
    useEffect(() => {
        const els = document.querySelectorAll<HTMLElement>(selector)
        els.forEach((el) => {
            const duration = Math.random() * (max - min) + min
            const offset = -(Math.random() * duration)
            el.style.animationDuration = `${duration}s`
            el.style.animationDelay = `${offset}s`
        })
    }, [selector, min, max])
}
