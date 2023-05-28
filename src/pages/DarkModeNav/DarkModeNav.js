import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './darkModeActions';


const DarkModeNav = () => {
    const darkMode = useSelector(state => state.darkMode.darkMode);
    const dispatch = useDispatch();
  
    const handleToggleDarkMode = () => {
      dispatch(toggleDarkMode());
    };
  return (
    <div className={darkMode ? 'dark' : 'light'}>
    <h1>Mon application React avec mode sombre</h1>
    <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
  </div>
  )
}

export default DarkModeNav



