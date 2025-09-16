import { ReactNode } from 'react'

export function TypographySmall({
    children,
    fontSize = 'text-[11px]',
    className,
}: {
    children: ReactNode
    fontSize?: string
    className?: string
}) {
    return (
        <small className={`${className} ${fontSize} md:text-[14px]`}>
            {children}
        </small>
    )
}

export function TypographyDisclaimer({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <code className={`${className} text-[11px] uppercase opacity-70`}>
            {children}
        </code>
    )
}

export function TypographyLead({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return <p className={`${className} font-medium text-lg`}>{children}</p>
}

export function TypographyLarge({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <div className={`${className} text-lg font-semibold`}>{children}</div>
    )
}
