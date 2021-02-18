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
import { SiMongodb } from 'react-icons/si'
const Techstack = () => {
    return (
        <div className="techstack">
            <div className="heading"><b>STACK</b></div>
            <article className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, reprehenderit sed voluptates culpa minima iste velit adipisci illo libero odio, d</article>
            <div className="container">
                <div className="row">
                    <div className="title">FRONT END </div>
                    <div className="logos">
                        <AiFillHtml5 />
                        <DiCss3 />
                        <SiJavascript />
                        <FaSass />
                        <BsBootstrapFill />
                        <FaReact />
                    </div>
                </div>

                <div className="row">
                    <div className="title">BACKEND END </div>
                    <div className="logos">
                        <IoLogoNodejs />
                        <SiFlask />
                        <SiHeroku />
                    </div>
                </div>

                <div className="row">
                    <div className="title">DATABASES </div>
                    <div className="logos">
                        <GrMysql />
                        <SiMongodb />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techstack
