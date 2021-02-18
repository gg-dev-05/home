import React from 'react'
import Mouse from '../mouse/mouse'
import './about.scss';

const About = () => {
    return (
        <div className="about">
            <div className="heading"><b>ABOUT</b></div>
            <article className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, reprehenderit sed voluptates culpa minima iste velit adipisci illo libero odio, d</article>
            <div className="mouse">
                <Mouse />
            </div>
        </div>
    )
}

export default About
