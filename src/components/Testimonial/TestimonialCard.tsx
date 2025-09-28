import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { P } from '../Typography/P'

type TestimonialCardProps = {
    index: number
    logo: StaticImageData | string
    feedback: string
    personImage: StaticImageData | string
    personName: string
    position: string
}

export const TestimonialCard = ({
    logo,
    feedback,
    personImage,
    personName,
    position,
}: TestimonialCardProps) => {
    return (
        <div className="relative flex flex-col p-6 lg:p-8 shadow-xl hover:shadow-3xl transition-shadow duration-300 min-h-[320px]">
            <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
            <span className="absolute bottom-0 left-0 w-full h-px border-x-gradient" />
            <span className="absolute top-0 left-0 h-full w-px border-y-gradient" />
            <span className="absolute top-0 right-0 h-full w-px border-y-gradient" />

            <div className="flex justify-center mb-6">
                <div className="h-12 w-auto flex items-center">
                    <Image
                        src={logo}
                        alt="Company Logo"
                        width={120}
                        height={48}
                        className="h-12 w-auto object-contain"
                    />
                </div>
            </div>

            <div className="flex-1 mb-4">
                <P
                    fontSize="text-[16px] lg:text-[20px]"
                    className="font-medium text-center"
                >
                    {feedback}
                </P>
            </div>

            <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20 flex-shrink-0">
                    <Image
                        src={personImage}
                        alt={personName}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <h4 className="text-white font-semibold text-base mb-1">
                        {personName}
                    </h4>
                    <p className="text-white/60 text-sm font-medium">
                        {position}
                    </p>
                </div>
            </div>
        </div>
    )
}
