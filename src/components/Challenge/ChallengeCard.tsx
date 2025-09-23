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
        <div
            className={`challenge-card transition-all duration-700 ease-out w-full max-w-full ${
                isActive
                    ? 'opacity-100 scale-100 translate-y-0'
                    : 'opacity-50 scale-95 translate-y-4'
            }`}
        >
            <FlexContainer direction="flex-col" className="w-full max-w-full">
                <FlexContainer
                    direction="flex-col"
                    gap="gap-2"
                    className="relative border-b-[0.5px] border-[#363E44] pb-[15px] lg:pb-[30px] w-full max-w-full overflow-hidden"
                >
                    <LottieAnimation
                        animationData={icon}
                        className="max-w-[120px] lg:hidden flex-shrink-0"
                    />
                    <H3 className="whitespace-pre-line w-full max-w-full overflow-hidden">
                        {title}
                    </H3>
                    <div className="absolute right-0 top-0 lg:top-1/4 flex-shrink-0">
                        {index}
                    </div>
                </FlexContainer>
                <P className="pt-[15px] lg:pt-[30px] w-full max-w-full overflow-hidden">
                    {description}
                </P>
            </FlexContainer>
        </div>
    )
}
