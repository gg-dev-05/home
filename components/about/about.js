import React from 'react'
import Mouse from '../mouse/mouse'
import './about.scss';

const About = () => {
    return (
        <div className="about">
            <div className="heading"><b>ABOUT</b></div>
            <article className="body">Scroll down to see the technologies I am familiar with</article>
            <div className="mouse">
                <Mouse />
            </div>
        </div>
    )
}

export default About
