import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { ChallengeCard } from './ChallengeCard'
import Image from 'next/image'
import pointIco from '@/assets/point.png'
import phone from '@/assets/phone.svg'
import glass from '@/assets/glass.svg'
import browser from '@/assets/browser.svg'

const challengeConfig = [
    {
        index: 'CH-01',
        icon: phone,
        title: 'One big Game of Telephone',
        description:
            'In 2025, you shouldn’t need four different people to service your request. Yet due to a broken system, your simple request to edit a PDF template leads to one big game of telephone with a sales rep, an engagement manager, a functional consultant, and finally a technical consultant.',
    },
    {
        index: 'CH-02',
        icon: glass,
        title: 'Perpetual discovery',
        description:
            'What kind of business are you? What’s important to you? Order-to-cash, procure-to-pay - how do you go about it? You’ve answered these questions hundreds of times, and yet every consulting firm you onboard has to ask again. And when that firm leaves your team? All that training leaves with them.',
    },
    {
        index: 'CH-03',
        icon: browser,
        title: 'Developer experience?\nWhat developer experience?',
        description:
            'In NetSuite, there is no local environment, no version control, and no testing framework. Without this infrastructure, existing consultants move slowly and are prone to making errors.',
    },
]

export const Challenge = () => {
    return (
        <section className="relative flex flex-col lg:flex-row mx-5">
            <FlexContainer
                direction="flex-col"
                gap="gap-[40px]"
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
                <Image
                    src={phone}
                    alt="preview video"
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
