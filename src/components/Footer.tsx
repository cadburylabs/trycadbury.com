import React from 'react'
import { P } from './Typography/P'

export const Footer = () => {
    return (
        <footer className="mx-5 py-2.5 flex justify-between">
            <P>©2025 Cadbury.</P>
            <P className="uppercase">All rights reserved.</P>
            <P>{`Linkedin / X(Twitter)`}</P>
            <P className="uppercase">Privacy policy</P>
            <P className="uppercase">Back to top</P>
        </footer>
    )
}
