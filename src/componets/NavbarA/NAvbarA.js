import React, {useEffect, useState } from 'react'

import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import { Dropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../Darkmode/darkModeActions';
import "./navbarA.css"

const NAvbarA = () => {
  const darkMode = useSelector(state => state?.darkMode?.darkMode);
const dispatch = useDispatch();

const handleToggleDarkMode = () => {
  dispatch(toggleDarkMode());
};
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
            <button onClick={handleToggleDarkMode}>
        {darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
      </button>
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
         <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              React
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/useEffectCompa">
                UseEffect
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/Compteur">
                Compteur
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/Countinterval">
                Countinterval
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/PageUne">
                PageUne
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={"/Countinterval"}>
                Countinterval
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={"/MouseMove"}>
                mouseMove
              </Dropdown.Item>
              <Dropdown.Item as={Link} to={"/UseEffectCompa"}>
                useEffectCompa
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/PageUne">
                PageUne
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav > 
      </Navbar.Collapse >
    </Container >
  </Navbar >
       </>
  )
}

export default NAvbarA