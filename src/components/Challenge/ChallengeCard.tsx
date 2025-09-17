import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3 } from '../Typography/H3'
import { P } from '../Typography/P'
import { Box } from '../Box'

type ChallengeCardProps = {
    index: string
    title: string
    description: string
}

export const ChallengeCard = ({
    index,
    title,
    description,
}: ChallengeCardProps) => {
    return (
        <FlexContainer direction="flex-col">
            <Box className="border-b-[0.5px] border-[#363E44] pb-[30px]">
                <H3 className="whitespace-pre-line">{title}</H3>

                <div className="absolute right-0 top-1/4">{index}</div>
            </Box>

            <P className="pt-[30px]">{description}</P>
        </FlexContainer>
    )
}
