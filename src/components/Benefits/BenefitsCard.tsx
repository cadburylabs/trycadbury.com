import React, { forwardRef } from 'react'
import { FlexContainer } from '../FlexContainer'
import { H3 } from '../Typography/H3'
import { P } from '../Typography/P'
import { LottieAnimation } from '../LottieAnimation'
import blocks from '@/assets/blocks.json'

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
                className={`${className} h-full p-3.5 lg:p-[60px] benefits-background`}
            >
                {/* horizontal gradient line */}
                <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
                <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                <FlexContainer
                    width="w-full lg:w-fit"
                    direction="lg:flex-col"
                    justifyContent="justify-between"
                    className="lg:h-full mr-5 xl:mr-10 shrink-0"
                >
                    <P
                        fontSize="text-[11px] lg:text-[16px]"
                        className="font-roboto-mono"
                    >
                        {index}
                    </P>
                    <P
                        fontSize="text-[11px] lg:text-[16px]"
                        className="hidden lg:block uppercase font-roboto-mono"
                    >
                        {tag}
                    </P>
                    <P className="block lg:hidden uppercase">/</P>
                </FlexContainer>
                <FlexContainer
                    width="w-full lg:w-[400px] xl:w-[434px]"
                    center
                    className="shrink-0"
                >
                    <LottieAnimation
                        animationData={icon}
                        className="h-[186px] lg:h-[250px] w-auto pt-4 lg:pt-0"
                    />
                </FlexContainer>
                <FlexContainer
                    width="w-full lg:max-w-[450px]"
                    gap="gap-[15px] lg:gap-[30px]"
                    direction="flex-col"
                    className="xl:ml-32 lg:py-4 pt-8 lg:pt-0 text-center lg:text-left shrink-0"
                >
                    <H3>{title}</H3>
                    <P>{description}</P>
                </FlexContainer>
                <FlexContainer
                    width="w-full"
                    direction="lg:flex-col"
                    alignItems="items-end"
                    justifyContent="justify-between"
                    className="h-full"
                >
                    <P className="hidden lg:block">/</P>
                    <P
                        fontSize="text-[11px] lg:text-[16px]"
                        className="block lg:hidden uppercase font-roboto-mono"
                    >
                        {tag}
                    </P>
                    <LottieAnimation animationData={blocks} className="h-2.5" />
                </FlexContainer>
            </FlexContainer>
        )
    }
)

BenefitsCard.displayName = 'BenefitsCard'
