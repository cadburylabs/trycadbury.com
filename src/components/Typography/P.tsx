import { forwardRef, ReactNode } from 'react'

export const P = forwardRef<
    HTMLParagraphElement,
    {
        children: ReactNode
        fontSize?: string
        opacity?: string
        role?: string
        tabIndex?: number
        className?: string
    }
>(
    (
        {
            children,
            fontSize = 'text-[15px] md:text-[17px]',
            opacity = 'opacity-70',
            role,
            tabIndex,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <p
                ref={ref}
                role={role}
                tabIndex={tabIndex}
                className={`${className} ${fontSize} ${opacity} text-[#E4ECF4] leading-5`}
                {...props}
            >
                {children}
            </p>
        )
    }
)

P.displayName = 'P'
