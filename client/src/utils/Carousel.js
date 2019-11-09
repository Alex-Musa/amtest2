import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import "../utils/styles/Carousel.css"

import logo from "./images/prestige2-2.jpg"
import family from "./images/bell-family.jpg"
import crew from "./images/prestige-crew.jpg"
import crew2 from "./images/crew2.jpg"






function carousel() {

    return (
        <div id="carousel">
            <img src={logo} alt="..." height={50} width={80} id="prestige" />
            <Carousel>
                <img src={family} alt="..." id="image" />
                <img src={crew} alt="..." id="image" />
                <img src={crew2} alt="..." id="image" />
            </Carousel>
        </div >
    )
}


export default carousel
