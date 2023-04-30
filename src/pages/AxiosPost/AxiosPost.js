import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AxiosPost = () => {
 
class AxiosPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, body } = this.state;
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title,
        body,
        userId: 1,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({ title: '', body: '' });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Axios POST Request</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              value={body}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <Link to="/Cv">
          <button className="btn btn-danger">retour</button></Link>
      </div>
    );
  }
}
}
export default AxiosPost;
