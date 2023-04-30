import React from 'react'

const GetArticleBylD = () => {
  return (
    <div>GetArticleBylD</div>
  )
}

export default GetArticleBylD


// import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';


// const GetArticleBylD = () => {

// class GetArticleBylD extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       article: null,
//       loading: true,
//       error: null,
//     };
//   }

//   componentDidMount() {
//     const articleId = this.props.match.params.id;
//     axios
//       .get(`https://catch-me-if-you-can--3c240d.appdrag.site/api/getAlArticles?AD_PageNbr=1&AD_PageSize=500'\/${articleId}`)
//       .then((response) => {
//         this.setState({
//           article: response.data,
//           loading: false,
//           error: null,
//         });
//       })
//       .catch((error) => {
//         this.setState({
//           article: null,
//           loading: false,
//           error: error,
//         });
//       });
//   }

//   render() {
//     const { article, loading, error } = this.state;

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     if (error) {
//       return <div>Error: {error.message}</div>;
//     }

//     if (!article) {
//       return <div>Article not found</div>;
//     }

//     return (
//       <div>
//         <h1>{article.title}</h1>
//         <p>{article.content}</p>
//         <Link to="/Cv"> 
//  <button className="btn btn-danger">retour</button></Link>
//       </div>
//     );
//   }
// }
// }
// export default GetArticleBylD;
