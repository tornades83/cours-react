import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AxiosGet = () => {
 
    class AxiosGet extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }
    
      componentDidMount() {
        axios
          .get('https://catch-me-if-you-can--3c240d.appdrag.site/api/getAlArticles?AD_PageNbr=1&AD_PageSize=500')
          .then((response) => {
            this.setState({ data: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      render() {
        const { data } = this.state;
        return (
          <div>
            <h1>Axios GET Request</h1>
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>

            <Link to="/Cv">
          <button className="btn btn-danger">retour</button></Link>
          </div>
        );
      }
    }
}
    export default AxiosGet;
    