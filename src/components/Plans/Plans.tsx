'use client'
import React, { useState } from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { P } from '../Typography/P'

import { plansConfig } from '../contentConfig'
import { PlansCard } from './PlansCard'

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
        <section id={id} className="relative mx-3 lg:mx-5 flex flex-col">
            {/* vertical gradient line */}
            <span className="absolute top-0 left-0 h-full w-px border-y-gradient" />
            <span className="absolute top-0 right-0 h-full w-px border-y-gradient" />

            <FlexContainer
                justifyContent="justify-between"
                alignItems="items-center"
                className="relative py-10 px-14"
            >
                {/* horizontal gradient line */}
                <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
                <span className="hidden lg:block absolute bottom-0 left-0 w-full h-px border-x-gradient" />

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
                gap="gap-[50px] lg:gap-0"
                justifyContent="justify-center"
                className="relative"
            >
                {plansConfig.map((card) => (
                    <PlansCard key={card.title} getPrice={getPrice} {...card} />
                ))}
            </FlexContainer>
        </section>
    )
}
