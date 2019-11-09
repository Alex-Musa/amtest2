import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import '../utils/styles/Navbar.css'

import bigP from "./images/bigP.jpg"
// import Lstyle from "./styles/logo.css"


// import Lstyle from "./styles/logo.css"
function Navbarr() {
    return (


        <Navbar bg="white" variant="dark" className="Navbar">
            <div id="logo">
                <Navbar.Brand href="/login"><img src={bigP} alt="..." width={50} height={50} />

                </Navbar.Brand>
            </div>

            <Nav className="mr-auto">
                <Nav.Link href="#features">The Studio</Nav.Link>
                <Nav.Link >Bookings</Nav.Link>
                <NavDropdown title="The Team" id="collasible-nav-dropdown">


                    <NavDropdown.Item href="/stylist">Isaiah</NavDropdown.Item>

                </NavDropdown>

            </Nav>

        </Navbar>


    )
}

export default Navbarr