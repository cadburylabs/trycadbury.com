import React from 'react'
import { FlexContainer } from '../FlexContainer'

type InputProps = {
    id: string
    label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
    ({ id, label, name, placeholder, ...inputProps }, ref) => {
        return (
            <FlexContainer
                gap="gap-2.5"
                alignItems="items-center"
                className="font-roboto-mono"
            >
                <input
                    id={id}
                    name={name}
                    type="radio"
                    ref={ref}
                    placeholder={placeholder}
                    className="appearance-none w-3 h-3 rounded-full border border-[#0DBFBB] relative transition-colors checked:after:content-[''] checked:after:block checked:after:w-1.5 checked:after:h-1.5 checked:after:rounded-full checked:after:bg-[#0DBFBB] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                    {...inputProps}
                />
                <label htmlFor={name} className="uppercase tracking-tight">
                    {label}
                </label>
            </FlexContainer>
        )
    }
)

Checkbox.displayName = 'Checkbox'
