import React from 'react'

const AddArticle = () => {
  return (
    <div>AddArticle</div>
  )
}

export default AddArticle

// import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';


// const AddArticle = () => {
 
// class AddArticle extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       content: '',
//       redirect: false,
//       loading: false,
//       error: null
//     };
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { title, content } = this.state;

//     this.setState({ loading: true });

//     fetch('https://example.com/api/articles', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ title, content })
//     })
//       .then(() => this.setState({ redirect: true }))
//       .catch(error => this.setState({ error, loading: false }));
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   render() {
//     const { title, content, redirect, loading, error } = this.state;

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
//         <h1>Ajouter un article</h1>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label htmlFor="title">Titre:</label>
//             <input type="text" name="title" id="title" value={title} onChange={this.handleChange} />
//           </div>
//           <div>
//             <label htmlFor="content">Contenu:</label>
//             <textarea name="content" id="content" value={content} onChange={this.handleChange}></textarea>
//           </div>
//           <button type="submit">Ajouter</button>
//         </form>
//       </div>
//     );
//   }
// }
// }
// export default AddArticle;