import React from 'react'
import imgyonathan from "../../assets/profil-yonathan.png";
import './PageError.css'
const PageError = () => {
  return (
    <div className='tromp'>vous vous ete perdu en chemin <br/> rebrouse ton chemin <br/>  click sur la fleche retour en arriere 
    <img src={imgyonathan} />
    <p>error 404 </p>
    </div>

  )
}

export default PageError