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

export const ChallengeCardTwo = ({
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
                    : 'opacity-100 scale-100 translate-y-0'
            }`}
        >
            <FlexContainer direction="flex-col" className="w-full max-w-full">
                <FlexContainer
                    direction="flex-col"
                    gap="gap-2"
                    className="relative pb-[15px] lg:pb-[30px] w-full max-w-full"
                >
                    {/* horizontal gradient line */}
                    <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                    <LottieAnimation
                        animationData={icon}
                        className="max-w-[120px] flex-shrink-0"
                    />
                    <H3 className="whitespace-pre-line w-full max-w-full overflow-hidden">
                        {title}
                    </H3>
                    <div className="absolute right-0 top-0 lg:top-1/4 flex-shrink-0 text-[11px] lg:text-[16px] font-roboto-mono">
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
