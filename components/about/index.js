import React, { useEffect } from 'react'
import Page from '../page/page';
import Section from '../section/section';
import About from './about';
import Techstack from './techstack';
import './about.scss';

const AboutPage = () => {

    useEffect(() => {
        document.title = "GG | About"
    }, []);
    return (
        <Page>
            <Section backgroundColor="#0f0e17">
                <Techstack />
            </Section>
        </Page>
    )
}

export default AboutPage
