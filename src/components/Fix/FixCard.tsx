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
            gap="gap-[30px]"
            direction="flex-col"
            className="pb-[30px]"
        >
            <FlexContainer justifyContent="justify-between">
                <span>{index}</span> <span>/</span>
            </FlexContainer>
            <FlexContainer alignItems="items-center" gap="gap-[30px]">
                <Image src={image} alt="logo" />
                <FlexContainer gap="gap-[30px]" direction="flex-col">
                    <H3>{title}</H3>
                    <P>{description}</P>
                </FlexContainer>
            </FlexContainer>
        </FlexContainer>
    )
}
