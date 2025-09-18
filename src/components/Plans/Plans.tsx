'use client'
import React, { useState } from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { P } from '../Typography/P'
import { H3 } from '../Typography/H3'
import Image from 'next/image'
import pointIco from '@/assets/point.png'

const plansConfig = [
    {
        className: 'border-l-[0.5px]',
        title: 'Self serve',
        monthly: 49,
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
        className: '',
        title: 'White glove',
        monthly: 135,
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
    const [yearly, setYearly] = useState(false)

    const getPrice = (monthly: number) => {
        if (yearly) {
            const yearlyPrice = monthly * 12 * 0.7
            return `$${Math.round(yearlyPrice)}/yr`
        }
        return `$${monthly}/mo`
    }

    return (
        <section className="relative mx-5 flex flex-col border-l-[0.5px] border-r-[0.5px] border-[#363E44]">
            <div className="animate-move-y-left" />
            <div className="animate-move-y-right" />
            <FlexContainer
                justifyContent="justify-between"
                alignItems="items-center"
                className="relative py-10 px-14 border-b-[0.5px] border-t-[0.5px] border-[#363E44]"
            >
                <div className="animate-move-x-bottom" />
                <H2>Plans</H2>

                <FlexContainer
                    direction="flex-col"
                    gap="gap-1.5"
                    alignItems="items-center"
                    justifyContent="justify-center"
                    className="mr-40"
                >
                    <FlexContainer gap="gap-[14px]" center>
                        <P className="uppercase">Billed Monthly</P>

                        <label className="relative inline-block w-[52px] h-[26px]">
                            <input
                                type="checkbox"
                                className="hidden peer"
                                checked={yearly}
                                onChange={() => setYearly(!yearly)}
                            />
                            <span
                                className="
                  absolute inset-0 cursor-pointer
                  rounded-full
                  before:content-[''] before:absolute before:top-[3px] before:left-[3px]
                  before:h-[20px] before:w-[20px]
                  before:rounded-full
                  before:bg-gradient-to-r before:from-[#0DBFBB] before:to-[#0F8D8C]
                  before:transition-transform before:duration-300
                  peer-checked:before:translate-x-[26px]
                  transition-all duration-300"
                                style={{
                                    background:
                                        'linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(135deg, #0DBFBB, #0F8D8C) border-box',
                                    border: '0.8px solid transparent',
                                    borderRadius: '9999px',
                                    backgroundClip: 'padding-box, border-box',
                                }}
                            />
                        </label>

                        <P className="uppercase">Billed Yearly</P>
                    </FlexContainer>
                    <P>(Save up to 30%)</P>
                </FlexContainer>
            </FlexContainer>

            <FlexContainer
                justifyContent="justify-center"
                className="relative border-b-[0.5px] border-[#363E44]"
            >
                {plansConfig.map((card) => (
                    <FlexContainer
                        key={card.title}
                        width="w-fit"
                        direction="flex-col"
                    >
                        <FlexContainer
                            gap="gap-[60px]"
                            justifyContent="justify-between"
                            className={`${card.className} py-10 pl-14 pr-7 border-r-[0.5px] border-b-[0.5px] border-[#363E44]`}
                        >
                            <H3>{card.title}</H3>
                            <H3>
                                <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                                    {getPrice(card.monthly)}
                                </span>
                            </H3>
                        </FlexContainer>

                        <FlexContainer
                            className={`${card.className} py-7 pl-14 pr-8 border-r-[0.5px] border-b-[0.5px] border-[#363E44]`}
                        >
                            <span className="max-w-[300px] text-[23px] text-[#ADBACC] font-medium tracking-tighter leading-none">
                                {card.description}
                            </span>
                        </FlexContainer>

                        <FlexContainer
                            direction="flex-col"
                            gap="gap-2"
                            className={`${card.className} py-7 pl-14 pr-8 border-r-[0.5px] border-b-[0.5px] border-[#363E44]`}
                        >
                            <P className="uppercase tracking-tight">
                                Publishing
                            </P>
                            <ul>
                                {card.publishing.map((point) => (
                                    <FlexContainer
                                        key={point}
                                        gap="gap-1.5"
                                        alignItems="items-center"
                                    >
                                        <Image
                                            src={pointIco}
                                            alt="point icon"
                                        />
                                        <li className="pb-1">{point}</li>
                                    </FlexContainer>
                                ))}
                            </ul>
                        </FlexContainer>

                        <FlexContainer
                            direction="flex-col"
                            gap="gap-2"
                            className={`${card.className} py-7 pl-14 pr-8 border-r-[0.5px] border-b-[0.5px] border-[#363E44]`}
                        >
                            <P className="uppercase tracking-tight">Hosting</P>
                            <ul>
                                {card.hosting.map((point) => (
                                    <FlexContainer
                                        key={point}
                                        gap="gap-1.5"
                                        alignItems="items-center"
                                    >
                                        <Image
                                            src={pointIco}
                                            alt="point icon"
                                        />
                                        <li className="pb-1">{point}</li>
                                    </FlexContainer>
                                ))}
                            </ul>
                        </FlexContainer>
                    </FlexContainer>
                ))}
            </FlexContainer>
        </section>
    )
}
