import React, { useEffect } from 'react'
import './projects.scss';
import { Link } from 'react-awesome-slider/dist/navigation'

const Projects = () => {
    useEffect(() => {
        document.title = "GG | Projects"
    }, []);
    return (
        <div className="projects">
            <div className="heading"><b>MY PROJECTS</b></div>
            <article className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, reprehenderit sed voluptates culpa minima iste velit adipisci illo libero odio, d</article>
            <Link href="/projects/test1">
                HOME
          </Link>
        </div>
    )
}

export default Projects
