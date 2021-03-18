import { urlObjectKeys } from 'next/dist/next-server/lib/utils'
import React from 'react'
import './card.scss'

export const Card = ({image, text}) => {
    const image1 = "https://picsum.photos/id/237/400/300"
    const image2 = "https://picsum.photos/id/238/400/300"
    text = "enean iaculis ut mauris quis efficitur. Vestibulum ante ipsum primis i"
    return (
        <div className="project_card" >
            <img className="back_image" src={image1}/>
            <div className="front_image_frame">
                <img className="front_image" src={image2}/>
            </div>
        </div>
    )
}
