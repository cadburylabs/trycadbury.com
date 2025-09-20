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
            className={`${className} w-full lg:w-fit p-5 lg:p-[30px] flex gap-1.5 justify-center lg:justify-start rounded-lg button-background uppercase text-[15px] lg:text-lg font-medium font-roboto-mono cursor-pointer`}
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
