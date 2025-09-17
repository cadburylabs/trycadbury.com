import Image from 'next/image'
import React, { ReactNode } from 'react'
import buttonArrow from '@/assets/buttonArrow.svg'

export const Button = ({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) => {
    return (
        <button
            className={`${className} flex gap-1.5 w-fit p-[30px] rounded-lg button-background uppercase text-lg font-medium font-roboto-mono cursor-pointer`}
        >
            {children}
            <Image
                src={buttonArrow}
                alt="button arrow"
                className="inline-block"
            />
        </button>
    )
}
