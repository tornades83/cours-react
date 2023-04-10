import React, {useState} from 'react'
import "./Compteur.css"
const Compteur = () => {
  
  const [Compteur, setCompteur] = useState(0);
  
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
    <div class="com">
      <div> {Compteur}</div>
      <button class="button" onClick={()=> increment() }>Increment +</button>
      <button class="button" onClick={()=> decrement() }>Decrement -</button>
      <button class="button" onClick={()=> reset() }>Reset</button>
    </div>
  )
}

export default Compteur