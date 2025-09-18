import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { H3 } from '../Typography/H3'
import { P } from '../Typography/P'
import Image from 'next/image'
import visual from '@/assets/visual.png'
import pointIco from '@/assets/point.png'

export const Benefits = () => {
    return (
        <section className="relative flex mx-5 flex-col">
            <div className="animate-move-y-left" />
            <div className="animate-move-y-right" />
            <FlexContainer className="relative px-14 py-10 border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-[#363E44]">
                <FlexContainer
                    justifyContent="justify-between"
                    alignItems="items-center"
                >
                    <H2>Benefits</H2>
                    <FlexContainer
                        width="w-fit"
                        gap="gap-1.5"
                        alignItems="items-center"
                        className="uppercase"
                    >
                        <Image src={pointIco} alt="" /> Value
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer
                    justifyContent="justify-end"
                    alignItems="items-center"
                >
                    <span>/04</span>
                </FlexContainer>
            </FlexContainer>
            <FlexContainer
                direction="flex-row"
                className="border-r-[0.5px] border-l-[0.5px] border-b-[0.5px] border-[#363E44]"
            >
                <FlexContainer alignItems="items-center">
                    <FlexContainer
                        width="w-fit"
                        direction="flex-col"
                        justifyContent="justify-between"
                        className="pl-20 py-12 h-full"
                    >
                        <P>BS-01</P>
                        <P className="uppercase">Swift</P>
                    </FlexContainer>
                    <Image
                        src={visual}
                        alt="visual animation"
                        className="mr-10"
                    />
                    <FlexContainer
                        width="max-w-[450px]"
                        gap="gap-[30px]"
                        direction="flex-col"
                    >
                        <H3>Speed</H3>
                        <P>
                            Cadbury takes tasks that would take a human
                            consultant days or weeks to finish—and leverages AI
                            to complete them in minutes. We believe your
                            business deserves to move fast, and shouldn’t be
                            slowed down by inefficient consulting firms.
                        </P>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
            <div className="animate-move-x-bottom" />
        </section>
    )
}
