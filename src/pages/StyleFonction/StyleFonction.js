import React from 'react';
import { Link } from 'react-router-dom';

const StyleFonction = () => {
  
function StyleFonction() {
  const styles = {
    backgroundColor: 'lightblue',
    color: 'white',
    padding: '10px',
    fontSize: '20px',
    textAlign: 'center'
  };

  return (
    <div style={styles}>
      <h1>Style fonction</h1>
      <p>Ce texte numero4</p>
      <Link to="/Cv">
          <button className="btn btn-danger">retour</button></Link>
    </div>
  );
}
}
export default StyleFonction;
