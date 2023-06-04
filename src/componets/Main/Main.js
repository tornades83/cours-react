import React, {useEffect, useState} from 'react'
import axios from 'axios'
import imgyonathan from "../../assets/profil-yonathan.png"
import imgdesign from "../../assets/design.png"
import imgintegration from "../../assets/integration.png"
import imgdev from "../../assets/dev.png"
import imgseo from "../../assets/seo.png"
import "./Main.css"
// video >>>37m.27s
const CardPointFort = (props) =>  {
    return(
    <>
    <figure>
                    <h4>{props.tilte}</h4>
                    <img src={props.img}  alt={props.alt}/>
                    <figcaption>{props.figcaption}</figcaption>
                </figure>
    </>
    // title={props.title}
    )
}


const Main = () => {
const [contact, setContact] = useState();


   const [fName, setFName] = useState("");
   const [lName, setLName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
  
   const handlContact = () => {
    setContact((getContact)=> ({...getContact, onclick }))  
   }
   axios.get('https://crud-webscoll-98c465.appdrag.site/api/getContact', {
     params: {
       "fName" : fName,
       "lName" : lName,
       "email" : email,
       "message" : message
     }
   }).then(function(response){
     console.log(response.data);
   });
  return (
    <main>
    <div className="conteneur flex-main">
        <section id="presentation">
            <h2>
                presentation
            </h2>
            <div className="profil-flex">
                <img src={imgyonathan} tilte="photo de yonathan roos" alt="yonathan roos"/>
                <p>Are you looking for a competent and efficient person to manage your development projects?<br/>currently I am Fullstack Dev Training.
                </p>
                
            </div>
            <div className="mise-en-avant">


            <CardPointFort tilte ='design' img ={imgdesign} alt= {'design'} figcaption={"Seduce by offering your visitors navigation and ergonomics adapted to their habits and their equipment."}/>
            <CardPointFort tilte ='Front-end-development' img ={imgintegration} alt= {'Front-end-development'} figcaption={"Integration responsive design compatible with all browsers and respectful of w3c."}/>
            <CardPointFort tilte ='back-end-development' img ={imgdev} alt= {'back-end-development'} figcaption={"Perfectly functional and secure development."}/>
            <CardPointFort tilte ='seo' img ={imgseo} alt= {'seo'} figcaption={"Maximum traffic for your website."}/>
            </div>
        </section>
        <aside>
            <div className="encart">
                <h3>Qui suis-je ?</h3>
                <p>I'm a junior fullstack developer </p>
            </div>
            <div className="encart">
                <h3>Experience</h3>
                <ul>
                
                    <li>html, css, javaScript</li><br/>
                    <li>jquery. rest & ajax</li><br/>
                    <li>react, node.js, </li><br/>{/* mongoDB */}
                    {/* <li>my SQL, python, php</li><br/> */}

                </ul>
            </div>
            <div className="encart form-group">
                <h3 className='h3'>Contact</h3>
                    
                    <label className='mx-3' htmlFor="prenom">Prenom</label>
                    <input className='form-control'  type="text" id="prenom" name="prenom"/>

                    <label className='mx-3' htmlFor="nom">Nom</label>
                    <input className='form-control'  type="text" id="nom" name="nom"/>

                    <label className='mx-3' htmlFor="email">Email</label>
                    <input className='form-control' placeholder="email@email.com" type="text" id="email" name="e-mail"/>

                    <label className='mx-3' htmlFor="message">Message</label>
                    <textarea className='form-control' placeholder="Ecrire votre message" id="message" name="message"></textarea>
                    <input className='form-control btn btn-success' type="submit" onClick={contact} />
                
            </div>
        </aside>
    </div>
</main>
  )
}

export default Main

