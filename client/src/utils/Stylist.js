
import React from 'react'
import Navbar from './Navbar'
import Media from 'react-bootstrap/Media'
import '../utils/styles/Navbar.css'
import barber from "../utils/images/Isaiah.jpg"
import Carousel from 'react-bootstrap/Carousel';
import family from "./images/bell-family.jpg"
import crew from "./images/prestige-crew.jpg"
import crew2 from "./images/crew2.jpg"
import "../utils/styles/Carousel.css"

function stylist() {
    return (
        <div>
            <Navbar />
            <Media>
                <img
                    width={400}
                    height={300}
                    className="mr-3"
                    src={barber}
                    alt="Generic placeholder"
                />
                <Media.Body>
                    <h2>Isaiah Bell</h2>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
    </p>
                </Media.Body>

            </Media>
            <div id="Bellcar">
                <Carousel>

                    <img src={family} alt="..." id="Bcut" height={300} width={100} />
                    <img src={crew} alt="..." id="Bcut" height={300} width={495} />
                    <img src={crew2} alt="..." id="Bcut" height={300} width={495} />


                </Carousel>
            </div>
        </div>

    )
}

export default stylist