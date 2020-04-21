import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const user = this.props.users.find((user) => user.id === this.props.userId);
    if (user) {
      return <div>{user.name}</div>;
    }
    return null;
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.userList,
  };
};
export default connect(mapStateToProps)(UserHeader);
