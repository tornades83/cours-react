import React from 'react'
import {Button} from "react-bootstrap"
import imgyonathan from "../../assets/profil-yonathan.png";
import './PageError.css'
import {Link} from 'react-router-dom';

const PageError = () => {
  return (
    <div className='tromp'>vous vous ete perdu en chemin <br/> rebrouse ton chemin <br/>  click sur la fleche retour en arriere 
    <img src={imgyonathan} alt="asdfasdfddd" />
    <p>error 404 </p>
    <Link to="/Cv">
    <Button className="btn.btn.warning" >click Me!</Button>
     </Link>
    </div>
  
  )
}

export default PageError