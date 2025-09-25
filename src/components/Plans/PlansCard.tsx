import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3 } from '../Typography/H3'
import { P } from '../Typography/P'

import Image from 'next/image'
import pointIco from '@/assets/point.png'

type PlansCardProps = {
    title: string
    monthly: number
    description: string
    publishing: string[]
    hosting: string[]
    getPrice: (monthly: number) => string
    className?: string
}

export const PlansCard = ({
    title,
    monthly,
    description,
    publishing,
    hosting,
    getPrice,
    className,
}: PlansCardProps) => {
    return (
        <FlexContainer
            key={title}
            width="lg:w-fit"
            direction="flex-col"
            className="relative"
        >
            {/* vertical gradient line */}
            <span className="absolute top-0 left-0 h-full w-px border-y-gradient" />
            <span className="absolute top-0 right-0 h-full w-px border-y-gradient" />

            <FlexContainer
                gap="lg:gap-[60px]"
                justifyContent="justify-between"
                className={`${className} relative pt-5 lg:py-10 px-4 lg:pl-14 lg:pr-7`}
            >
                {/* horizontal gradient line */}
                <span className="block lg:hidden absolute top-0 left-0 w-full h-px border-x-gradient" />
                <span className="hidden lg:block absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                <H3>{title}</H3>
                <H3>
                    <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                        {getPrice(monthly)}
                    </span>
                </H3>
            </FlexContainer>

            <FlexContainer
                className={`${className} relative pb-5 lg:py-7 px-4 lg:pl-14 lg:pr-8`}
            >
                {/* horizontal gradient line */}
                <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                <span className="max-w-[300px] text-[17px] lg:text-[23px] text-[#ADBACC] font-medium tracking-tighter leading-none">
                    {description}
                </span>
            </FlexContainer>

            <FlexContainer
                direction="flex-col"
                gap="gap-2"
                className={`${className} relative py-7 px-4 lg:pl-14 lg:pr-8`}
            >
                {/* horizontal gradient line */}
                <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                <P className="uppercase tracking-tight">Publishing</P>
                <ul>
                    {publishing.map((point) => (
                        <FlexContainer
                            key={point}
                            gap="gap-1.5"
                            alignItems="items-center"
                        >
                            <Image src={pointIco} alt="point icon" />
                            <li className="pb-1">{point}</li>
                        </FlexContainer>
                    ))}
                </ul>
            </FlexContainer>

            <FlexContainer
                direction="flex-col"
                gap="gap-2"
                className={`${className} relative py-7 px-4 lg:pl-14 lg:pr-8`}
            >
                {/* horizontal gradient line */}
                <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                <P className="uppercase tracking-tight">Hosting</P>
                <ul>
                    {hosting.map((point) => (
                        <FlexContainer
                            key={point}
                            gap="gap-1.5"
                            alignItems="items-center"
                        >
                            <Image src={pointIco} alt="point icon" />
                            <li className="pb-1">{point}</li>
                        </FlexContainer>
                    ))}
                </ul>
            </FlexContainer>
        </FlexContainer>
    )
}
