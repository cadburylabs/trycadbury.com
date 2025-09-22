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
}

export const ChallengeCard = ({
    index,
    icon,
    title,
    description,
}: ChallengeCardProps) => {
    return (
        <FlexContainer direction="flex-col">
            <FlexContainer
                direction="flex-col"
                gap="gap-2"
                className="relative border-b-[0.5px] border-[#363E44] pb-[15px] lg:pb-[30px]"
            >
                <LottieAnimation
                    animationData={icon}
                    className="max-w-[120px] lg:hidden"
                />
                <H3 className="whitespace-pre-line">{title}</H3>

                <div className="absolute right-0 top-0 lg:top-1/4">{index}</div>
            </FlexContainer>

            <P className="pt-[15px] lg:pt-[30px]">{description}</P>
        </FlexContainer>
    )
}
