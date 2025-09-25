import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1 } from '../Typography/H1'
import { P } from '../Typography/P'
import { Button } from '../Button'
import Image from 'next/image'
import videoPreview from '@/assets/videoPreview.png'

export const Intro = ({ id = '' }: { id: string }) => {
    return (
        <section
            id={id}
            className="relative mx-3 lg:mx-5 flex flex-col lg:flex-row lg:min-h-screen pt-14 lg:pt-16"
        >
            <FlexContainer
                direction="flex-col"
                justifyContent="justify-center"
                gap="gap-10"
                className="relative px-4 lg:px-14 pt-5 pb-10 border-r-[0.5px] border-l-[0.5px] border-b-[0.5px] border-[#363E44] text-center lg:text-left"
            >
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
                className="relative lg:px-14 border-l-[0.5px] lg:border-l-0 border-r-[0.5px] border-b-[0.5px] border-[#363E44]"
            >
                <Box
                    className="mx-4 my-8 group cursor-pointer relative"
                    onClick={() => setShowVideo(true)}
                >
                    <Image src={videoPreview} alt="preview video" />

                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[82px] h-[82px] rounded-full 
                  bg-gradient-to-b from-white/20 backdrop-blur-sm to-transparent z-0"
                    />

                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  flex items-center justify-center w-20 h-20 rounded-full 
                  bg-black z-10 
                  opacity-60 group-hover:opacity-70 backdrop-blur-sm transition duration-300"
                    >
                        <div
                            className="w-0 h-0 
                    border-t-[8px] border-t-transparent 
                    border-b-[8px] border-b-transparent 
                    border-l-[12px] border-l-white ml-1"
                        />
                    </div>
                </Box>
            </FlexContainer>
        </section>
    )
}
