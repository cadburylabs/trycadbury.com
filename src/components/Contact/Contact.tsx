import React from 'react'
import { H2 } from '../Typography/H2'
import { P } from '../Typography/P'
import { Button } from '../Button'

export const Contact = () => {
    return (
        <section className="mx-5 flex flex-col min-h-screen items-center justify-center">
            <P>Start your journey</P>
            <H2>
                Get{' '}
                <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                    Started
                </span>
            </H2>
            <P>PS - we’re at SuiteWorld 2025. Come say hi!</P>
            <Button>Schedule a Consultation</Button>
            <div>animation</div>
        </section>
    )
}
