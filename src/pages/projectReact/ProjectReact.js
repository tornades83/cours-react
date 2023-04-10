import React, {useState} from 'react'
import Footer from '../../componets/Footer/Footer'
import Header from '../../componets/Header/Header'
import Navbar from '../../componets/Navbar/Navbar'
import Toogle from '../../componets/Toogle/Toogle'
import Compteur from '../../componets/Compteur/Compteur'
import List from '../../componets/List/List'
import Object from '../../componets/Object/Object'

const ProjectReact = (props) => {

  return (
    <>
    
        <Header name={props.name} />
        <Navbar />
            <Toogle />
            <List />
            <Compteur />
            <Object />
        <Footer />
    </>
  )
}

export default ProjectReact