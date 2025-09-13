import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { HorizontalAlign, MinHeight, VerticalAlign } from './types/flexTypes'

type FlexContainerProps = {
    children: ReactNode
    direction?: string
    minHeight?: MinHeight
    justifyContent?: HorizontalAlign
    alignItems?: VerticalAlign
    width?: string
    center?: boolean
    gap?: string
    className?: string
    id?: string
    role?: string
    tabIndex?: number
    onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void
}

export const FlexContainer = forwardRef<HTMLDivElement, FlexContainerProps>(
    (
        {
            children,
            direction = 'flex-row',
            minHeight = 'min-h-auto',
            justifyContent,
            alignItems,
            width = 'w-full',
            center = false,
            gap = 'gap-0',
            className = '',
            role,
            tabIndex,
            id,
            onClick,
        },
        ref
    ) => {
        const horizontalAlignClass =
            justifyContent || (center ? 'justify-center' : '')
        const verticalAlignClass = alignItems || (center ? 'items-center' : '')

        const combinedClasses = clsx(
            'flex',
            width,
            direction,
            horizontalAlignClass,
            verticalAlignClass,
            gap,
            minHeight,
            className
        )

        return (
            <div
                ref={ref}
                id={id}
                role={role}
                tabIndex={tabIndex}
                onClick={onClick}
                className={combinedClasses}
            >
                {children}
            </div>
        )
    }
)

FlexContainer.displayName = 'FlexContainer'
