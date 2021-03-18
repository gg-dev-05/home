import React, { useEffect } from 'react'
import './home.scss';

const Projects = () => {
    useEffect(() => {
        document.title = "GG | Home"
    }, []);
    const openMERN = () => {
        window.location = "https://www.educative.io/edpresso/what-is-mern-stack"
    }
    
    return (
        <div className="home">
            <div className="heading"><b>HOME</b></div>
            <article className="body">Hello!!  Welcome to my portfolio. I am <div className="name">Garvit Galgat</div> learning more and more about the <span className="spacing__hover" onClick={() => {openMERN()}}>MERN</span> tech stack</article>
            <article className="small">
                <div>Swipe &gt; &gt;</div>
            </article>
        </div>
    )
}

export default Projects
