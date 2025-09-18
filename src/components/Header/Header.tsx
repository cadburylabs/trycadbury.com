import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { TypographyLead } from '../Typography/Typography'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import icoButton from '@/assets/icoButton.svg'

const menuConfig = [
    'The Challenge',
    'The Fix',
    'How it works',
    'Benefits',
    'Comparison',
]

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full px-5 z-50 font-roboto-mono ">
            <FlexContainer
                justifyContent="justify-between"
                alignItems="items-center"
                className="relative  py-3.5 px-5 border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-[#363E44] bg-gradient-dots"
            >
                <div className="animate-move-x-bottom" />
                <FlexContainer width="w-fit" gap="gap-[7px]">
                    <Image src={logo} alt="Cadbury logo" />
                    <TypographyLead className="font-pp-montreal">
                        Cadbury
                    </TypographyLead>
                </FlexContainer>
                <nav>
                    <ul className="flex gap-7">
                        {menuConfig.map((link) => (
                            <li
                                key={link}
                                className="cursor-pointer tracking-tight text-[#cfdae5]"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className="flex gap-3 px-3.5 py-2.5 bg-gradient-to-r text-[15px] from-[#0DBFBB33] to-[#0F8D8C33] text-[#6DE1CE] font-medium tracking-tight uppercase cursor-pointer">
                    Let’s talk
                    <Image
                        src={icoButton}
                        alt="button icon"
                        className="inline-block"
                    />
                </button>
            </FlexContainer>
        </header>
    )
}
