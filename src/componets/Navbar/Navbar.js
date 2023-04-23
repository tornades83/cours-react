import React from 'react'
import   "./Navbar.css";
import {Link} from 'react-router-dom'
import {Dropdown} from "react-bootstrap"
const Navbar = () => {
//  const changeOnOver = () => {
//   const element = document.getElementsByClassName("flex-menu")[0]
//   element.style.border = "2px blue solid"
//  }
  return (
    <nav>
    <div class="conteneur">
        <div class="flex-menu" >
           <Link to="/">Accueil</Link>
           <Link to="/Portfolio">Portfolio</Link>
           <Link to="/cv">Mon C.V.</Link>
           <Link to="/Blog">Blog</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/ProjectReact">Project</Link>
           <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              UseEffect
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/useEffectCompa" >UseEffect</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Compteur" >Compteur</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
    </div>
</nav>
  )
}

export default Navbar
// <div class="flex-menu" onMouseOver={() => changeOnOver()} >