import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'

type BoxProps = {
    id?: string
    children: ReactNode
    className?: string
    onClick?: () => void
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
    ({ id, children, className = '', onClick }, ref) => {
        return (
            <div
                ref={ref}
                id={id}
                onClick={onClick}
                className={clsx('relative', className)}
            >
                {children}
            </div>
        )
    }
)

Box.displayName = 'Box'
