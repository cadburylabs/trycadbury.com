import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { ChallengeCard } from './ChallengeCard'

const challengeConfig = [
    {
        index: 'CH-01',
        title: 'One big Game of Telephone',
        description:
            'In 2025, you shouldn’t need four different people to service your request. Yet due to a broken system, your simple request to edit a PDF template leads to one big game of telephone with a sales rep, an engagement manager, a functional consultant, and finally a technical consultant.',
    },
    {
        index: 'CH-02',
        title: 'Perpetual discovery',
        description:
            'What kind of business are you? What’s important to you? Order-to-cash, procure-to-pay - how do you go about it? You’ve answered these questions hundreds of times, and yet every consulting firm you onboard has to ask again. And when that firm leaves your team? All that training leaves with them.',
    },
    {
        index: 'CH-03',
        title: 'Developer experience?\nWhat developer experience?',
        description:
            'In NetSuite, there is no local environment, no version control, and no testing framework. Without this infrastructure, existing consultants move slowly and are prone to making errors.',
    },
]

export const Challenge = () => {
    return (
        <section className="relative flex mx-5 bg-gradient-dots">
            <FlexContainer
                direction="flex-col"
                gap="gap-[90px]"
                className="relative py-32 px-14 border-r-[0.5px] border-l-[0.5px] border-b-[0.5px] border-[#363E44]"
            >
                <div className="animate-move-y-left" />
                <div className="animate-move-y-right" />
                <FlexContainer
                    justifyContent="justify-between"
                    className=" font-roboto-mono tracking-tight text-[#E4ECF4] uppercase"
                >
                    <span>Our Problem</span>
                    <span>/01</span>
                </FlexContainer>
                <H2>
                    The <br />
                    <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                        Challenge
                    </span>
                </H2>
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                gap="gap-[120px]"
                className="relative py-32 px-14 border-r-[0.5px] border-b-[0.5px] border-[#363E44]"
            >
                <div className="animate-move-y-right" />
                {challengeConfig.map((card) => (
                    <ChallengeCard
                        key={card.index}
                        index={card.index}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </FlexContainer>
            <div className="animate-move-x-bottom" />
        </section>
    )
}
