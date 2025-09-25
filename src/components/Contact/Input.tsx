import React from 'react'
import { FlexContainer } from '../FlexContainer'

type InputProps = {
    id: string
    label: string
    isRequired?: boolean
    error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            label,
            name,
            type,
            placeholder,
            isRequired = false,
            error,
            ...inputProps
        },
        ref
    ) => {
        return (
            <FlexContainer
                gap="gap-1"
                direction="flex-col"
                className="font-roboto-mono"
            >
                <label
                    htmlFor={name}
                    className="text-[12px] lg:text-[16px] uppercase tracking-tight"
                >
                    {label}
                    {isRequired && <span className="text-[#A83030]">*</span>}
                </label>
                <input
                    id={id}
                    name={name}
                    type={type}
                    ref={ref}
                    placeholder={placeholder}
                    className="bg-[#121A21] p-2.5 rounded-sm border border-[#cfdae5] focus:outline-none focus:border-[#0F8D8C] text-[12px] lg:text-[16px]"
                    {...inputProps}
                />
                {error && (
                    <span className="text-[#F72B68] uppercase text-[11px] md:text-[13px] flex gap-2 items-center">
                        {error}
                    </span>
                )}
            </FlexContainer>
        )
    }
)

Input.displayName = 'Input'
