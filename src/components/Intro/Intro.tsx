import React, { useEffect, useState } from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1 } from '../Typography/H1'
import { P } from '../Typography/P'
import { Button } from '../Button'
import { Box } from '../Box'
import { Modal } from '../Modal'
import Image from 'next/image'
import videoPreview from '@/assets/videoPreview.png'
import icoBack from '@/assets/icoBack.svg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const Intro = ({ id = '' }: { id: string }) => {
    const [showVideo, setShowVideo] = useState(false)

    useEffect(() => {
        if (showVideo) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
            ScrollTrigger.refresh()
        }
    }, [showVideo])

    return (
        <section
            id={id}
            className="relative mx-3 lg:mx-5 flex flex-col lg:flex-row lg:min-h-screen pt-14 lg:pt-16"
        >
            {/* horizontal gradient line */}
            <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
            <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />

            {/* vertical gradient line */}
            <span className="block lg:hidden absolute top-0 left-0 h-full w-px border-y-gradient" />
            <span className="block lg:hidden absolute top-0 right-0 h-full w-px border-y-gradient" />

            <FlexContainer
                direction="flex-col"
                justifyContent="justify-center"
                gap="gap-10"
                className="relative px-4 lg:px-14 pt-5 pb-10 text-center lg:text-left"
            >
                {/* horizontal gradient line */}
                <span className="block lg:hidden absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                {/* vertical gradient line */}
                <span className="hidden lg:block absolute top-0 left-0 h-full w-px border-y-gradient" />
                <span className="hidden lg:block absolute top-0 right-0 h-full w-px border-y-gradient" />

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
                    className="lg:max-w-[500px]"
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

            <FlexContainer center className="relative lg:px-14">
                {/* vertical gradient line */}
                <span className="hidden lg:block absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-[#363E44] to-transparent" />

                <Box
                    className="mx-4 my-8 group cursor-pointer relative"
                    onClick={() => setShowVideo(true)}
                >
                    <Image
                        src={videoPreview}
                        alt="preview video"
                        className="group-hover:opacity-85 duration-300"
                    />

                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[62px] h-[62px] rounded-full 
                  bg-gradient-to-b from-white/20 backdrop-blur-sm to-transparent z-0"
                    />

                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  flex items-center justify-center w-[60px] h-[60px] rounded-full 
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
            <Modal
                isOpen={showVideo}
                onClose={() => setShowVideo(false)}
                variant="fullscreen"
            >
                <FlexContainer center className="relative h-full">
                    <Image
                        src={icoBack}
                        alt="icon back"
                        className="absolute top-8 right-8 cursor-pointer"
                        onClick={() => setShowVideo(false)}
                    />
                    <Image src={videoPreview} alt="preview video" />
                </FlexContainer>
            </Modal>
        </section>
    )
}
