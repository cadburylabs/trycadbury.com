import React from 'react'
import { H2 } from '../Typography/H2'
import { P } from '../Typography/P'
import { Button } from '../Button'
import { FlexContainer } from '../FlexContainer'
import Image from 'next/image'
import pointIco from '@/assets/point.png'
import logoColor from '@/assets/logoColor.svg'
import { Footer } from '../Footer'

export const Contact = ({ id = '' }: { id: string }) => {
    return (
        <section
            id={id}
            className="relative mx-3 lg:mx-5 pt-20 min-h-screen flex flex-col"
        >
            {/* horizontal gradient line */}
            <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
            <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />
            {/* vertical gradient line */}
            <span className="absolute top-0 left-0 h-full w-px border-y-gradient z-40" />
            <span className="absolute top-0 right-0 h-full w-px border-y-gradient z-40" />

            <FlexContainer
                direction="flex-col"
                gap="gap-10"
                alignItems="items-center"
                className="h-full flex-1 justify-between pb-[125px] lg:pb-10"
            >
                <FlexContainer
                    direction="flex-col"
                    gap="gap-10"
                    center
                    className="px-5"
                >
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
            </FlexContainer>
            <Footer />
        </section>
    )
}
