import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { H3 } from '../Typography/H3'
import { P } from '../Typography/P'

const fixConfig = [
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
        title: 'Developer experience? What developer experience?',
        description:
            'In NetSuite, there is no local environment, no version control, and no testing framework. Without this infrastructure, existing consultants move slowly and are prone to making errors.',
    },
]

export const Challenge = () => {
    return (
        <section className="flex mx-5">
            <FlexContainer className="border-r-[0.5px] border-l-[0.5px] border-b-[0.5px] border-blue-100">
                <H2>
                    The <br />
                    <span className="text-blue-400">Challenge</span>
                </H2>
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                gap="gap-5"
                className="border-r-[0.5px] border-b-[0.5px] border-blue-100"
            >
                {fixConfig.map((card) => (
                    <FlexContainer direction="flex-col" key={card.index}>
                        <FlexContainer
                            justifyContent="justify-between"
                            className="border-b-[0.5px] border-blue-100"
                        >
                            <div>logo</div> <div>{card.index}</div>
                        </FlexContainer>
                        <H3>{card.title}</H3>
                        <P>{card.description}</P>
                    </FlexContainer>
                ))}
            </FlexContainer>
        </section>
    )
}
