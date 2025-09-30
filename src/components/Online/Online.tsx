import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import Image from 'next/image'
import pointIco from '@/assets/point.png'
import clock from '@/assets/clock.json'
import browserProfile from '@/assets/browserAcc.json'
import { LottieAnimation } from '../LottieAnimation'
import gradientLogo from '@/assets/gradientLogo.svg'
import { Box } from '../Box'

export const Online = ({ id = '' }: { id: string }) => {
    return (
        <div className="bg-gradient-dots">
            <section
                id={id}
                className="relative flex flex-col lg:flex-row mx-3 lg:mx-5 bg-gradient-dots"
            >
                <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />
                <FlexContainer
                    direction="flex-col"
                    gap="gap-8 lg:gap-5"
                    className="relative px-4 lg:px-14 py-8 lg:py-10"
                >
                    {/* vertical gradient line */}
                    <span className="absolute top-0 left-0 h-full w-px border-y-gradient" />
                    <span className="absolute top-0 right-0 h-full w-px border-y-gradient" />

                    <FlexContainer justifyContent="justify-between">
                        <FlexContainer
                            width="w-fit"
                            gap="gap-1.5"
                            alignItems="items-center"
                            className="uppercase font-roboto-mono text-[13px] lg:text-[16px]"
                        >
                            <Image src={pointIco} alt="" /> How it works
                        </FlexContainer>
                        <span className="block lg:hidden font-roboto-mono text-[13px] lg:text-[16px]">
                            /03
                        </span>
                    </FlexContainer>
                    <H2>
                        Online in <br />
                        <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                            60 Seconds
                        </span>
                    </H2>
                    <LottieAnimation animationData={clock} />
                    <span className="-mt-12 lg:hidden text-[21px] font-medium tracking-tight leading-none text-center">
                        No implementation periods, no calls with our developers,
                        and no gimmicks.<br/><br/>Add Cadbury to your sandbox, and in <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">under a minute</span>, it's ready to start working on your tickets.
                        <Box className="w-full flex justify-center">
                            <Image
                                src={gradientLogo}
                                alt="gradient logo"
                                className="pt-5"
                            />
                        </Box>
                    </span>
                </FlexContainer>
                <FlexContainer
                    direction="flex-col"
                    alignItems="items-center"
                    className="relative hidden lg:flex py-10"
                >
                    <span className="absolute top-0 right-0 h-full w-px border-y-gradient" />

                    <span className="uppercase w-full text-right px-14 font-roboto-mono">
                        /03
                    </span>
                    <LottieAnimation animationData={browserProfile} />
                    <span className="-mt-32 max-w-[500px] text-[30px] font-medium tracking-tighter leading-none text-center">
                        No implementation periods, no calls with our developers,
                        and no gimmicks.<br/><br/>Add Cadbury to your sandbox, and in <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">under a minute</span>, it's ready to start working on your tickets.
                        <Box className="w-full flex justify-center">
                            <Image
                                src={gradientLogo}
                                alt="gradient logo"
                                className="pt-4"
                            />
                        </Box>
                    </span>
                </FlexContainer>
            </section>
        </div>
    )
}
