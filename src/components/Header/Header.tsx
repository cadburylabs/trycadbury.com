import React from 'react'
import { FlexContainer } from '../FlexContainer'

export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full px-5">
            <FlexContainer
                justifyContent="justify-between"
                alignItems="items-center"
                className="border-b-[0.5px] border-blue-100 py-2.5"
            >
                <div>Logo</div>
                <nav>
                    <ul className="flex gap-2">
                        <li>The Challenge</li>
                        <li>The Fix</li>
                        <li>How it works</li>
                        <li>Benefits</li>
                        <li>Comparison</li>
                    </ul>
                </nav>
                <button className="py-2.5 px-4 bg-[#0DBFBB] uppercase">
                    Free demo
                </button>
            </FlexContainer>
        </header>
    )
}
