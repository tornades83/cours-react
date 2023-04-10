import React, {useState} from 'react'
import "./Toogle.css"
const Toogle = () => {

    const [Toogle, setToogle] = useState(false);

    const ActiveToogle = () => {
        setToogle(!Toogle)
    }


  return (
    <div class="too" >
        <button class="button" onClick={()=> ActiveToogle() }>Click My</button>
        { Toogle &&
            <div>welcome to my page </div>
        }

     </div>
  )
}

export default Toogle