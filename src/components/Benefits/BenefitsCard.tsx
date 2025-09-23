import React, { forwardRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3 } from '../Typography/H3'
import { P } from '../Typography/P'
import { LottieAnimation } from '../LottieAnimation'

type BenefitsCardProps = {
    index: string
    tag: string
    icon: object
    title: string
    description: string
    className?: string
}

export const BenefitsCard = forwardRef<HTMLDivElement, BenefitsCardProps>(
    ({ index, tag, icon, title, description, className = '' }, ref) => {
        return (
            <FlexContainer
                ref={ref}
                direction="flex-col lg:flex-row"
                alignItems="items-center"
                className={`${className} benefits-background border-b-[0.5px] border-t-[0.5px] border-[#363E44]`}
            >
                <FlexContainer
                    width="w-full lg:w-fit"
                    direction="lg:flex-col"
                    justifyContent="justify-between"
                    className="p-4 lg:pl-20 lg:py-12 lg:h-full"
                >
                    <P>{index}</P>
                    <P className="uppercase">{tag}</P>
                </FlexContainer>
                <LottieAnimation
                    animationData={icon}
                    className="mr-10  lg:h-[236px]"
                />
                <FlexContainer
                    width="max-w-[450px]"
                    gap="gap-[15px] lg:gap-[30px]"
                    direction="flex-col"
                    className="py-4 text-center lg:text-left"
                >
                    <H3>{title}</H3>
                    <P>{description}</P>
                </FlexContainer>
            </FlexContainer>
        )
    }
)

BenefitsCard.displayName = 'BenefitsCard'
