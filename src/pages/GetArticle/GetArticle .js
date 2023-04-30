import React from 'react'

const GetArticle  = () => {
  return (
    <div>GetArticle </div>
  )
}

export default GetArticle 
// import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const GetArticle  = () => {
  
// class GetArticle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       articles: [],
//     };
//   }

//   componentDidMount() {
//     axios
//       .get('https://catch-me-if-you-can--3c240d.appdrag.site/api/getAlArticles?AD_PageNbr=1&AD_PageSize=500')
//       .then((response) => {
//         this.setState({ articles: response.data });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   render() {
//     const { articles } = this.state;
//     return (
//       <div>
//         <h1>Articles</h1>
//         <ul>
//           {articles.map((article) => (
//             <li key={article.id}>
//               <h3>{article.title}</h3>
//               <p>{article.body}</p>
//             </li>
//           ))}
//         </ul>
//         <Link to="/Cv"> 
//  <button className="btn btn-danger">retour</button></Link>
//       </div>
//     );
//   }
// }
// }
// export default GetArticle;
