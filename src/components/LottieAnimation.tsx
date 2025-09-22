'use client'
import Lottie from 'lottie-react'
import React from 'react'

type LottieAnimationProps = {
    animationData: unknown
    className?: string
}

export const LottieAnimation = ({
    animationData,
    className,
}: LottieAnimationProps) => {
    return (
        <Lottie
            animationData={animationData}
            loop
            autoplay
            className={className}
        />
    )
}
