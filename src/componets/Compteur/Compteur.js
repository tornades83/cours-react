import React, {useState, useEffect} from 'react'
import "./Compteur.css"
import {Link} from 'react-router-dom';
const Compteur = () => {
  
  const [Compteur, setCompteur] = useState(0);
  
 useEffect(()=>{
    document.title = `le compteur est a ${Compteur}`
  }, [Compteur]);
  const increment =() => {
   setCompteur(Compteur +1) 
  }
  const decrement =() => {
    setCompteur(Compteur -1) 
   }
   const reset =() => {
    setCompteur(0) 
   }

  return (
    <div className="com">
      <div> {Compteur}</div>
      <button className="button" variant="success"  onClick={()=> increment() }>Increment +</button>
      <button className="button" variant="warning"  onClick={()=> decrement() }>Decrement -</button>
      <button className="button" variant="danger"  onClick={()=> reset() }>Reset</button>
      <Link to="/">
          <button className="btn btn-danger">retour</button></Link>
    </div>
  )
}

export default Compteur