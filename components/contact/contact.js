import React, { useEffect } from 'react'
import './contact.scss';
import { AwesomeButton } from 'react-awesome-button'

const contact = () => {
    useEffect(() => {
        document.title = "GG | Contact"
    }, []);
    return (
        <div className="contact">
            <div className="heading"><b>CONTACT ME</b></div>
            <article className="body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, reprehenderit sed voluptates culpa minima iste velit adipisci illo libero odio, d</article>
            <AwesomeButton
                size="large"
                onPress={() => {
                    location.href = "https://drive.google.com/file/d/1n2q5Pe9g5XD98oaflmF1lyuuf_CK4TB-/view"
                }}
            >
                Goto the next page
            </AwesomeButton>
        </div>
    )
}

export default contact
