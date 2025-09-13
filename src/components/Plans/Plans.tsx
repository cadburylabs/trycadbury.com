import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { P } from '../Typography/P'
import { H3 } from '../Typography/H3'

const plansConfig = [
    {
        title: 'Self serve',
        price: 49,
        description:
            'You deserve to be growing your business, not managing another consultant.',
        publishing: [
            'Integration with the Webflow Enterprise platform',
            'Integrations with CRMs and marketing systems of record',
            'Integrations with ABM tools',
        ],
        hosting: [
            '50 form submits (lifetime)',
            '1 GB bandwidth',
            '20 CMS collections',
        ],
    },
    {
        title: 'White glove',
        price: 135,
        description:
            'Enterprise-grade performance, security, and control — designed for teams who demand more.',
        publishing: [
            'Advanced targeting with Enhanced Match',
            'Integrations with CRMs and marketing systems of record',
            'Integrations with ABM tools',
        ],
        hosting: [
            'Unlimited form submits',
            '50 GB bandwidth',
            '10 legacy Editor users',
        ],
    },
]

export const Plans = () => {
    return (
        <section className="mx-5 flex flex-col">
            <FlexContainer justifyContent="justify-between">
                <H2>Benefits</H2>
                <FlexContainer width="w-fit" direction="flex-col" center>
                    <FlexContainer>
                        <P>Billed Annually</P>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" />
                        </label>
                        <P>Billed Annually</P>
                    </FlexContainer>
                    <P>{'(Save up to 30%)'}</P>
                </FlexContainer>
                <P>/05</P>
            </FlexContainer>
            <FlexContainer center>
                {plansConfig.map((card) => (
                    <FlexContainer
                        key={card.price}
                        width="w-fit"
                        direction="flex-col"
                    >
                        <FlexContainer gap="gap-10">
                            <H3>{card.title}</H3>
                            <H3>
                                <span className="text-blue-400">
                                    {card.price}
                                </span>
                                <span className="text-sm">/month</span>
                            </H3>
                        </FlexContainer>
                        <P>{card.description}</P>
                        <P>Publishing</P>
                        <ul>
                            {card.publishing.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                        <P>Hosting</P>
                        <ul>
                            {card.hosting.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </FlexContainer>
                ))}
            </FlexContainer>
        </section>
    )
}
