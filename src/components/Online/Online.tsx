import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { P } from '../Typography/P'
import { H2 } from '../Typography/H2'

export const Online = () => {
    return (
        <section className="flex mx-5">
            <FlexContainer
                direction="flex-col"
                className="border-l-[0.5px] border-r-[0.5px] border-b-[0.5px] border-[#363E44]"
            >
                <H2>
                    Online in <br />
                    <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                        60 Seconds
                    </span>
                </H2>
                <div>animation</div>
            </FlexContainer>
            <FlexContainer
                direction="flex-col"
                className="border-r-[0.5px] border-b-[0.5px] border-[#363E44]"
            >
                <div>animation</div>
                <P>
                    No implementation periods, no calls with our developers, no
                    gimmicks. Simply add{' '}
                    <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                        Cadbury as a user with admin privileges
                    </span>{' '}
                    into your sandbox account, and we’ll take care of the rest.
                </P>
            </FlexContainer>
        </section>
    )
}
