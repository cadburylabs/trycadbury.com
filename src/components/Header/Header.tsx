import React from 'react'
import { FlexContainer } from '../FlexContainer'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import { TypographyLead } from '../Typography/Typography'

const menuConfig = [
    'The Challenge',
    'The Fix',
    'How it works',
    'Benefits',
    'Comparison',
]

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full px-5 z-50 font-roboto-mono bg-gradient-dots">
            <FlexContainer
                justifyContent="justify-between"
                alignItems="items-center"
                className="relative border-b-[0.5px] border-[#363E44] py-2.5"
            >
                <div className="animate-move-x-bottom" />
                <FlexContainer width="w-fit" gap="gap-[7px]">
                    <Image src={logo} alt="Cadbury logo" />
                    <TypographyLead>Cadbury</TypographyLead>
                </FlexContainer>
                <nav>
                    <ul className="flex gap-4">
                        {menuConfig.map((link) => (
                            <li key={link} className="cursor-pointer">
                                {link}
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="py-2.5 px-4 bg-gradient-to-r text-[15px] from-[#0DBFBB33] to-[#0F8D8C33] text-[#6DE1CE] uppercase cursor-pointer">
                    Free demo
                </button>
            </FlexContainer>
        </header>
    )
}
