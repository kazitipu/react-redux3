import React from "react";
import UserHeader from "./UserHeader";
import { connect } from "react-redux";
import { fetchPostsAndUser } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUser();
  }
  renderList() {
    return this.props.posts.map((post) => (
      <div
        className="list-group-item list-group-item-action flex-column align-items-start"
        key={post.id}
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1"> {post.title}</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">{post.body}</p>
        <small>
          <UserHeader userId={post.userId} />
        </small>
      </div>
    ));
  }
  render() {
    return (
      <>
        {this.renderList()} <br />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPostsAndUser })(PostList);

/* <a href="#" class="list-group-item list-group-item-action flex-column align-items-start active">
<div class="d-flex w-100 justify-content-between">
  <h5 class="mb-1">List group item heading</h5>
  <small>3 days ago</small>
</div>
<p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
<small>Donec id elit non mi porta.</small>
</a> */
