import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3 } from '../Typography/H3'
import { P } from '../Typography/P'
import { LottieAnimation } from '../LottieAnimation'

type ChallengeCardProps = {
    index: string
    icon: object
    title: string
    description: string
    isActive?: boolean
}

export const ChallengeCard = ({
    index,
    icon,
    title,
    description,
    isActive = false,
}: ChallengeCardProps) => {
    return (
        <FlexContainer
            gap="lg:gap-[30px]"
            direction="flex-col"
            className={`lg:pb-[30px] transition-all duration-700 ease-out ${
                isActive
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-50 scale-95 translate-y-4'
            }`}
        >
            {/* top row with index */}
            <FlexContainer className="justify-end px-5 lg:justify-between">
                <span className="text-[11px] lg:text-[16px] font-roboto-mono">
                    {index}
                </span>
                <span className="hidden lg:block">/</span>
            </FlexContainer>

            {/* main content */}
            <FlexContainer
                direction="flex-col lg:flex-row"
                gap="gap-2 lg:gap-[30px]"
                className="lg:items-center"
            >
                <LottieAnimation
                    animationData={icon}
                    className="w-[100px] lg:w-[180px]"
                />
                <FlexContainer gap="lg:gap-[30px]" direction="flex-col">
                    <H3 className="relative pb-4 lg:pb-0">
                        {/* gradient underline on mobile */}
                        <span className="block lg:hidden absolute bottom-0 left-0 w-full h-px border-x-gradient" />
                        {title}
                    </H3>
                    <p 
                        className="pt-4 lg:pt-0"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
