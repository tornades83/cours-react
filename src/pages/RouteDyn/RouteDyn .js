import React, { Component } from 'react';
import { Route } from 'react-router-dom';


const RouteDyn  = () => {
 
class RouteDyn extends Component {
  render() {
    const { path, component } = this.props;
    return <Route path={path} component={component} />;
  }
}
}
export default RouteDyn;