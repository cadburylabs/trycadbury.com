import React from 'react'

type TypographyButtonProps = {
    children: string
    fontSize?: string
    className?: string
    disableInternalHover?: boolean
}

export const TypographyButton = ({
    children,
    fontSize = 'text-[13px]',
    className,
}: TypographyButtonProps) => {
    return (
        <span className={`${className} ${fontSize} cursor-pointer`}>
            {children}
        </span>
    )
}
