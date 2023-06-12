import React from 'react'
import imgprogramming from "../../assets/programming.png"
import "./Welcome.css"
import { useSelector, useDispatch } from "react-redux"
import { getDarkMode } from "../../redux/slices/darkmode.slice"
const Welcome = () => {

  const GETDARKMODE = useSelector(getDarkMode)



  return (
    <div>
        <div className="welcome" style={{ backgroundColor :  GETDARKMODE === true ? "rgb(151, 103, 15)": "white"   }} >
		<h1 style={{ color: GETDARKMODE === false ? "white" : "black" }}  >Bienvenue sur ma page d'entrée</h1>
		<img src={imgprogramming} tilte="photo prog" alt="" />
	</div>
    </div>
  )
}

export default Welcome