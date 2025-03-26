import { Component } from "react";
import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";

class Content extends Component {

  render() {

    return (
      
      <main>
        <Users/>
        <Posts/>
        <Comments/>
      </main>
    )
  }
}

export default Content;
