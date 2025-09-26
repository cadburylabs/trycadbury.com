'use client'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import buttonArrow from '@/assets/buttonArrow.svg'
import { Form } from './Contact/Form'

export const Button = ({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) => {
    const [showForm, setShowForm] = useState(false)

    return (
        <>
            <button
                className={`${className} w-full lg:w-fit p-5 lg:p-[30px] flex gap-1.5 justify-center lg:justify-start rounded-lg button-background uppercase text-[15px] lg:text-lg font-medium font-roboto-mono cursor-pointer`}
                onClick={() => setShowForm(true)}
            >
                {children}
                <Image
                    src={buttonArrow}
                    alt="button arrow"
                    className="inline-block"
                />
            </button>
            <Form open={showForm} onClose={() => setShowForm(false)} />
        </>
    )
}
