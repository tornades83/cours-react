import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const StyleSepare = () => {


class StyleSepare extends Component {
  render() {
    return (
      <div className="container">
        <h1>Style séparé</h1>
        <p>numero 2 </p>
        <Link to="/Cv">
          <button className="btn btn-danger">retour</button></Link>
      </div>
    );
  }
}
}
export default StyleSepare;
