import React from 'react'
import NavbarHome from "../../componets/NavbarHome/NavbarHome";
import Welcome from '../../componets/Welcome/Welcome';
import Footer from '../../componets/Footer/Footer';

import "./home.css"
const home = () => {
  
  return (
    <>
    <div className="home">
   <NavbarHome />
   <Welcome />
    <Footer />
   </div>
    </>
  )
}

export default home

	
