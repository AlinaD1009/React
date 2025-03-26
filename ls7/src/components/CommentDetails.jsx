import { Component } from "react";

class CommentDetails extends Component {

  render() {

    const { comment } = this.props;
    
    return (
      <div>
        <p>ID: {comment.id}</p>
        <p>Name: {comment.name}</p>
        <p>Comment: {comment.body}</p>
      </div>
    );
  }
}

export default CommentDetails;
