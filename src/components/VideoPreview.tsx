// components/VideoPreview.tsx
'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Box } from './Box'

interface VideoPreviewProps {
    src: StaticImageData
    header?: boolean
    alt?: string
    youtubeUrl?: string
    onClick?: () => void
}

export const VideoPreview = ({
    src,
    header,
    alt = 'video preview',
    youtubeUrl,
    onClick,
}: VideoPreviewProps) => {
    const handleClick = () => {
        if (youtubeUrl) {
            window.open(youtubeUrl, '_blank', 'noopener,noreferrer')
        } else if (onClick) {
            onClick()
        }
    }

    return (
        <Box
            className={`${
                header ? '' : 'mx-4'
            } my-8 group cursor-pointer relative`}
            onClick={handleClick}
        >
            <Image
                src={src}
                alt={alt}
                className="group-hover:opacity-85 duration-300"
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[62px] h-[62px] rounded-full bg-gradient-to-b from-white/20 backdrop-blur-sm to-transparent z-0" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[60px] h-[60px] rounded-full bg-black z-10 opacity-60 group-hover:opacity-70 backdrop-blur-sm transition duration-300">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white ml-1" />
            </div>
        </Box>
    )
}
