import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { H3 } from '../Typography/H3'
import { P } from '../Typography/P'

export const Benefits = () => {
    return (
        <section className="flex mx-5 flex-col">
            <FlexContainer className="border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-[#363E44]">
                <H2>Benefits</H2>
            </FlexContainer>
            <FlexContainer
                direction="flex-row"
                className="border-r-[0.5px] border-l-[0.5px] border-b-[0.5px] border-[#363E44]"
            >
                <FlexContainer alignItems="items-center">
                    <FlexContainer
                        direction="flex-col"
                        justifyContent="justify-between"
                        className="flex-[0] pr-20"
                    >
                        <P>BS-01</P>
                        <P className="uppercase">Endless</P>
                    </FlexContainer>
                    <div className="px-20">Logo</div>
                    <FlexContainer direction="flex-col">
                        <H3>Speed</H3>
                        <P>
                            NetSuite is a deep product that spans many modules
                            and add-ons. Day by day, we are mapping these
                            corners so that Cadbury becomes the AI powered
                            NetSuite consultant for everyone.
                        </P>
                    </FlexContainer>
                </FlexContainer>
            </FlexContainer>
        </section>
    )
}
