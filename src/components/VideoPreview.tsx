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
            <div className="relative border-2 border-[#6DE1CE] rounded-lg overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    className="duration-300"
                />

                {/* Enhanced play button with glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full bg-gradient-to-b from-white/30 backdrop-blur-sm to-transparent z-0" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-[76px] h-[76px] rounded-full bg-black/80 z-10 opacity-70 backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-white ml-1" />
                </div>
            </div>
        </Box>
    )
}
