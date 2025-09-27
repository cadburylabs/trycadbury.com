export {}

declare global {
    interface Window {
        lenis?: {
            scroll: number
            scrollTo: (
                value: number,
                offset?: number,
                duration?: number
            ) => void
            on: (event: 'scroll', cb: () => void) => void
            off: (event: 'scroll', cb: () => void) => void
        }
    }
}
