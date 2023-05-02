import { useState } from "react";
import Home from "./pages/home/home";
import Test from './pages/Test/Test';
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

import PresUseState from './pages/UseStatesSection/PresUseState';
import UseStateObject from './pages/UseStatesSection/UseStateObject';
import UseStateToogle from './pages/UseStatesSection/UseStateToogle';
import UseStateList from "./pages/UseStatesSection/UseStateList"
import UseStateNumber from "./pages/UseStatesSection/UseStateNumber"

import PresUseEffect from './pages/UseEffectSection/PresUseEffect';
import UefVide from './pages/UseEffectSection/UefVide';
import UseEffectDependance from "./pages/UseEffectSection/UseEffectDependance"
import UseEffectReturn from "./pages/UseEffectSection/UseEffectReturn"
import StyleReact from "./pages/StyleReact/StyleReact"


import DataTableBasique from './pages/DataTable/DataTableBasique';
import DataTableFull from './pages/DataTable/DataTableFull';
import DataTableSort from './pages/DataTable/DataTableSort';

import PresUseRef from './pages/PresUseRef/PresUseRef';
import AddArticle from './pages/Article/AddArticle';
import UpdateArticle from './pages/Article/UpdateArticle';
import DeleteArticle from './pages/Article/DeleteArticle';


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
    <Route path="/PresUseState" element={<PresUseState />} />
        <Route path="/usfObject" element={<UseStateObject />} />
        <Route path="/UseStateToogle" element={<UseStateToogle />} />
        <Route path="/UseStateList" element={<UseStateList />} />
        <Route path="/UseStateNumber" element={<UseStateNumber />} />

        {/* Section UseEffect */}
        <Route path="/PresUseEffect" element={<PresUseEffect />} />
        <Route path="/UefVide" element={<UefVide />} />
        <Route path="/UseEffectDependance" element={<UseEffectDependance />} />
        <Route path="/UseEffectReturn" element={<UseEffectReturn />} />\

        {/* Section CSS */}
        <Route path="/StyleReact" element={<StyleReact />} />
        <Route path="/Test" element={<Test />} />


        <Route path="/DataTableBasique" element={<DataTableBasique />} />
        <Route path="/DataTableSort" element={<DataTableSort />} />
        <Route path="/DataTableFull" element={<DataTableFull />} />

        <Route path="/PresUseRef" element={<PresUseRef />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AddArticle" element={<AddArticle />} />
        <Route path="/UpdateArticle" element={<UpdateArticle />} />
        <Route path="/DeleteArticle" element={<DeleteArticle />} />

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
 
//  <Link to="/Cv"> 
//  <button className="btn btn-danger">retour</button></Link>


  