import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3 } from '../Typography/H3'
import { P } from '../Typography/P'
import { LottieAnimation } from '../LottieAnimation'

type FixCardProps = {
    index: string
    title: string
    image: object
    description: string
    isActive?: boolean
}

export const FixCard = ({
    index,
    title,
    image,
    description,
    isActive = false,
}: FixCardProps) => {
    return (
        <FlexContainer
            gap="lg:gap-[30px]"
            direction="flex-col"
            className={`lg:pb-[30px] transition-all duration-700 ease-out ${
                isActive
                    ? 'opacity-100 scale-100 translate-y-0 lg:opacity-100 lg:scale-100 lg:translate-y-0'
                    : 'opacity-50 scale-95 translate-y-4 lg:opacity-100 lg:scale-100 lg:translate-y-0'
            }`}
        >
            <FlexContainer className="justify-end lg:justify-between">
                <span>{index}</span> <span className="hidden lg:block">/</span>
            </FlexContainer>
            <FlexContainer
                direction="flex-col lg:flex-row"
                gap="gap-2 lg:gap-[30px]"
                className="lg:items-center"
            >
                <LottieAnimation
                    animationData={image}
                    className="w-[100px] lg:w-[180px]"
                />
                <FlexContainer gap="lg:gap-[30px]" direction="flex-col">
                    <H3 className="pb-4 lg:pb-0 border-b-[0.5px] lg:border-none border-[#363E44]">
                        {title}
                    </H3>
                    <P className="pt-4 lg:pt-0">{description}</P>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
