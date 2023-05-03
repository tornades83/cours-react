import React, {useEffect, useState} from 'react'
import NavbarHome from "../../componets/NavbarHome/NavbarHome";
import Welcome from '../../componets/Welcome/Welcome';
import Footer from '../../componets/Footer/Footer';

import "./home.css"
const home = (props) => {
  
  return (
    <>
    <div className="home">
   <NavbarHome />
   <Welcome />
    <Footer name={props.name}/>
   </div>
    </>
  )
}

export default home

	
