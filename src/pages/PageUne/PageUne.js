import React from 'react'
import { Link } from 'react-router-dom'
const PageUne = () => {
  return (
    <>
        <h1>ma page 1 !!</h1>
        <Link to="/Cv">
          <button className="btn btn-danger">retour</button></Link>
    
    </>
  )
}

export default PageUne