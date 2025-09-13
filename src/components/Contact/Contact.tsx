import React from 'react'
import { H2 } from '../Typography/H2'
import { P } from '../Typography/P'

export const Contact = () => {
    return (
        <section className="mx-5 flex flex-col min-h-screen items-center justify-center">
            <P>Start your journey</P>
            <H2>
                Get <span className="text-blue-400">Started</span>
            </H2>
            <P>PS - we’re at SuiteWorld 2025. Come say hi!</P>
            <button className="py-2.5 px-4 bg-[#0DBFBB] uppercase w-fit">
                Schedule a Consultation
            </button>
            <div>animation</div>
        </section>
    )
}
