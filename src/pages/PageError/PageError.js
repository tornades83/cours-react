import React from 'react'
import {Button} from "react-bootstrap"
import imgAttention  from "../../assets/attention.png"
import './PageError.css'
import {Link} from 'react-router-dom';

const PageError = () => {
  return (
    <div className="catar">
    <div className='tromp'>you got lost on the way? <br/> turn back your way. <br/>  click on the button below!
    <img src={imgAttention} alt="asdfasdfddd" />
    <p>error 404 </p>
    <Link to="/Home">
    <Button className="btn.btn.danger" >click Me!</Button>
     </Link>
    </div>
    </div>
  
  )
}

export default PageError