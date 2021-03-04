import React, { useEffect } from 'react'
import './home.scss';

const Projects = () => {
    useEffect(() => {
        document.title = "GG | Home"
    }, []);
    return (
        <div className="home">
            <div className="heading"><b>HOME</b></div>
            <article className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, reprehenderit sed voluptates culpa minima iste velit adipisci illo libero odio, d</article>
        </div>
    )
}

export default Projects
