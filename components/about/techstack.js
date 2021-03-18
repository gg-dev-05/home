import React, { useEffect } from 'react'
import './techstack.scss';
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { BsBootstrapFill } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { IoLogoNodejs } from 'react-icons/io'
import { SiFlask } from 'react-icons/si'
import { SiHeroku } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { FaNpm } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import Logo from './logo';
const Techstack = () => {
    return (
        <div className="techstack">
            <div className="heading"><b>STACK</b></div>
            <article className="body">Following are the technologies I have worked with</article>
            <div className="container">
                <div className="row-stack">
                    <div className="title">FRONT END </div>
                    <div className="logos">
                        <Logo component={<AiFillHtml5 />} name="HTML5" />
                        <Logo component={<DiCss3 />} name="CSS3" />
                        <Logo component={<SiJavascript />} name="JS" />
                        <Logo component={<FaNpm />} name="NPM" />
                        <Logo component={<FaSass />} name="SASS" />
                        <Logo component={<BsBootstrapFill />} name="BOOTSTRAP" />
                        <Logo component={<FaReact />} name="REACT" />
                    </div>
                </div>

                <div className="row-stack">
                    <div className="title">BACKEND END </div>
                    <div className="logos">
                        <Logo component={<IoLogoNodejs />} name="NODE JS" />
                        <Logo component={<SiFlask />} name="FLASK" />
                        <Logo component={<SiHeroku />} name="HEROKU" />
                    </div>
                </div>

                <div className="row-stack">
                    <div className="title">DATABASES </div>
                    <div className="logos">
                        <Logo component={<GrMysql />} name="MYSQL" />
                        <Logo component={<SiMongodb />} name="MONGODB" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techstack
