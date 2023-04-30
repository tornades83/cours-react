import { useState } from "react";
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
import StyleGeneral from "./pages/StyleGeneral/StyleGeneral"
import StyleSepare from "./pages/StyleSepare/StyleSepare"
import StyleBackTick from "./pages/StyleBackTick/StyleBackTick"
import StyleFonction from "./pages/StyleFonction/StyleFonction"
import ApiGeneral from "./pages/ApiGeneral/ApiGeneral"
import AxiosGet from "./pages/AxiosGet/AxiosGet"
import AxiosPost from "./pages/AxiosPost/AxiosPost"
import GetArticle  from "./pages/GetArticle/GetArticle "
import GetArticleBylD from "./pages/GetArticleBylD/GetArticleBylD"
import AddArticle from "./pages/AddArticle/AddArticle"
import  DeleteArticle from "./pages/DeleteArticle/DeleteArticle"
import RouterGeneral from "./pages/RouterGeneral/RouterGeneral"
import RouteDyn  from "./pages/RouteDyn/RouteDyn "
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
    <Route index element={<Cv name={name} HandleName={HandleName}  />} /> 
    <Route path="/cv" element={<Cv name={name} HandleName={HandleName}  />} /> 
    <Route path="/Blog" element={<Blog name={name} HandleName={HandleName} />} /> 
    <Route path="/Compteur" element={<Compteur />} />
    <Route path="/Toogle" element={<Toogle />} />
    <Route path="/List" element={<List />} />
    <Route path="/Object" element={<Object />} />
    <Route path="/ProjectReact" element={<ProjectReact name={name} HandleName={HandleName}  />} />
    <Route path="*" element={<PageError />} />
    <Route path="/Portfolio" element={<Portfolio />} />
    <Route path="/Article/:id" element={<Article />} />
    <Route path="/useEffectCompa" element={<UseEffectCompa />} /> 
    <Route path="/Countinterval" element={<Countinterval />} /> 
     <Route path="/MouseMove" element={<MouseMove />} /> 
    <Route path="/PageUne" element={<PageUne />} /> 
    <Route path="/StyleGeneral" element={<StyleGeneral />} /> 
    <Route path="/StyleSepare" element={<StyleSepare />} /> 
    <Route path="/StyleBackTick" element={<StyleBackTick />} /> 
    <Route path="/StyleFonction" element={<StyleFonction />} /> 
    <Route path="/ApiGeneral" element={<ApiGeneral />} /> 
    <Route path="/AxiosGet" element={<AxiosGet />} /> 
    <Route path="/AxiosPost" element={<AxiosPost />} /> 
    <Route path="/GetArticle " element={<GetArticle  />} /> 
    <Route path="/GetArticleBylD" element={<GetArticleBylD />} /> 
    <Route path="/AddArticle" element={<AddArticle />} /> 
    <Route path="/ DeleteArticle " element={< DeleteArticle  />} /> 
    <Route path="/RouterGeneral" element={<RouterGeneral />} /> 
    <Route path="/RouteDyn " element={<RouteDyn  />} /> 
    {/* <Route path="/" element={< />} />  */}
    {/* <Route path="/" element={< />} />  */}
   
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
// 
//  <Link to="/Cv"> 
//  <button className="btn btn-danger">retour</button></Link>


// LinkExplication 
// UseLocation