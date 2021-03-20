import React from 'react'
import './card.scss'

export const Card = ({image, text}) => {
    const image1 = "https://res.cloudinary.com/dkvh16kiu/image/upload/w_400,h_300,c_scale/v1616093823/image1_kwjm2u.webp"
    const image2 = "https://res.cloudinary.com/dkvh16kiu/image/upload/w_400,h_300,c_scale/v1616093824/image2_zwwfxs.webp"
    text = "enean iacui"
    return (
        <div className="project_card_container">
        <div className="project_card_text">
            {text}
        </div>
        <div className="project_card" >
            <img className="back_image" src={image1}/>
            <div className="front_image_frame">
                <img className="front_image" src={image2}/>
            </div>
        </div>
        </div>
    )
}
