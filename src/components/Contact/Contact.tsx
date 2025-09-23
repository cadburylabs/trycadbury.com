import React from 'react'
import { H2 } from '../Typography/H2'
import { P } from '../Typography/P'
import { Button } from '../Button'
import { FlexContainer } from '../FlexContainer'
import Image from 'next/image'
import pointIco from '@/assets/point.png'
import logoColor from '@/assets/logoColor.svg'

export const Contact = () => {
    return (
        <section className="relative mx-3 lg:mx-5 px-5 pt-20 pb-10 flex flex-col min-h-screen items-center justify-around lg:justify-between border-[0.5px] border-[#363E44]">
            <FlexContainer direction="flex-col" gap="gap-10" center>
                <FlexContainer direction="flex-col" gap="gap-5" center>
                    <FlexContainer
                        width="w-fit"
                        gap="gap-1.5"
                        alignItems="items-center"
                        className="uppercase"
                    >
                        <Image src={pointIco} alt="" /> Start your journey
                    </FlexContainer>
                    <H2>
                        Get{' '}
                        <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                            Started
                        </span>
                    </H2>
                    <P>PS - we’re at SuiteWorld 2025. Come say hi!</P>
                </FlexContainer>
                <Button>Schedule a Consultation</Button>
            </FlexContainer>
            <Image src={logoColor} alt="" />
        </section>
    )
}
