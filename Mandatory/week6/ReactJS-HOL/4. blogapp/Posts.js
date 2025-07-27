import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const postList = data.map(item => new Post(item.id, item.title, item.body));
        this.setState({ posts: postList });
      })
      .catch(err => {
        this.setState({ error: err.message });
        alert('Error fetching posts: ' + err.message);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    console.error("Error caught in Posts component:", error);
    alert("Something went wrong while displaying posts.");
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <div key={post.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
