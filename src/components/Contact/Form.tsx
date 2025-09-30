'use client'
import React, { useRef } from 'react'
import { Modal } from '../Modal'
import { FlexContainer } from '../FlexContainer'
import { Input } from './Input'
import { Checkbox } from './Checkbox'
import { Box } from '../Box'
import Image from 'next/image'
import pointIco from '@/assets/point.png'
import closeIco from '@/assets/closeIcon.svg'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import gsap from 'gsap'

const schema = z.object({
    name: z.string().optional(),
    email: z.string().email(),
    role: z.string().optional(),
})

type FormData = z.infer<typeof schema>

type FormProps = {
    open: boolean
    onClose: () => void
}

export const Form = ({ open, onClose }: FormProps) => {
    const formRef = useRef<HTMLFormElement | null>(null)
    const thankYouRef = useRef<HTMLDivElement | null>(null)

    const showThankYou = () => {
        gsap.to(formRef.current, {
            autoAlpha: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                gsap.set(formRef.current, { display: 'none' })
                gsap.set(thankYouRef.current, { display: 'block' })
                gsap.fromTo(
                    thankYouRef.current,
                    { autoAlpha: 0, y: 20 },
                    { autoAlpha: 1, y: 0, duration: 0.3 }
                )
            },
        })
    }

    const backToForm = () => {
        gsap.to(thankYouRef.current, {
            autoAlpha: 0,
            y: 20,
            duration: 0.3,
            onComplete: () => {
                gsap.set(thankYouRef.current, { display: 'none' })
                gsap.set(formRef.current, { display: 'flex' })
                gsap.fromTo(
                    formRef.current,
                    { autoAlpha: 0, y: -20 },
                    { autoAlpha: 1, y: 0, duration: 0.3 }
                )
            },
        })
    }

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            role: 'consultant',
        },
    })

    const onSubmit = async (data: FormData) => {
        console.log('Form submitted:', data)
        // TODO: send to API if needed
        showThankYou()
        reset()
    }

    return (
        <Modal isOpen={open} onClose={onClose} className="mx-5 text-white">
            <FlexContainer
                direction="flex-col"
                gap="gap-0"
                className="border-[0.5px] border-[#363E44] px-[30px]"
            >
                <Box className="w-full">
                    <FlexContainer
                        justifyContent="justify-between"
                        className="pt-5 pb-8"
                    >
                        <FlexContainer
                            gap="gap-1.5"
                            className="text-[13px] items-center uppercase font-roboto-mono"
                        >
                            <Image
                                src={pointIco}
                                alt="pointer icon"
                                className="w-[8px]"
                            />
                            Contact Us
                        </FlexContainer>

                        <Image
                            src={closeIco}
                            alt="close icon"
                            onClick={onClose}
                            className="cursor-pointer"
                        />
                    </FlexContainer>
                </Box>

                <form
                    ref={formRef}
                    className="flex flex-col gap-3"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        id="name"
                        type="text"
                        label="name"
                        placeholder="Your name"
                        {...register('name')}
                    />
                    <Input
                        id="email"
                        type="email"
                        label="email"
                        placeholder="your@email.com"
                        isRequired
                        {...register('email')}
                    />

                    <FlexContainer
                        direction="flex-col"
                        className="pb-3 text-[12px] lg:text-[16px]"
                    >
                        <span className="uppercase tracking-tight pb-1.5">
                            Role
                        </span>
                        <FlexContainer justifyContent="justify-between">
                            <Checkbox
                                id="consultant"
                                value="consultant"
                                {...register('role')}
                                label="Consultant"
                                type="radio"
                            />
                            <Checkbox
                                id="user"
                                value="user"
                                {...register('role')}
                                label="End user"
                                type="radio"
                            />
                        </FlexContainer>
                    </FlexContainer>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full p-[10px] mb-[60px] flex gap-1.5 justify-center rounded-sm button-background uppercase text-[12px] lg:text-[16px] font-roboto-mono cursor-pointer"
                    >
                        Send
                    </button>
                </form>

                <FlexContainer
                    ref={thankYouRef}
                    direction="flex-col"
                    className="text-center my-[60px] text-[30px] font-medium tracking-tighter leading-none hidden"
                    center
                >
                    <Box>
                        <span className="bg-gradient-to-r from-[#6DE1CE] via-[#288FF6] to-[#32FFFF] bg-clip-text text-transparent">
                            Thank you!
                        </span>
                        <br />
                        <span>We will reach out to you shortly.</span>
                    </Box>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        onClick={backToForm}
                        className="w-full p-[10px] mt-[80px] flex gap-1.5 justify-center rounded-sm button-background uppercase text-[12px] lg:text-[16px] font-roboto-mono cursor-pointer"
                    >
                        Back
                    </button>
                </FlexContainer>
            </FlexContainer>
        </Modal>
    )
}
