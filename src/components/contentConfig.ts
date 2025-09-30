import phone from '@/assets/oldPhone.json'
import glass from '@/assets/glass.json'
import browser from '@/assets/browserChart.json'

import hammer from '@/assets/hammer.json'
import ring from '@/assets/ring.json'
import cards from '@/assets/cards.json'

import chip from '@/assets/chip.json'
import brain from '@/assets/brain.json'
import circles from '@/assets/circles.json'

import naveen from '@/assets/naveen.jpeg'
import pranjal from '@/assets/pranjal.jpg'
import baileyLogo from '@/assets/bailey.png'
import accendLogo from '@/assets/accend.png'

import { StaticImageData } from 'next/image'

export type MenuItem = {
    label: string
    target?: string
    href?: string
    icon?: string
}

// External link icon (up-right-from-square style)
const externalLinkIcon = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2.5H7.5V7.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 2.5L2.5 7.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

export const menuConfig: MenuItem[] = [
    { label: 'The Challenge', target: 'challenge' },
    { label: 'The Fix', target: 'fix' },
    { label: 'How it works', target: 'online' },
    { label: 'Benefits', target: 'benefits' },
    { label: 'Testimonials', target: 'testimonial' },
    { label: 'Plans', target: 'plans' },
    { label: 'Manifesto', href: 'https://google.com', icon: externalLinkIcon },
]

export const challengeConfig = [
    {
        index: 'CH-01',
        icon: phone,
        title: 'One Big Game of Telephone',
        description:
            'You shouldn’t need four different people to service your ticket. <br/><br/>But due to a broken system that equates team size with capability, your simple request to edit a PDF template leads to a big game of telephone with a sales rep, an engagement manager, a functional consultant, and finally a technical consultant.',
    },
    {
        index: 'CH-02',
        icon: glass,
        title: 'Perpetual Discovery',
        description:
            '"What kind of business are you? What’s important to you? Order-to-cash, procure-to-pay—how do you go about it?" <br/><br/>You’ve answered these questions hundreds of times, and yet every consulting firm you onboard has to ask them again. And when that firm leaves your team? All that training leaves with them.',
    },
    {
        index: 'CH-03',
        icon: browser,
        title: 'What Developer Experience?',
        description:
            'In NetSuite, there is no local environment, no version control, and no testing framework. Without modern infrastructure, existing consultants move slowly and are prone to making errors.',
    },
]

export const fixConfig = [
    {
        index: 'CH-01',
        title: 'Smash the Bureaucracy',
        image: hammer,
        description:
            'Big firms love week long discovery sessions, multi page SOWs, and a bureaucracy of consultants. You should be growing your business, not wasting time on their process. <br/><br/>Cadbury is your always available, hyper aware AI powered NetSuite consultant. You issue a ticket, and it gets to work—without all the process.'
    },
    {
        index: 'CH-02',
        title: 'Hyper Accurate',
        image: ring,
        description:
            'Cadbury builds a dense understanding of the inner workings of your NetSuite instance by scanning active scripts, workflows, and integrations. Combined with its own proprietary trained data—sourced from hundreds of expert NetSuite consultants—Cadbury moves faster and more accurately than existing consultants.',
    },
    {
        index: 'CH-03',
        title: 'A Modern DX',
        image: cards,
        description:
            'Modern development tooling for NetSuite development doesn\'t exist—so we created it.<br/><br/>Cadbury leverages it in writing, deploying, and testing all of its work. A modern DX leads to fewer bugs, quicker feedback cycles, and a faster moving business.',
    },
]

export const benefitsConfig = [
    {
        index: 'BS-01',
        icon: chip,
        tag: 'Swift',
        title: 'Speed',
        description:
            'Cadbury takes tasks that would take an existing consultant weeks to finish—and leverages AI to complete them in minutes. You deserve to be growing your business rapidly, and your NetSuite tooling should match that.'
    },
    {
        index: 'BS-02',
        icon: brain,
        tag: 'Precise',
        title: 'Accuracy',
        description:
            'Trained on proprietary knowledge that we’ve sourced from hundreds of expert NetSuite consultants, Cadbury is more accurate & complete than existing solutions like ChatGPT and SuiteAnswers. Not only does it form an accurate plan of action, it can go ahead and execute them in your NetSuite instance.',
    },
    {
        index: 'BS-03',
        icon: circles,
        tag: 'Endless',
        title: 'The Long Tail',
        description:
            'NetSuite is a deep product that spans many modules and add-ons. Day by day, we are mapping these corners so that Cadbury becomes the AI powered NetSuite consultant for everyone.',
    },
]

export const plansConfig = [
    {
        className: '',
        title: 'Self Serve',
        monthly: 750,
        description:
            'Crafted for medium sized businesses who need an on-demand NetSuite admin.',
        publishing: [
            'Health checks',
            'Data migration',
            'PDF template editor',
        ],
        hosting: [
            'More coming soon...',
            'More coming soon...',
            'More coming soon...'
        ],
    },
    {
        className: '',
        title: 'White Glove',
        monthly: -1,
        description:
            'Tailored for larger enterprises who need a human touch. Includes everything in Self Serve, plus...',
        publishing: [
            'SuiteFlow + SuiteScript generation',
            'CadburyGPT (custom LLM trained on NetSuite)',
            'Automated integrations',
        ],
        hosting: [
            'Quarter end close',
            'Revenue reconciliation',
            'Compliance audits'
        ],
    },
]

type TestimonialItem = {
    logo: string | StaticImageData
    feedback: string
    personImage: string | StaticImageData
    personName: string
    position: string
}

export const testimonialsConfig: TestimonialItem[] = [
    {
        logo: baileyLogo,
        feedback:
            "As a lean manufacturing organization, we are not in the business of managing a fleet of consultants. With Cadbury, we were able to leverage NetSuite immediately, accelerating our adoption curve while keeping focus on core operations. Instead of viewing NetSuite as a cost center, we have been able to realize its value from day 1.",
        personImage:
            naveen,
        personName: 'Naveen Vinta',
        position: 'CEO, Bailey Cranes',
    },
    {
        logo: accendLogo,
        feedback:
            'Cadbury was a delight to work with. We value speed both in our own work and with who we partner with. Cadbury\'s AI tech meant dealing with less people, doing less manual work, and an on-time delivery for us.',
        personImage:
            pranjal,
        personName: 'Pranjal Daga',
        position: 'CEO, Accend',
    },
]
