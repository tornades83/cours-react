import { useState } from "react";

import './App.css';
import Home from "./pages/home/home";
import Cv from './pages/Cv/Cv';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PageError from "./pages/PageError/PageError";
import Blog from "./pages/Blog/Blog";
import Test from './pages/Test/Test';
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

import UseStateObject from './pages/UseStatesSection/UseStateObject';
import UseStateToogle from './pages/UseStatesSection/UseStateToogle';
import UseStateList from "./pages/UseStatesSection/UseStateList"
import UseStateNumber from "./pages/UseStatesSection/UseStateNumber"

import PresUseState from './pages/UseStatesSection/PresUseState';
import PresUseEffect from './pages/UseEffectSection/PresUseEffect';

import UefVide from './pages/UseEffectSection/UefVide';
import UseEffectDependance from "./pages/UseEffectSection/UseEffectDependance"
import UseEffectReturn from "./pages/UseEffectSection/UseEffectReturn"
import StyleReact from "./pages/StyleReact/StyleReact"

// import DataTableBasique from './pages/DataTable/DataTableBasique';
// import DataTableFull from './pages/DataTable/DataTableFull';
// import DataTableSort from './pages/DataTable/DataTableSort';

// import PresUseRef from './pages/PresUseRef/PresUseRef';
// import AddArticle from './pages/Article/AddArticle';
// import UpdateArticle from './pages/Article/UpdateArticle';
// import DeleteArticle from './pages/Article/DeleteArticle';
// import HKbase from "./pages/Hookform/Hookform"
// import HFselect from  "./pages/Hookform/HFselect/HFselect"
// import  HFblur from "./pages/Hookform/HFblur"
// import  FormikExemple from "./pages/Hookform/FormikExemple"
// import FilterSection from './pages/FilterSection/FilterSection';
// import FilterSearch from './pages/FilterSection/FilterSearch';
// import FindSection from './pages/FilterSection/FindSection';
// import ButtonSpe from './pages/UseCallBack/ButtonSpe'
// import  UseCallback  from './pages/UseCallBack/UseCallBack';

// import UseMemoSection from './pages/UseMemoSection/UseMemo2';
// import UseMemoSectionKo from './pages/UseMemoSection/UseMemo2PreuveKo';

// import UseMemo2 from './pages/UseMemoSection/UseMemo2'
// import USeMemo2PreuveKo  from './pages/UseMemoSection/UseMemo2PreuveKo'
// import UseReducerSection from './pages/UsereducerSection/UseReducerSection'
// import UseReducerSectionSimple from './pages/UsereducerSection/UseReducerSectionSimple'
// import UseReducerAdvanced from './pages/UsereducerSection/UseReducerAdvanced/UseReducerAdvanced'
// import UseReducerInt1 from './pages/UsereducerSection/UseReducerIntermediaire/UseReducerInt1'
// import UseReducerInt2 from './pages/UsereducerSection/UseReducerIntermediaire/UseReducerInt2'
// import UseReducerInt3  from './pages/UsereducerSection/UseReducerIntermediaire/UseReducerInt3'

// import Layout from "./components/Layout/Layout"
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


<BrowserRouter >
{/* <Layout> */}
  <Routes>
  <Route path="/Home" element={<Home name={name} HandleName={HandleName}  />} />
    <Route index element={<Home name={name} HandleName={HandleName}  />} /> 
    <Route path="/cv" element={<Cv name={name} HandleName={HandleName}  />} /> 
    <Route path="/Blog" element={<Blog name={name} HandleName={HandleName} />} /> 
    {/* <Route path="/FilterSection" element={<FilterSection />} />
        <Route path="/FilterSearch" element={<FilterSearch />} />
        <Route path="/FindSection" element={<FindSection />} />
        <Route path="/ButtonSpe" element={<ButtonSpe />} />
        <Route path="/UseCallback" element={<UseCallback />} /> */}
        {/* <Route path="/ UseMemo2" element={< UseMemo2 />} /> */}

        {/* <Route path="/UseMemoSection" element={<UseMemoSection />} />
        <Route path="/UseMemoSectionko" element={<UseMemoSectionKo />} />

        <Route path="/USeMemo2PreuveKo" element={<USeMemo2PreuveKo />} />
        <Route path="/UseReducerSection" element={<UseReducerSection />} />
        <Route path="/UseReducerSectionSimple" element={<UseReducerSectionSimple />} />
        <Route path="/UseReducerAdvanced" element={<UseReducerAdvanced />} />
        <Route path="/UseReducerInt1" element={<UseReducerInt1 />} />
        <Route path="/UseReducerInt2" element={<UseReducerInt2 />} />
        <Route path="/UseReducerInt3" element={<UseReducerInt3 />} /> */}


      
      
      
      
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

        {/* <Route path="/DataTableBasique" element={<DataTableBasique />} />
        <Route path="/DataTableSort" element={<DataTableSort />} />
        <Route path="/DataTableFull" element={<DataTableFull />} />

        <Route path="/PresUseRef" element={<PresUseRef />} />
      
        <Route path="/AddArticle" element={<AddArticle />} />
        <Route path="/UpdateArticle" element={<UpdateArticle />} />
        <Route path="/DeleteArticle" element={<DeleteArticle />} />
        <Route path="/HKbase" element={<HKbase />} />
        <Route path="/HFselect" element={<HFselect />} />
        <Route path="/HFblur" element={<HFblur />} />
        <Route path="/FormikExemple" element={<FormikExemple />} /> */}


        <Route path="/Login" element={<Login />} />
      

        <Route path="/PageUne" element={<PageUne />} /> 
  

        {/* doit etre a la derniere route */}
      <Route path="*" element={<PageError />} /> 
  </Routes>
  {/* </Layout> */}
    </BrowserRouter>

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


  