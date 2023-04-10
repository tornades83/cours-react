import React from 'react'
// import Compteur from "../Compteur/Compteur"
// import Toogle from "../Toogle/Toogle"
import "./Header.css"
const Header = (props) => {
  return (
    <div class="conteneur">
    <div class="normal-flex">
        <div class="haut-gauche">
            <h1>{props.name}</h1>
            <strong><span>C</span>ommunication</strong>/
            <strong><span>M</span>arketing</strong>/
            <strong><span>D</span>igital</strong>
            {/* <Compteur /> */}
        </div>
        <div class="haut-droite">
        <a href="/">Download my C.V.</a>
             {/* <Toogle />   */}
          
            
        </div>
    </div>
</div>
  )
}

export default Header