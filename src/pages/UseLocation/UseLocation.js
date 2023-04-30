 import React, { Component } from 'react';


const UseLocation = () => {
 
class UseLocation extends Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <p>Pathname : {location.pathname}</p>
        <p>Search : {location.search}</p>
        <p>Hash : {location.hash}</p>
      </div>
    );
  }
}
}
export default UseLocation;
