import React, {useState} from 'react'
// import Compteur from "../Compteur/Compteur"
// import Toogle from "../Toogle/Toogle"
import "./Header.css"
import cvyonathanroos23 from "../../assets/cvyonathanroos23.docx"
const Header = (props) => {
  // const [changeColor, setchangeColor] = useState("red");
  return (
    <div className="conteneur">
    <div className="normal-flex">
        <div className="haut-gauche">
            <h1>{props.name}</h1>
            <strong><span>C</span>ommunication</strong>/
            <strong><span>M</span>arketing</strong>/
            <strong><span>D</span>igital</strong>
            {/* <Compteur /> */}
        </div>
        <div className="haut-droite">
        <a href= {cvyonathanroos23} >Download my C.V.</a>
             {/* <Toogle />   */}
          
            
        </div>
    </div>
</div>
  )
}

export default Header
// <h1 className={`text-${changeColor}`} onClick={() => setchangeColor("blue")}>{props.name}</h1>