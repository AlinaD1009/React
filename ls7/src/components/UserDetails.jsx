import { Component } from "react";

class UserDetails extends Component {

  render() {
    
    const { user } = this.props;
    return (
      <div>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
    );
  }
}

export default UserDetails;
