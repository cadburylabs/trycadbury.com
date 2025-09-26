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
            opacity = '',
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
                className={`${className} ${fontSize} ${opacity} text-[#CFDAE5] leading-snug`}
                {...props}
            >
                {children}
            </p>
        )
    }
)

P.displayName = 'P'
