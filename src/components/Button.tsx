'use client'
import Image from 'next/image'
import React, { ReactNode, useState } from 'react'
import buttonArrow from '@/assets/buttonArrow.svg'
import icoButton from '@/assets/icoButton.svg'
import { Form } from './Contact/Form'

export const Button = ({
    children,
    className,
    unstyled = false,
}: {
    children: ReactNode
    className?: string
    unstyled?: boolean
}) => {
    const [showForm, setShowForm] = useState(false)

    if (unstyled) {
        return (
            <>
                <button
                    onClick={() => setShowForm(true)}
                    className="gap-3 px-3.5 py-2.5 bg-gradient-to-r from-[#0DBFBB33] to-[#0F8D8C33] hover:from-[#0DBFBB66] hover:to-[#0F8D8C66] text-[15px] text-[#6DE1CE] font-medium tracking-tight uppercase cursor-pointer transition-colors duration-300"
                >
                    {children}
                </button>
                <Form open={showForm} onClose={() => setShowForm(false)} />
            </>
        )
    }

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
