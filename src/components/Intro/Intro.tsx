import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1 } from '../Typography/H1'
import { P } from '../Typography/P'
import { Button } from '../Button'
import Image from 'next/image'
import videoPreview from '@/assets/videoPreview.png'

export const Intro = () => {
    return (
        <section className="relative mx-3 lg:mx-5 flex flex-col lg:flex-row lg:min-h-screen pt-14 lg:pt-16">
            <FlexContainer
                direction="flex-col"
                justifyContent="justify-center"
                gap="gap-10"
                className="relative px-4 lg:px-14 pt-5 pb-10 border-r-[0.5px] border-l-[0.5px] border-b-[0.5px] border-[#363E44] text-center lg:text-left"
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
                        <span className="font-medium">edits PDF templates</span>
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
                className="relative px-14 border-l-[0.5px] lg:border-l-0 border-r-[0.5px] border-b-[0.5px] border-[#363E44]"
            >
                <div className="animate-move-y-right" />
                <Image
                    src={videoPreview}
                    alt="preview video"
                    className="max-w-[400px] px-4 py-8"
                />
            </FlexContainer>

            <div className="animate-move-x-bottom" />
        </section>
    )
}
