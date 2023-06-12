import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getDarkMode , setDarkMode} from "../../redux/slices/darkmode.slice";

const Navbar = () => {
  //  const changeOnOver = () => {
  //   const element = document.getElementsByClassName("flex-menu")[0]
  //   element.style.border = "2px blue solid"

  const GETDARKMODE = useSelector(getDarkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    console.log("hello 1 ")
    dispatch(setDarkMode(!GETDARKMODE));
  };

  return (
    <nav >
      <div className="conteneur"  style={{backgroundColor : "red!important"}}>
        <div className="flex-menu" >
          <Link to="/">Accueil</Link>
          <Link to="/Portfolio">Portfolio</Link>
          <Link to="/cv"> C.V.</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <button style={{backgroundColor : GETDARKMODE ?  "black" : "green" , color : GETDARKMODE ?  "white" : "red" }} onClick={handleToggleDarkMode}>
            {GETDARKMODE ? "Light mode" : "dark Mode"}
          </button>
          {/* <Link to="/ProjectReact">Project</Link> */}
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
