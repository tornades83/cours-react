import { useState } from "react";
import Home from "./pages/home/home";
import Cv from './pages/Cv/Cv';
import { Routes, Route } from "react-router-dom";
import PageError from "./pages/PageError/PageError";
import Blog from "./pages/Blog/Blog";
import ProjectReact from './pages/projectReact/ProjectReact';
import UseEffectCompa from "./pages/UseEffectCompa/UseEffectCompa";
import Compteur from "./componets/Compteur/Compteur";
import Portfolio from "./pages/Portfolio/Portfolio";
import Toogle from "./componets/Toogle/Toogle";
import List from "./componets/List/List";
import Object from "./componets/Object/Object";
import Article from "./pages/Article/Article";
import Countinterval from "./pages/Countinterval/Countinterval";
import MouseMove from "./pages/MouseMove/MouseMove";
import PageUne from "./pages/PageUne/PageUne";


import Login from "./pages/Login/Login"

function App() {
  //const [name, setName] = useState("Yonathan Ephraim Meir roos");
  const [name, setName] = useState("Yonathan Ephraim Meir roos");
  // const HandleName = (cb) => {
  // setName(cb)
  // }

  const HandleName = (cb) => {
    setName(cb)
    }
  
  return (

<div>
  <Routes>
  <Route path="/Home" element={<Home name={name} HandleName={HandleName}  />} />
    <Route index element={<Home name={name} HandleName={HandleName}  />} /> 
    <Route path="/cv" element={<Cv name={name} HandleName={HandleName}  />} /> 
    <Route path="/Blog" element={<Blog name={name} HandleName={HandleName} />} /> 
       <Route path="/Compteur" element={<Compteur />} />
    <Route path="/Toogle" element={<Toogle />} />
    <Route path="/List" element={<List />} />
    <Route path="/Object" element={<Object />} />
    <Route path="/ProjectReact" element={<ProjectReact name={name} HandleName={HandleName}  />} />

    <Route path="/Portfolio" element={<Portfolio />} />
    <Route path="/Article/:id" element={<Article />} />
    <Route path="/useEffectCompa" element={<UseEffectCompa />} /> 
    <Route path="/Countinterval" element={<Countinterval />} /> 
    <Route path="/MouseMove" element={<MouseMove />} /> 
   
    {/* Section UseState */}
    {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} /> */}

        {/* Section UseEffect */}
        {/* <Route path="/" element={</>} /> */}
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} />\ */}

        {/* Section CSS */}
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} /> */}


        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={< />} /> */}

        {/* <Route path="/" element={< />} /> */}
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/" element={< />} /> */}
        {/* <Route path="/" element={</>} /> */}
        {/* <Route path="/" element={< />} /> */}

        <Route path="/PageUne" element={<PageUne />} /> 
  

        {/* doit etre a la derniere route */}
      <Route path="*" element={<PageError />} /> 
  </Routes>
</div>
  );
} 


export default App;
// racourci de code:
// rafce
// fa
// cer
// usf
// faa
// race



// Test
//   PresUseState 
//  UseStateObject  
//  UseStateToogle 
//  UseStateList 
//  UseStateNumber

//  PresUseEffect 
// UefVide
//  UseEffectDependance 
//  UseEffectReturn
//  StyleReact 


//  DataTableBasique 
//  DataTableFull 
//  DataTableSort 

//  PresUseRef 
//  AddArticle 
//  UpdateArticle
// DeleteArticle    


//  <Link to="/Cv"> 
//  <button className="btn btn-danger">retour</button></Link>


  