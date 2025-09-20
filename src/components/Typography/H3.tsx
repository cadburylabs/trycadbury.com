import { forwardRef, HTMLProps, ReactNode } from 'react'

type H3Props = HTMLProps<HTMLHeadingElement> & {
    children: ReactNode
    fontSize?: string
    className?: string
}

export const H3 = forwardRef<HTMLHeadingElement, H3Props>(
    (
        {
            children,
            fontSize = 'text-[28px] md:text-[40px]',
            className = '',
            ...props
        },
        ref
    ) => {
        return (
            <h3
                ref={ref}
                className={`${className} ${fontSize} tracking-tight font-medium scroll-m-20 md:text-[40px]`}
                {...props}
            >
                {children}
            </h3>
        )
    }
)

H3.displayName = 'H3'
