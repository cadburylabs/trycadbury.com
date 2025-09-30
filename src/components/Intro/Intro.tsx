import React, { useState } from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1 } from '../Typography/H1'
import { P } from '../Typography/P'
import { Button } from '../Button'
import { Modal } from '../Modal'
import Image from 'next/image'
import videoPreview from '@/assets/videoPreview_2.png'
import icoBack from '@/assets/icoBack.svg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { VideoPreview } from '../VideoPreview'

gsap.registerPlugin(ScrollTrigger)

export const Intro = ({ id = '' }: { id: string }) => {
    const [showVideo, setShowVideo] = useState(false)

    return (
        <div className="bg-gradient-dots">
            <section
                id={id}
                className="relative mx-3 lg:mx-5 flex flex-col lg:flex-row lg:min-h-screen pt-14 lg:pt-16 bg-gradient-dots"
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
                            AI powered
                        </span>
                        <br />
                        NetSuite Consultant
                    </H1>
                    <FlexContainer
                        direction="flex-col"
                        gap="gap-2.5"
                        className="lg:max-w-[500px]"
                    >
                        <P>
                            Whether it&apos;s creating saved searches, building workflows, or writing integrations, Cadbury does it all—instantly.
                        </P>
                    </FlexContainer>
                    <Button className="mt-8">Let&apos;s Talk</Button>
                </FlexContainer>

                <FlexContainer center className="relative lg:px-14">
                    {/* vertical gradient line */}
                    <span className="hidden lg:block absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-[#363E44] to-transparent" />

                    <VideoPreview
                        src={videoPreview}
                        youtubeUrl="https://www.youtube.com/watch?v=nrX3lxsy_J0"
                    />
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
        </div>
    )
}
