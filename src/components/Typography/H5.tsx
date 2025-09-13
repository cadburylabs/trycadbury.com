import { ReactNode } from 'react'

export function H5({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <h5 className={`${className} scroll-m-20 text-[21px]`}>{children}</h5>
    )
}
