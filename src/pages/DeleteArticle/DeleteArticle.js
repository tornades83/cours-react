import React from 'react'

const DeleteArticle = () => {
  return (
    <div>DeleteArticle</div>
  )
}

export default DeleteArticle

// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';


// const DeleteArticle = () => {
 
// class DeleteArticle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       redirect: false,
//       loading: false,
//       error: null
//     };
//   }

//   componentDidMount() {
//     const { id } = this.props.match.params;

//     this.setState({ loading: true });

//     fetch(`https://example.com/api/articles/${id}`, {
//       method: 'DELETE'
//     })
//       .then(() => this.setState({ redirect: true }))
//       .catch(error => this.setState({ error, loading: false }));
//   }

//   render() {
//     const { redirect, loading, error } = this.state;

//     if (redirect) {
//       return <Redirect to="/articles" />;
//     }

//     if (loading) {
//       return <div>Chargement...</div>;
//     }

//     if (error) {
//       return <div>Erreur: {error.message}</div>;
//     }

//     return (
//       <div>
//         <h1>Supprimer un article</h1>
//         <p>L'article a bien été supprimé.</p>
//       </div>
//     );
//   }
// }
// }
// export default DeleteArticle;