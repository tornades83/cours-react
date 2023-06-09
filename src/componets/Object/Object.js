import React, {useState} from 'react'
import "./Object.css"
import {Link} from 'react-router-dom'
const Object = () => {
const [State, setState] = useState({
  id: 1,
  metier: "Fullstack Dev",
  niveaux: "Training"

});
const handleTraining = () => {
  setState((prevState)=> ({...prevState, niveaux: "Training"}))  
 }
const handleJunior = () => {
 setState((prevState)=> ({...prevState, niveaux: "Junior"}))  
}
const handleIntermediate = () => {
  setState((prevState)=> ({...prevState, niveaux: "Intermediate"}))  
 }
 const handleSenior = () => {
  setState((prevState)=> ({...prevState, niveaux: "Senior"}))  
 }

  return (
    <div>
      <h1>currently I am  {State.metier}  {" "}  {State.niveaux}. </h1>

      <button className="buttonRoss" onClick={() => handleTraining() } >now I am </button>
      <button className="buttonRoss" onClick={() => handleJunior() } >In three months I will be </button>
      <button className="buttonRoss" onClick={() => handleIntermediate() } >in a year i will be </button>
      <button className="buttonRoss" onClick={() => handleSenior() } >in 5 years i will be </button>
      <Link to="/">
          <button className="btn btn-danger">retour</button></Link>
    </div>
  )
}

export default Object