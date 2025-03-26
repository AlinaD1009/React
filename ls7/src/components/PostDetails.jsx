import { Component } from "react";

class PostDetails extends Component {

  render() {

    const { post } = this.props;
    
    return (
      <div>
        <p>ID: {post.id}</p>
        <p>Title: {post.title}</p>
        <p>Post: {post.body}</p>
      </div>
    );
  }
}

export default PostDetails;
