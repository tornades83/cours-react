import React from 'react'
import "./Welcome.css"
import imgprogramming from "../../assets/programming.png"
const Welcome = () => {
  return (
    <div>
        <div className="welcome">
		<h1>Bienvenue sur ma page d'entrée</h1>
		<img src={imgprogramming} tilte="photo prog" alt="" />
	</div>
    </div>
  )
}

export default Welcome