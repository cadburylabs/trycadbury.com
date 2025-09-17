import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { FixCard } from './FixCard'
import fixImage1 from '@/assets/fix_1.png'
import fixImage2 from '@/assets/fix_2.png'
import fixImage3 from '@/assets/fix_3.png'

const fixConfig = [
    {
        index: 'CH-01',
        title: 'Down with the bureaucracy',
        image: fixImage1,
        description:
            'Stop depending on large consulting firms that have to fit your needs into their bureaucracy. Cadbury is your always available AI powered NetSuite Consultant, ready to act when your business needs it—not the other way around.',
    },
    {
        index: 'CH-02',
        title: 'Context aware',
        image: fixImage2,
        description:
            'After installation, Cadbury automatically builds a dense understanding of the inner workings of your NetSuite instance by scanning scripts, workflows, and integrations. Combined with its own proprietary trained data—sourced from hundreds of expert NetSuite consultants—Cadbury moves faster and more accurately than the typical consultant.',
    },
    // {
    //     index: 'CH-03',
    //     title: 'A modern DX',
    //     image: fixImage3,
    //     description:
    //         'Stop depending on large consulting firms that have to fit your needs into their bureaucracy. Cadbury is your always available AI powered NetSuite Consultant, ready to act when your business needs it—not the other way around.',
    // },
]

export const Fix = () => {
    return (
        <section className="relative flex flex-col mx-5">
            <FlexContainer
                justifyContent="justify-between"
                className="relative py-10 px-14 border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-[#363E44]"
            >
                <div className="animate-move-x-bottom" />

                <FlexContainer
                    alignItems="items-center"
                    justifyContent="justify-between"
                >
                    <H2>
                        The{' '}
                        <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                            Fix
                        </span>
                    </H2>
                    <span>Solution</span>
                </FlexContainer>
                <FlexContainer
                    justifyContent="justify-end"
                    alignItems="items-center"
                >
                    <span>/02</span>
                </FlexContainer>
            </FlexContainer>
            <FlexContainer
                gap="gap-[120px]"
                className="relative px-14 py-[100px] border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-[#363E44]"
            >
                <div className="animate-move-y-left" />
                <div className="animate-move-y-right" />
                <div className="animate-move-x-bottom" />

                {fixConfig.map((card) => (
                    <FixCard
                        key={card.index}
                        index={card.index}
                        title={card.title}
                        image={card.image}
                        description={card.description}
                    />
                ))}
            </FlexContainer>
        </section>
    )
}
