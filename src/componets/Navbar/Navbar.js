import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../Darkmode/darkModeActions";
const Navbar = () => {
  //  const changeOnOver = () => {
  //   const element = document.getElementsByClassName("flex-menu")[0]
  //   element.style.border = "2px blue solid"

  const darkMode = useSelector((state) => state?.darkMode?.darkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    console.log("first")
    dispatch(toggleDarkMode());
  };

  return (
    <nav>
      <div className="conteneur">
        <div className="flex-menu">
          <Link to="/">Accueil</Link>
          <Link to="/Portfolio">Portfolio</Link>
          <Link to="/cv"> C.V.</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={handleToggleDarkMode}>
            {darkMode ? "Activer le mode clair" : "Activer le mode sombre"}
          </button>
          {/* <Link to="/ProjectReact">Project</Link> */}
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
