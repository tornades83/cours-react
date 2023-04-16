import React, {useState} from 'react';
import Navbar from '../../componets/Navbar/Navbar';
import Header from '../../componets/Header/Header';
import Main from '../../componets/Main/Main';
import Section from '../../componets/Section/Section';
import Footer from '../../componets/Footer/Footer';

import '../../App.css';

const Cv = (props) => {
  
  
  return (
 
// const [name, setName] = useState("yonathan roos");

    <div className="app">
    <header>
<Header name={props.name}  />
<Navbar />
	</header>
<Section/>
<Main HandleName={props.HandleName}/>
<Footer name={props.name}/>
  </div>
    
  )
}

export default Cv