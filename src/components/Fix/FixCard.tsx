import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3 } from '../Typography/H3'
import { P } from '../Typography/P'
import Image, { StaticImageData } from 'next/image'

type FixCardProps = {
    index: string
    title: string
    image: StaticImageData
    description: string
}

export const FixCard = ({ index, title, image, description }: FixCardProps) => {
    return (
        <FlexContainer
            gap="lg:gap-[30px]"
            direction="flex-col"
            className="lg:pb-[30px]"
        >
            <FlexContainer className="justify-end lg:justify-between">
                <span>{index}</span> <span className="hidden lg:block">/</span>
            </FlexContainer>
            <FlexContainer
                direction="flex-col lg:flex-row"
                gap="gap-2 lg:gap-[30px]"
                className="lg:items-center"
            >
                <Image src={image} alt="logo" className="w-[100px] lg:w-auto" />
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
