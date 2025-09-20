import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import Image from 'next/image'
import clock from '@/assets/clock.svg'
import profile from '@/assets/profile.svg'
import pointIco from '@/assets/point.png'

export const Online = () => {
    return (
        <section className="relative flex flex-col lg:flex-row mx-5">
            <FlexContainer
                direction="flex-col"
                gap="gap-5"
                className="relative px-4 lg:px-14 py-8 lg:py-10 border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] border-[#363E44]"
            >
                <div className="animate-move-y-left" />
                <div className="animate-move-y-right" />
                <FlexContainer
                    width="w-fit"
                    gap="gap-1.5"
                    alignItems="items-center"
                    className="uppercase"
                >
                    <Image src={pointIco} alt="" /> How it works
                </FlexContainer>
                <H2>
                    Online in <br />
                    <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                        60 Seconds
                    </span>
                </H2>
                <Image src={clock} alt="Animation" />
                <span className="-mt-12 lg:hidden text-[21px] font-medium tracking-tight leading-none text-center">
                    No implementation periods, no calls with our developers, no
                    gimmicks. Simply add{' '}
                    <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                        Cadbury as a user with admin privileges
                    </span>{' '}
                    into your sandbox account, and we’ll take care of the rest.
                </span>
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                alignItems="items-center"
                className="relative hidden lg:flex py-10 border-r-[0.5px] border-b-[0.5px] border-[#363E44]"
            >
                <span className="uppercase w-full text-right px-14">/03</span>
                <div className="animate-move-y-right" />
                <Image src={profile} alt="Profile" />
                <span className="-mt-32 max-w-[500px] text-[30px] font-medium tracking-tighter leading-none text-center">
                    No implementation periods, no calls with our developers, no
                    gimmicks. Simply add{' '}
                    <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                        Cadbury as a user with admin privileges
                    </span>{' '}
                    into your sandbox account, and we’ll take care of the rest.
                </span>
            </FlexContainer>
            <div className="animate-move-x-bottom" />
        </section>
    )
}
