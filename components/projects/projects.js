import React, { useEffect } from 'react'
import './projects.scss';
import { Link } from 'react-awesome-slider/dist/navigation'
import {Card} from './project_card/card'
import Page from '../page/page';
import Section from '../section/section';

const Projects = () => {
    useEffect(() => {
        document.title = "GG | Projects"
    }, []);
    return (
        <Page>
            <Section backgroundColor="#0f0e17">
            <div className="projects">
                <div className="heading"><b>MY PROJECTS</b></div>
                <article className="body">Here are some of my projects</article>
                <div className="projects_list">
                    <Link href="/projects/test1"><Card/></Link>
                    <Link href="/projects/test2"><Card/></Link>
                    <Link href="/projects/test1"><Card/></Link>
                    <Link href="/projects/test1"><Card/></Link>
                    <Link href="/projects/test1"><Card/></Link>
                </div>
            </div>
            </Section>
        </Page>
        
    )
}

export default Projects
