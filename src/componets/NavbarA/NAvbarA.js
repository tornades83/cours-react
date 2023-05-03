import React, {useEffect, useState } from 'react'

import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "./navbarA.css"

const NAvbarA = () => {
  return (
    <>
         <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/">Accueil </Nav.Link>
            {/* <Nav.Link href="/cv">Mon C.V.</Nav.Link> */}
            <Nav.Link href="/Blog">Blog</Nav.Link>
            <Nav.Link href="/Cv">Cv</Nav.Link>
            {/* <Nav.Link href="/ProjectReact">Project</Nav.Link> */}
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to={"/Compteur"} >Compteur</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/Toogle"} >Toogle</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/Object"} >Object</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/List"} >List</NavDropdown.Item>
            
              Another action
              <NavDropdown.Item as={Link} to={"/Countinterval"} >Countinterval</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/MouseMove"} >mouseMove</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={"/UseEffectCompa"} >useEffectCompa</NavDropdown.Item>
                         
         </NavDropdown >
        </Nav > 
      </Navbar.Collapse >
    </Container >
  </Navbar >
       </>
  )
}

export default NAvbarA