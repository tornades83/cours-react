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
import Countinterval from "./pages/Countinterval/Countinterval"
import MouseMove from "./pages/MouseMove/MouseMove"
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
    <Route path="/mouseMove" element={<MouseMove />} /> 
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
