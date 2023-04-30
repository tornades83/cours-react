import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const ApiGeneral = () => {
  
class ApiGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    fetch('https://catch-me-if-you-can--3c240d.appdrag.site/api/getAlArticles?AD_PageNbr=1&AD_PageSize=500')
      .then(response => response.json())
      .then(data => this.setState({ data, loading: false }))
      .catch(error => this.setState({ error, loading: false }));
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return <div>Chargement...</div>;
    }

    if (error) {
      return <div>Erreur: {error.message}</div>;
    }

    return (
      <div>
        <h1>API générale</h1>
        <p>Les données sont: {data}</p>
        <Link to="/Cv">
          <button className="btn btn-danger">retour</button></Link>
      </div>
    );
  }
}
}
export default ApiGeneral;
