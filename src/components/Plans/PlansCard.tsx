import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3 } from '../Typography/H3'
import { P } from '../Typography/P'

import Image from 'next/image'
import pointIco from '@/assets/point.png'
import { Button } from '../Button'

type PlansCardProps = {
    title: string
    monthly: number
    description: string
    publishing: string[]
    hosting: string[]
    className?: string
}

export const PlansCard = ({
    title,
    monthly,
    description,
    publishing,
    hosting,
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
                    {monthly !== -1 ? (
                        <>
                        <span className="pl-1 uppercase text-[15px] lg:text-[20px] tracking-tighter font-roboto-mono">
                                {`$${monthly}`}
                            /mo
                        </span>
                        </>
                    ) : (
                        <span className="pl-1 uppercase text-[15px] lg:text-[20px] tracking-tighter font-roboto-mono">
                            <Button unstyled>Let&apos;s talk</Button>
                        </span>
                        )
                        }
                </H3>
            </FlexContainer>

            <FlexContainer
                className={`${className} relative pt-3.5 pb-5 lg:py-7 px-4 lg:pl-14 lg:pr-8`}
            >
                {/* horizontal gradient line */}
                <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                <span className="max-w-[375px] text-[18px] lg:text-[24px] text-[#ADBACC] font-medium tracking-tighter leading-none">
                    {description}
                </span>
            </FlexContainer>

            <FlexContainer
                direction="flex-col"
                gap="gap-3"
                className={`${className} relative py-7 px-4 lg:pl-14 lg:pr-8`}
            >
                {/* horizontal gradient line */}
                <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                <P className="uppercase tracking-tight text-[14px] lg:text-[16px] font-roboto-mono">
                    Basic
                </P>
                <ul className="space-y-2 list-none pl-0">
                    {publishing.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                            <Image
                                src={pointIco}
                                alt="point icon"
                                className="mt-[6px] w-3 h-auto flex-shrink-0"
                            />
                            <span className="text-[#E4ECF4]">{point}</span>
                        </li>
                    ))}
                </ul>
            </FlexContainer>

            <FlexContainer
                direction="flex-col"
                gap="gap-3"
                className={`${className} relative py-7 px-4 lg:pl-14 lg:pr-8`}
            >
                {/* horizontal gradient line */}
                <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                <P className="uppercase tracking-tight text-[14px] lg:text-[16px] font-roboto-mono">
                    Advanced
                </P>
                <ul className="space-y-2 list-none pl-0">
                    {hosting.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                            <Image
                                src={pointIco}
                                alt="point icon"
                                className="mt-[6px] w-[11px] h-auto flex-shrink-0"
                            />
                            <span className="text-[#E4ECF4]">{point}</span>
                        </li>
                    ))}
                </ul>
            </FlexContainer>
        </FlexContainer>
    )
}
