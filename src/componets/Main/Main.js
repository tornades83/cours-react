import React from 'react'
import imgyonathan from "../../assets/profil-yonathan.png"
import imgdesign from "../../assets/design.png"
import imgintegration from "../../assets/integration.png"
import imgdev from "../../assets/dev.png"
import imgseo from "../../assets/seo.png"
import List from '../List/List'
import Object from '../Object/Object'
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


const Main = ({HandleName}) => {
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


            <CardPointFort tilte ='design' img ={imgdesign} alt= {'design'} figcaption={""}/>
            <CardPointFort tilte ='Front-end-development' img ={imgintegration} alt= {'Front-end-development'} figcaption={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
            <CardPointFort tilte ='back-end-development' img ={imgdev} alt= {'back-end-development'} figcaption={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
            <CardPointFort tilte ='seo' img ={imgseo} alt= {'seo'} figcaption={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
            </div>
        </section>
        <aside>
            <div className="encart">
                <h3>Qui suis-je ?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
            </div>
            <div className="encart">
                <h3>Experience</h3>
                <ul>
                <List />
                    {/* <il>Experience 1</il><br/>
                    <il>Experience 2</il><br/>
                    <il>Experience 3</il><br/> */}
                </ul>
            </div>
            <div className="encart form-group">
                <h3 className='h3'>Contact</h3>
                    
                    <label className='mx-3' htmlFor="prenom">Prenom</label>
                    <input className='form-control' placeholder="Prenom" type="text" id="prenom" name="prenom"/>

                    <label className='mx-3' htmlFor="nom">Nom</label>
                    <input className='form-control' placeholder="Nom" type="text" id="nom" name="nom"/>

                    <label className='mx-3' htmlFor="email">Email</label>
                    <input className='form-control' placeholder="E-mail" type="text" id="email" name="e-mail"/>

                    <label className='mx-3' htmlFor="message">Message</label>
                    <textarea className='form-control' placeholder="Ecrire votre message" id="message" name="message"></textarea>
                    <input className='form-control' type="submit" onClick={()=> HandleName("test")}/>
                
            </div>
        </aside>
    </div>
</main>
  )
}

export default Main

