import React from 'react'
import { H3 } from './Typography/H3'
import { FlexContainer } from './FlexContainer'
import { useLenisContext } from '@/context/LenisContext'

type FooterProps = {
    animatedBlockRef?: React.Ref<HTMLDivElement>
}

export const Footer = ({ animatedBlockRef }: FooterProps) => {
    const { lenis } = useLenisContext()

    const scrollToTop = () => {
        if (lenis) {
            lenis.scrollTo(0, {
                duration: 2,
                easing: (t) => 1 - Math.pow(1 - t, 3),
            })
        }
    }

    return (
        <footer className="relative w-full">
            <div
                ref={animatedBlockRef}
                className="absolute -top-[200px] h-[200px] left-0 w-full flex items-center justify-center backdrop-blur-2xl"
            >
                {/* horizontal gradient line */}
                <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
                <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />

                <H3
                    fontSize="text-[19px] md:text-[40px]"
                    className="text-center leading-tight max-w-[800px]"
                >
                    You Deserve{' '}
                    <span className="text-[#6DE1CE]">
                        to Be Growing Your Business
                    </span>
                    , not Managing Another Consultant.
                </H3>
            </div>
            <FlexContainer
                direction="flex-col"
                gap="gap-[30px]"
                className="p-4 lg:p-6 relative"
            >
                <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />
                <FlexContainer
                    gap="gap-3"
                    className="lg:hidden text-[#ADBACC] text-[10px] lg:text-[14px] tracking-tight pt-8"
                    center
                >
                    <a
                        href="https://www.linkedin.com/in/manish-sinha-9675b366/"
                        className="cursor-pointer"
                    >
                        Linkedin
                    </a>
                    <span>/</span>
                    <a
                        href="https://x.com/manishsinhaha"
                        className="cursor-pointer"
                    >
                        Twitter
                    </a>
                </FlexContainer>
                <FlexContainer
                    justifyContent="justify-between"
                    className="font-roboto-mono"
                >
                    <span className="text-[#ADBACC] text-[10px] lg:text-[14px] tracking-tight">
                        ©2025 Cadbury.
                    </span>
                    <span className="text-[#7C848C] text-[9px] lg:text-[13px] tracking-tight uppercase">
                        All rights reserved.
                    </span>
                    <FlexContainer
                        width="w-fit"
                        gap="gap-3"
                        className="hidden lg:flex text-[#ADBACC] text-[14px] tracking-tight"
                    >
                        <a
                            href="https://www.linkedin.com/in/manish-sinha-9675b366/"
                            className="cursor-pointer"
                        >
                            Linkedin
                        </a>
                        <span>/</span>
                        <a
                            href="https://x.com/manishsinhaha"
                            className="cursor-pointer"
                        >
                            Twitter
                        </a>
                    </FlexContainer>
                    <span className="text-[#7C848C] text-[9px] lg:text-[13px] tracking-tight uppercase cursor-pointer">
                        Privacy policy
                    </span>
                    <span
                        onClick={scrollToTop}
                        className="hidden lg:block text-[#7C848C] text-[13px] tracking-tight uppercase cursor-pointer"
                    >
                        Back to top
                    </span>
                </FlexContainer>
            </FlexContainer>
        </footer>
    )
}
