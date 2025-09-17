import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1 } from '../Typography/H1'
import { P } from '../Typography/P'
import { Button } from '../Button'
import Image from 'next/image'
import intro from '@/assets/intro.svg'
import videoPreview from '@/assets/videoPreview.png'

export const Intro = () => {
    return (
        <section className="relative mx-5 flex min-h-screen pt-16 bg-gradient-dots">
            <FlexContainer
                direction="flex-col"
                justifyContent="justify-center"
                gap="gap-10"
                className="relative pl-14 border-r-[0.5px] border-l-[0.5px] border-b-[0.5px] border-[#363E44] flex-1"
            >
                <div className="animate-move-y-left" />
                <div className="animate-move-y-right" />
                <H1>
                    Cadbury is an <br />
                    <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                        AI NetSuite
                    </span>
                    <br />
                    Consultant
                </H1>
                <FlexContainer
                    direction="flex-col"
                    gap="gap-2.5"
                    className="max-w-[500px]"
                >
                    <P>
                        Cadbury builds workflows,{' '}
                        <span className="text-[#6DE1CE] font-medium">
                            edits PDF templates
                        </span>
                        , and creates saved searches in minutes.
                    </P>
                    <P>
                        Trained on a proprietary corpus of data sourced from
                        hundreds of expert consultants, Cadbury is the last
                        consultant you’ll ever need.
                    </P>
                </FlexContainer>
                <Button className="mt-8">Schedule a Consultation</Button>
            </FlexContainer>

            <FlexContainer
                center
                className="relative flex-1 border-r-[0.5px] border-b-[0.5px] border-[#363E44]"
            >
                <div className="animate-move-y-right" />
                <Image src={intro} alt="Intro graphic" />
            </FlexContainer>

            <div className="animate-move-x-bottom" />
            <div className="absolute right-0 bottom-0 w-48">
                <Image src={videoPreview} alt="preview video" />
            </div>
        </section>
    )
}
