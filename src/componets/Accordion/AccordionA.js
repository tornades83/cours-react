import React, {useEffect, useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import  alberta from "../../assets/alberta.jpg";
import sunset from "../../assets/sunset.jpg";
import tree from "../../assets/tree.jpg";
import axios from "axios"
import i18n from '../../i18n/config'
import { Link } from 'react-router-dom';

const AccordionA = () => {
  const [data, setData] = useState();
  const [activeFooter, setActiveFooter] = useState(false);

  useEffect(() => {
    
    console.log("mon composant est montE")

    axios.get('https://crud-webscoll-98c465.appdrag.site/api/getAlArticle', {
      params: {
        "AD_PageNbr": "1",
        "AD_PageSize": "500"
      }
    }).then(function (response) {
      console.log(response.data.Table);
      setData(response.data.Table)
    });

  }, []);
const [language, setLanguage] = useState();
  useEffect(() => {
    const handleChangeLanguage = () => {
      // La langue a changé, faites quelque chose ici...
      console.log('La langue a changé ! Nouvelle langue :', i18n.language);
      setLanguage(i18n.language)
    };
    
    i18n.on('languageChanged', handleChangeLanguage);

    // Nettoyage : supprime l'écouteur d'événement lorsque le composant est démonté
    return () => {
      i18n.off('languageChanged', handleChangeLanguage);
    };
  }, [i18n]);
  const HandleFooter = () => {
    setActiveFooter(!activeFooter)
  }
  return (
    <>

        <Accordion bg="info" variant="info" defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
      <Accordion.Header>{ language === "fr" ? Accordion.title :Accordion.titleEn}</Accordion.Header>
        <Accordion.Body>
        <img src={Accordion.imageArticle} className='img-fluid' alt="" />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{ language === "fr" ? Accordion.title : Accordion.titleEn}</Accordion.Header>
        <Accordion.Body>
        { language === "fr" ? Accordion.articles.slice(0, 100) : Accordion.articleEn?.slice(0, 100)}...
{/* React.js est une bibliothèque JavaScript open source développée par Facebook. Elle permet de créer des interfaces utilisateur (UI) dynamiques et réactives. Contrairement aux frameworks traditionnels comme Angular ou Backbone, React.js se concentre uniquement sur la vue d'une application, ce qui permet de créer des interfaces utilisateur modulaires et réutilisables.

React.js utilise un concept appelé « composants ». Les composants sont des éléments d'interface utilisateur réutilisables qui peuvent être utilisés pour créer des pages Web complexes. Les composants peuvent être des éléments d'interface utilisateur simples comme des boutons ou des champs de formulaire, ou des éléments plus complexes comme des tableaux de données ou des graphiques.

L'un des avantages de React.js est sa facilité de compréhension et de prise en main. Les composants sont écrits en JavaScript, ce qui est déjà familier à de nombreux développeurs Web. De plus, React.js utilise un langage de balisage appelé JSX pour rendre les composants. Le JSX est similaire à HTML, mais il permet d'intégrer du code JavaScript dans le balisage, ce qui facilite la manipulation de l'interface utilisateur.

React.js utilise également une approche appelée « Virtual DOM ». Le Virtual DOM est une version légère de l'arbre DOM (Document Object Model) qui est créée et stockée en mémoire. Lorsqu'un changement est apporté à l'interface utilisateur, React.js crée une nouvelle version du Virtual DOM. Il compare ensuite cette nouvelle version à la version précédente, détermine les changements nécessaires et met à jour l'interface utilisateur en conséquence. Cette approche permet d'optimiser les performances de l'interface utilisateur en minimisant le nombre de changements nécessaires pour mettre à jour l'interface utilisateur.

En résumé, React.js est une bibliothèque JavaScript puissante et populaire qui permet de créer des interfaces utilisateur dynamiques et réactives en utilisant des composants réutilisables et une approche innovante de la manipulation de l'interface utilisateur. Si vous souhaitez développer des applications Web modernes, React.js est une bibliothèque que vous devriez certainement considérer. */}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>{ language === "fr" ? Accordion.title : Accordion.titleEn} </Accordion.Header>
        <Accordion.Body>
        { language === "fr" ? Accordion.articles.slice(0, 100) : Accordion.articleEn?.slice(0, 100)}...
        {/* Cependant, en tant que technologie émergente, l'avenir de l'IA est prometteur et ouvre la voie à de nombreuses applications potentielles dans de nombreux domaines, tels que la médecine, la finance, la sécurité, l'éducation et bien d'autres. De plus en plus d'entreprises et d'organisations adoptent l'IA pour améliorer leur efficacité et leur productivité.

Bien sûr, comme toute technologie, l'IA soulève également des questions et des préoccupations éthiques et sociales, telles que la protection des données, la transparence, la responsabilité et l'impact sur l'emploi et la société dans son ensemble. C'est pourquoi il est important de poursuivre la recherche et le développement de l'IA de manière responsable et éthique, en tenant compte de ces questions et en cherchant des solutions pour les aborder.
L'Intelligence Artificielle (IA) offre de nombreux avantages et bénéfices sur le futur, notamment dans les domaines suivants :
<br/>
1. Amélioration de la qualité de vie : L'IA peut aider à améliorer la qualité de vie des gens en offrant des solutions innovantes et des améliorations dans de nombreux domaines tels que la santé, l'éducation, le transport, la sécurité, etc.
<br/>
2. Amélioration de l'efficacité et de la productivité : Les technologies basées sur l'IA peuvent aider les entreprises à automatiser les tâches répétitives et à augmenter l'efficacité et la productivité.
<br/>
3. Prise de décision plus précise : L'IA peut aider les organisations à prendre des décisions plus précises en fournissant des analyses de données précises et en temps réel.
<br/>
4. Personnalisation : Les technologies basées sur l'IA peuvent aider à personnaliser les produits et les services en fonction des besoins et des préférences individuelles des clients.
<br/>
5. Réduction des coûts : L'IA peut aider à réduire les coûts en automatisant les tâches répétitives, en augmentant l'efficacité et en évitant les erreurs coûteuses.
<br/>
6. Amélioration de la sécurité : Les technologies basées sur l'IA peuvent aider à améliorer la sécurité en fournissant des systèmes de surveillance en temps réel, des systèmes de reconnaissance faciale et des systèmes de détection de fraude.
<br/>
7. Avancées scientifiques : L'IA peut aider à faire des avancées scientifiques en permettant une analyse plus rapide et plus précise des données et en aidant les scientifiques à identifier des modèles dans les données qui pourraient autrement passer inaperçus.
<br/>
En somme, l'IA offre de nombreux avantages et peut aider à résoudre certains des problèmes les plus difficiles de notre temps. Cependant, il est également important de reconnaître les limites de l'IA et de continuer à étudier les implications éthiques et sociales de son utilisation pour s'assurer que nous maximisons les avantages tout en minimisant les risques. */}

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
      <Accordion.Header>{ language === "fr" ? Accordion.title : Accordion.titleEn}</Accordion.Header>
        <Accordion.Body>
        <img src={Accordion.imageArticle} className='img-fluid' alt="" />
      
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4 ">
      <Accordion.Header>{ language === "fr" ? Accordion.title : Accordion.titleEn}</Accordion.Header>
        <Accordion.Body>
        { language === "fr" ? Accordion.articles.slice(0, 100) : Accordion.articleEn?.slice(0, 100)}...

{/* Le soleil doucement s'endort,
Dans un éclat de couleurs d'or,
Le ciel se pare de rouge et d'orange,
Et la nature se met en mode étrange.
<br/>
Le vent s'apaise et les oiseaux se taisent,
Les arbres se découpent en silhouette,
La nature s'apprête à accueillir la nuit,
Dans un tableau paisible et qui luit.
<br/>
Le coucher de soleil est un moment magique,
Où l'on peut s'abandonner à la musique,
Des bruits de la nature qui s'éveille,
Pour une nuit paisible et sans pareille.
<br/>
Le temps s'arrête, la beauté est là,
Dans ce coucher de soleil qui s'en va,
Un instant de grâce, un moment de paix,
Que l'on peut admirer à chaque fois qu'il se laisse voir, sans jamais se lasser. */}
<img src={Accordion.imageArticle} className='img-fluid' alt="" />
     
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  
 
  

{/* <div className='container'>
          <h1>Section Blog</h1>
          {
            data?.map((row) => (
              // je place mon link avec les backticks
              <Link className='text-decoration-none text-dark' to={`/article/${row.id}`}>

                <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
                  <h2>{ language === "fr" ? row.title : row.titleEn}</h2>
                  <p>{ language === "fr" ? row.articles.slice(0, 100) : row.articleEn?.slice(0, 100)}...</p>
                  <img src={row.imageArticle} className='img-fluid' alt="" />
                  <p>{row.auteur}</p>

                </div>
              </Link>
            ))
          }
          <Link to="/">
            <button className="btn btn-primary">retourner a la page initial</button>
          </Link>
        </div> */}


        {/* <div>Hello blog</div>
        <button onClick={() => HandleFooter()} >active Footer</button> */}
    </>
  )
};


export default AccordionA