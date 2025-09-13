import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H1 } from '../Typography/H1'
import { P } from '../Typography/P'

export const Intro = () => {
    return (
        <section className="mx-5 flex min-h-screen pt-16">
            <FlexContainer
                direction="flex-col"
                justifyContent="justify-center"
                className="border-r-[0.5px] border-l-[0.5px] border-b-[0.5px] border-blue-100 flex-1"
            >
                <H1>
                    Cadbury is an AI <br />
                    <span className="text-blue-400">Powered NetSuite</span>
                    <br />
                    Consultant
                </H1>
                <P>
                    Cadbury builds workflows, edits PDF templates, and creates
                    saved searches in minutes. Trained on a proprietary corpus
                    of data sourced from hundreds of expert consultants, Cadbury
                    is the last consultant you’ll ever need.
                </P>
                <button className="py-2.5 px-4 bg-[#0DBFBB] uppercase w-fit">
                    Schedule a Consultation
                </button>
            </FlexContainer>

            <FlexContainer
                center
                className="flex-1 border-r-[0.5px] border-b-[0.5px] border-blue-100"
            >
                Graphics
            </FlexContainer>
        </section>
    )
}
