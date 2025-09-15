import { forwardRef, ReactNode } from 'react'

export const H2 = forwardRef<
    HTMLHeadingElement,
    {
        children: ReactNode
        fontSize?: string
        className?: string
        id?: string
    }
>(
    (
        { children, fontSize = 'text-5xl md:text-8xl', className, id = '' },
        ref
    ) => {
        return (
            <h2
                {...(id ? { id } : {})}
                ref={ref}
                className={`${className} ${fontSize} font-medium scroll-m-20 tracking-tight`}
            >
                {children}
            </h2>
        )
    }
)

H2.displayName = 'H2'
