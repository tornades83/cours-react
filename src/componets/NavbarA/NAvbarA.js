import React, {useEffect, useState } from 'react'
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import {NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'


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
            <Nav.Link href="/contact">Contact</Nav.Link>
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
             ex 30/04/2023
             <NavDropdown.Item as={Link} to={"/StyleGeneral"} >StyleGeneral</NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/StyleSepare"} >StyleSepare</NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/StyleBackTick"} >StyleBackTick</NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/StyleFonction"} >StyleFonction</NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/ApiGeneral"} >ApiGeneral</NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/AxiosGet"} >AxiosGet</NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/AxiosPost"} >AxiosPost</NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/GetArticle "} >GetArticle </NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/GetArticleBylD"} >GetArticleBylD</NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/AddArticle"} >AddArticle</NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/DeleteArticle"} >DeleteArticle</NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/RouterGeneral"} >RouterGeneral</NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/RouteDyn "} >RouteDyn </NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/LinkExplication"} >LinkExplication</NavDropdown.Item>
             <NavDropdown.Item as={Link} to={"/UseLocation"} >UseLocation</NavDropdown.Item>
         </NavDropdown >
        </Nav > 
      </Navbar.Collapse >
    </Container >
  </Navbar >
       </>
  )
}

export default NAvbarA