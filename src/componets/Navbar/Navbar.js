import React from 'react'
import   "./Navbar.css";
import { Link, link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
    <div class="conteneur">
        <div class="flex-menu">
           <Link to="/">Accueil</Link>
           <Link to="/cv">Mon C.V.</Link>
           <Link to="/Blog">Blog</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/ProjectReact">Project</Link>
        </div>
    </div>
</nav>
  )
}

export default Navbar