import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { H3 } from '../Typography/H3'
import { P } from '../Typography/P'

const fixConfig = [
    {
        index: 'CH-01',
        title: 'Down with the bureaucracy',
        description:
            'Stop depending on large consulting firms that have to fit your needs into their bureaucracy. Cadbury is your always available AI powered NetSuite Consultant, ready to act when your business needs it—not the other way around.',
    },
    {
        index: 'CH-02',
        title: 'Context aware',
        description:
            'After installation, Cadbury automatically builds a dense understanding of the inner workings of your NetSuite instance by scanning scripts, workflows, and integrations. Combined with its own proprietary trained data—sourced from hundreds of expert NetSuite consultants—Cadbury moves faster and more accurately than the typical consultant.',
    },
    // {
    //     index: 'CH-03',
    //     title: 'A modern DX',
    //     description:
    //         'Stop depending on large consulting firms that have to fit your needs into their bureaucracy. Cadbury is your always available AI powered NetSuite Consultant, ready to act when your business needs it—not the other way around.',
    // },
]

export const Fix = () => {
    return (
        <section className="flex flex-col mx-5">
            <FlexContainer className="border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-[#363E44]">
                <H2>
                    The{' '}
                    <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                        Fix
                    </span>
                </H2>
            </FlexContainer>
            <FlexContainer className="pt-10 border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-[#363E44]">
                {fixConfig.map((card) => (
                    <FlexContainer key={card.index} direction="flex-col">
                        <div>{card.index}</div>
                        <FlexContainer alignItems="items-center" gap="gap-5">
                            <div>logo</div>
                            <FlexContainer direction="flex-col">
                                <H3>{card.title}</H3>
                                <P>{card.description}</P>
                            </FlexContainer>
                        </FlexContainer>
                    </FlexContainer>
                ))}
            </FlexContainer>
        </section>
    )
}
