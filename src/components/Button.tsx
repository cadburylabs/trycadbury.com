import React, { ReactNode } from 'react'

export const Button = ({ children }: { children: ReactNode }) => {
    return (
        <button className="w-fit py-6 px-6 rounded-lg bg-gradient-to-r from-[#0DBFBB] to-[#0F8D8C] uppercase font-roboto-mono">
            {children}
        </button>
    )
}
