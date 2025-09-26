import phone from '@/assets/oldPhone.json'
import glass from '@/assets/glass.json'
import browser from '@/assets/browserChart.json'

import hammer from '@/assets/hammer.json'
import ring from '@/assets/ring.json'
import cards from '@/assets/cards.json'

import chip from '@/assets/chip.json'
import brain from '@/assets/brain.json'
import circles from '@/assets/circles.json'

export const challengeConfig = [
    {
        index: 'CH-01',
        icon: phone,
        title: 'One Big Game of Telephone',
        description:
            'In 2025, you shouldn’t need four different people to service your request. Yet due to a broken system, your simple request to edit a PDF template leads to one big game of telephone with a sales rep, an engagement manager, a functional consultant, and finally a technical consultant.',
    },
    {
        index: 'CH-02',
        icon: glass,
        title: 'Perpetual Discovery',
        description:
            'What kind of business are you? What’s important to you? Order-to-cash, procure-to-pay - how do you go about it? You’ve answered these questions hundreds of times, and yet every consulting firm you onboard has to ask again. And when that firm leaves your team? All that training leaves with them.',
    },
    {
        index: 'CH-03',
        icon: browser,
        title: 'Developer Experience?\nWhat Developer Experience?',
        description:
            'In NetSuite, there is no local environment, no version control, and no testing framework. Without this infrastructure, existing consultants move slowly and are prone to making errors.',
    },
]

export const fixConfig = [
    {
        index: 'CH-01',
        title: 'Down with the Bureaucracy',
        image: hammer,
        description:
            'Stop depending on large consulting firms that have to fit your needs into their bureaucracy. Cadbury is your always available AI powered NetSuite Consultant, ready to act when your business needs it—not the other way around.',
    },
    {
        index: 'CH-02',
        title: 'Context Aware',
        image: ring,
        description:
            'After installation, Cadbury automatically builds a dense understanding of the inner workings of your NetSuite instance by scanning scripts, workflows, and integrations. Combined with its own proprietary trained data—sourced from hundreds of expert NetSuite consultants—Cadbury moves faster and more accurately than the typical consultant.',
    },
    {
        index: 'CH-03',
        title: 'A Modern DX',
        image: cards,
        description:
            'Stop depending on large consulting firms that have to fit your needs into their bureaucracy. Cadbury is your always available AI powered NetSuite Consultant, ready to act when your business needs it—not the other way around.',
    },
]

export const benefitsConfig = [
    {
        index: 'BS-01',
        icon: chip,
        tag: 'Swift',
        title: 'Speed',
        description:
            'Cadbury takes tasks that would take a human consultant days or weeks to finish—and leverages AI to complete them in minutes. We believe your business deserves to move fast, and shouldn’t be slowed down by inefficient consulting firms.',
    },
    {
        index: 'BS-02',
        icon: brain,
        tag: 'Precise',
        title: 'Accuracy',
        description:
            'Trained on proprietary knowledge that we’ve sourced from hundreds of expert NetSuite consultants, Cadbury is more accurate & complete than existing solutions like ChatGPT and SuiteAnswers.',
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
        monthly: 49,
        description:
            'You deserve to be growing your business, not managing another consultant.',
        publishing: [
            'Integration with the Webflow Enterprise platform',
            'Integrations with CRMs and marketing systems of record',
            'Integrations with ABM tools',
        ],
        hosting: [
            '50 form submits (lifetime)',
            '1 GB bandwidth',
            '20 CMS collections',
        ],
    },
    {
        className: '',
        title: 'White Glove',
        monthly: 135,
        description:
            'Enterprise-grade performance, security, and control — designed for teams who demand more.',
        publishing: [
            'Advanced targeting with Enhanced Match',
            'Integrations with CRMs and marketing systems of record',
            'Integrations with ABM tools',
        ],
        hosting: [
            'Unlimited form submits',
            '50 GB bandwidth',
            '10 legacy Editor users',
        ],
    },
]
