import React, {useState} from 'react'
import Footer from '../../componets/Footer/Footer'
import Header from '../../componets/Header/Header'
import Navbar from '../../componets/Navbar/Navbar'
import Toogle from '../../componets/Toogle/Toogle'
import Compteur from '../../componets/Compteur/Compteur'
import List from '../../componets/List/List'
import Object from '../../componets/Object/Object'
import './ProjectReact.css'
const ProjectReact = (props) => {

  return (
    <>
    
        <Header name={props.name} />
        <Navbar />
        <div id='caseproject' >
            <Toogle />
            <List />
            <Compteur />
            <Object />
            </div>
        <Footer />
    </>
  )
}

export default ProjectReact