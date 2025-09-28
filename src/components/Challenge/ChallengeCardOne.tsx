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

export const ChallengeCardOne = ({
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
                <LottieAnimation
                    animationData={icon}
                    className="max-w-[120px] lg:hidden flex-shrink-0"
                />
                <FlexContainer
                    alignItems="items-center"
                    justifyContent="justify-between"
                    className="relative pb-[15px] lg:pb-[30px] w-full max-w-full"
                >
                    {/* horizontal gradient line */}
                    <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                    <FlexContainer gap="gap-3" alignItems="items-center">
                        <LottieAnimation
                            animationData={icon}
                            className="hidden lg:block max-w-[80px] flex-shrink-0"
                        />
                        <H3 className="whitespace-pre-line w-full overflow-hidden">
                            {title}
                        </H3>
                    </FlexContainer>

                    <div className="text-[11px] lg:text-[16px] font-roboto-mono">
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
