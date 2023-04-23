import { useState } from "react";
import Cv from './pages/Cv/Cv';
import { Routes, Route } from "react-router-dom";
import PageError from "./pages/PageError/PageError";
import Blog from "./pages/Blog/Blog";
import ProjectReact from './pages/projectReact/ProjectReact';
import UseEffectCompa from "./pages/UseEffectCompa/UseEffectCompa";
import Compteur from "./componets/Compteur/Compteur";
import Portfolio from "./pages/Portfolio/Portfolio";
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
    <Route path="/ProjectReact" element={<ProjectReact name={name} HandleName={HandleName}  />} />
    <Route path="*" element={<PageError />} />
    <Route path="/Portfolio" element={<Portfolio />} />
    <Route path="/useEffectCompa" element={<UseEffectCompa />} /> 
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
