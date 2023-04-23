import React, {useState} from 'react'
import "./Toogle.css"
import {Link} from 'react-router-dom'
const Toogle = () => {

    const [Toogle, setToogle] = useState(false);

    const ActiveToogle = () => {
        setToogle(!Toogle)
    }


  return (
    <div className="too" >
        <button className="button" onClick={()=> ActiveToogle() }>Click My</button>
        { Toogle &&
            <div>welcome to my page </div>
        }
<Link to="/">
          <button className="btn btn-danger">retour</button></Link>
     </div>
  )
}

export default Toogle