import React, { useEffect } from 'react'
import Page from '../page/page';
import Section from '../section/section';
import About from './about';
import Techstack from './techstack';
import './about.scss';

const AboutPage = () => {
    const handleScroll = () => {
        console.log("SCROLL");
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    return (
        <Page>
            <Section wrapper={false} backgroundColor="#0f0e17">
                <About />
            </Section>
            <Section backgroundColor="#0f0e17">
                <Techstack />
            </Section>
        </Page>
    )
}

export default AboutPage
