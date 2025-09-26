'use client'
import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { P } from '../Typography/P'

import { plansConfig } from '../contentConfig'
import { PlansCard } from './PlansCard'

export const Plans = ({ id = '' }: { id: string }) => {
    return (
        <div className="bg-gradient-dots">
            <section id={id} className="relative mx-3 lg:mx-5 flex flex-col">
                {/* vertical gradient line */}
                <span className="absolute top-0 left-0 h-full w-px border-y-gradient" />
                <span className="absolute top-0 right-0 h-full w-px border-y-gradient" />

                <FlexContainer
                    justifyContent="justify-between"
                    alignItems="items-center"
                    className="relative py-10 px-4 lg:px-14"
                >
                    {/* horizontal gradient line */}
                    <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
                    <span className="hidden lg:block absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                    <H2>Plans</H2>

                    <span className="font-roboto-mono">/05</span>
                </FlexContainer>

                <FlexContainer
                    direction="flex-col lg:flex-row"
                    gap="gap-[50px] lg:gap-0"
                    justifyContent="justify-center"
                    className="relative"
                >
                    {plansConfig.map((card) => (
                        <PlansCard key={card.title} {...card} />
                    ))}
                </FlexContainer>
            </section>
        </div>
    )
}
