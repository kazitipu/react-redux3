import React from "react";
import PostList from "./PostList";

export default class App extends React.Component {
  render() {
    return (
      <div className="container ">
        <div className="list-group my-auto">
          <PostList />
        </div>
      </div>
    );
  }
}
