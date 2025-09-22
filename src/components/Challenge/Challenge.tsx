import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { ChallengeCard } from './ChallengeCard'
import Image from 'next/image'
import pointIco from '@/assets/point.png'
import phone from '@/assets/oldPhone.json'
import glass from '@/assets/glass.json'
import browser from '@/assets/browserChart.json'
import { LottieAnimation } from '../LottieAnimation'
import { challengeConfig } from '../contentConfig'

export const Challenge = () => {
    return (
        <section className="relative flex flex-col lg:flex-row mx-5">
            <FlexContainer
                direction="flex-col"
                gap="lg:gap-[40px]"
                className="relative py-8 lg:py-32 px-4 lg:px-14 border-r-[0.5px] border-l-[0.5px] lg:border-b-[0.5px] border-[#363E44]"
            >
                <div className="animate-move-y-left" />
                <div className="animate-move-y-right" />
                <FlexContainer
                    justifyContent="justify-between"
                    className="font-roboto-mono tracking-tight text-[#E4ECF4] uppercase"
                >
                    <FlexContainer
                        width="w-fit"
                        gap="gap-1.5"
                        alignItems="items-center"
                    >
                        <Image src={pointIco} alt="pointer icon" /> Our Problem
                    </FlexContainer>
                    <span>/01</span>
                </FlexContainer>
                <H2 className="pt-[30px] lg:w-[160px]">
                    The{' '}
                    <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                        Challenge
                    </span>
                </H2>
                <LottieAnimation
                    animationData={phone}
                    className="hidden lg:block w-[300px]"
                />
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                gap="gap-10 lg:gap-[120px]"
                className="relative pb-10 lg:py-32 px-4 lg:px-14 border-l-[0.5px] lg:border-l-0 border-r-[0.5px] border-b-[0.5px] border-[#363E44]"
            >
                <div className="animate-move-y-right" />
                {challengeConfig.map((card) => (
                    <ChallengeCard key={card.index} {...card} />
                ))}
            </FlexContainer>
            <div className="animate-move-x-bottom" />
        </section>
    )
}
