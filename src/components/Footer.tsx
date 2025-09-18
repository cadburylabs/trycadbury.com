import React from 'react'
import { H3 } from './Typography/H3'
import { FlexContainer } from './FlexContainer'

export const Footer = () => {
    return (
        <footer className="relative mx-5">
            <div className="absolute -top-[200px] h-[200px] left-0 w-full flex items-center justify-center backdrop-blur-sm border-[0.5px] border-[#363E44]">
                <div className="animate-move-x-top" />
                <div className="animate-move-x-bottom" />
                <H3 className="text-center">
                    You Deserve{' '}
                    <span className="text-[#6DE1CE]">
                        to Be Growing Your Business
                    </span>
                    , not <br />
                    Managing Another Consultant.
                </H3>
            </div>
            <FlexContainer
                justifyContent="justify-between"
                className="font-roboto-mono p-6 border-r-[0.5px] border-l-[0.5px] border-[#363E44]"
            >
                <span className="text-[#ADBACC] text-[14px] tracking-tight">
                    ©2025 Cadbury.
                </span>
                <span className="text-[#7C848C] text-[13px] tracking-tight uppercase">
                    All rights reserved.
                </span>
                <FlexContainer
                    width="w-fit"
                    gap="gap-3"
                    className="text-[#ADBACC] text-[14px] tracking-tight"
                >
                    <a className="cursor-pointer">Linkedin</a>
                    <span>/</span>
                    <a className="cursor-pointer">Twitter</a>
                </FlexContainer>
                <span className="text-[#7C848C] text-[13px] tracking-tight uppercase cursor-pointer">
                    Privacy policy
                </span>
                <span className="text-[#7C848C] text-[13px] tracking-tight uppercase cursor-pointer">
                    Back to top
                </span>
            </FlexContainer>
        </footer>
    )
}
