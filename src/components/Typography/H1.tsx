import { forwardRef, ReactNode } from 'react'

export const H1 = forwardRef<
    HTMLHeadingElement,
    {
        children: ReactNode
        fontSize?: string
        className?: string
    }
>(
    (
        { children, fontSize = 'text-5xl lg:text-7xl xl:text-8xl', className },
        ref
    ) => {
        return (
            <h1
                ref={ref}
                className={`${className} ${fontSize} font-medium scroll-m-20 tracking-tight`}
            >
                {children}
            </h1>
        )
    }
)

H1.displayName = 'H1'
