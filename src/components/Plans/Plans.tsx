'use client'
import React, { useState } from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { P } from '../Typography/P'
import { H3 } from '../Typography/H3'
import Image from 'next/image'
import pointIco from '@/assets/point.png'
import { plansConfig } from '../contentConfig'

export const Plans = ({ id = '' }: { id: string }) => {
    const [yearly, setYearly] = useState(false)

    const getPrice = (monthly: number) => {
        if (yearly) {
            const yearlyPrice = monthly * 12 * 0.7
            return `$${Math.round(yearlyPrice)}/yr`
        }
        return `$${monthly}/mo`
    }

    return (
        <section
            id={id}
            className="relative mx-3 lg:mx-5 flex flex-col border-l-[0.5px] border-r-[0.5px] border-[#363E44]"
        >
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
                    className="hidden lg:flex mr-40"
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
                direction="flex-col lg:flex-row"
                justifyContent="justify-center"
                className="relative border-b-[0.5px] border-[#363E44]"
            >
                {plansConfig.map((card) => (
                    <FlexContainer
                        key={card.title}
                        width="lg:w-fit"
                        direction="flex-col"
                    >
                        <FlexContainer
                            gap="lg:gap-[60px]"
                            justifyContent="justify-between"
                            className={`${card.className} pt-5 lg:py-10 px-4 lg:pl-14 lg:pr-7 border-r-[0.5px] lg:border-b-[0.5px] border-[#363E44]`}
                        >
                            <H3>{card.title}</H3>
                            <H3>
                                <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                                    {getPrice(card.monthly)}
                                </span>
                            </H3>
                        </FlexContainer>

                        <FlexContainer
                            className={`${card.className} pb-5 lg:py-7 px-4 lg:pl-14 lg:pr-8 border-r-[0.5px] border-b-[0.5px] border-[#363E44]`}
                        >
                            <span className="max-w-[300px] text-[17px] lg:text-[23px] text-[#ADBACC] font-medium tracking-tighter leading-none">
                                {card.description}
                            </span>
                        </FlexContainer>

                        <FlexContainer
                            direction="flex-col"
                            gap="gap-2"
                            className={`${card.className} py-7 px-4 lg:pl-14 lg:pr-8 border-r-[0.5px] border-b-[0.5px] border-[#363E44]`}
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
                            className={`${card.className} py-7 px-4 lg:pl-14 lg:pr-8 border-r-[0.5px] border-b-[0.5px] border-[#363E44]`}
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
