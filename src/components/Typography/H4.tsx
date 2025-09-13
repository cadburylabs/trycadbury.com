import { ReactNode } from 'react'

export function H4({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <h4
            className={`${className} scroll-m-20 leading-none text-[19px] md:text-[26px]`}
        >
            {children}
        </h4>
    )
}
