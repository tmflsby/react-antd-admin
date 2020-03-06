import { Component } from "react";
import { connect } from "react-redux";

class AuthWidget extends Component {
  render() {
    return this.props.children(this.props.auth || {});
  }
}

const mapStateToProps = (state) => {
  const { auth = {data: {}}} = state.httpDataReducer;
  return {
    auth
  };
};

export default connect(mapStateToProps)(AuthWidget);
