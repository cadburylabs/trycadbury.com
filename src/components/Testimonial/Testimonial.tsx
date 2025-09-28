import React from 'react'
import { FlexContainer } from '../FlexContainer'
import { H2 } from '../Typography/H2'
import { TestimonialCard } from './TestimonialCard'
import { testimonialsConfig } from '../contentConfig'

type TestimonialProps = {
    id?: string
}

export const Testimonial = ({ id = '' }: TestimonialProps) => {
    return (
        <div className="bg-gradient-dots">
            <section
                id={id}
                className="relative flex flex-col mx-3 lg:mx-5 bg-gradient-dots"
            >
                <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />
                {/* vertical gradient line */}
                <span className="absolute top-0 left-0 h-full w-px border-y-gradient" />
                <span className="absolute top-0 right-0 h-full w-px border-y-gradient" />
                <FlexContainer
                    direction="flex-col"
                    className="relative py-8 lg:py-10 px-4 lg:px-14"
                >
                    <H2>Testimonials</H2>
                </FlexContainer>
                <FlexContainer
                    direction="flex-col"
                    className="relative lg:py-10 px-4 lg:px-14"
                >
                    <span className="absolute top-0 left-0 w-full h-px border-x-gradient" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 py-8">
                        {testimonialsConfig.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                index={index}
                                {...testimonial}
                            />
                        ))}
                    </div>
                </FlexContainer>
            </section>
        </div>
    )
}
