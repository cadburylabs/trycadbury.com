import React from 'react'
import { H2 } from '../Typography/H2'
import { P } from '../Typography/P'
import { Button } from '../Button'
import { FlexContainer } from '../FlexContainer'
import Image from 'next/image'
import pointIco from '@/assets/point.png'

export const Contact = () => {
    return (
        <section className="relative mx-5 px-5 flex flex-col gap-10 min-h-screen items-center justify-center border-[0.5px] border-[#363E44]">
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
        </section>
    )
}
