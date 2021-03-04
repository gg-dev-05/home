import React from 'react'
import Section from '../../section/section';
import Page from '../../page/page';
import './test1.scss';
import { AwesomeButton } from 'react-awesome-button';
import { FaExternalLinkAlt } from 'react-icons/fa'
const Test1 = () => {
    return (
        <Page >
            <Section backgroundColor="#0f0e17">
                <div className="test1">
                    <div className="heading"><b>CLUBS IITI</b></div>
                    <article className="small-desc">A club management system build for <strong>IITI</strong> community.</article>
                    <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem incidunt maiores, quaerat adipisci quis quibusdam corrupti ipsam dolorum libero molestiae corporis culpa, modi maxime obcaecati. Illo pariatur natus quaerat nesciunt?</h2>
                    <AwesomeButton
                        size="medium"
                        onPress={() => {
                            location.href = "https://clubs-iiti.herokuapp.com/"
                        }}
                    >
                        <FaExternalLinkAlt /> <span style={{ marginLeft: '5px' }}>VISIT</span>
                    </AwesomeButton>
                </div>
            </Section>

        </Page>

    )
}

export default Test1
