import { Component } from "react";
import { connect } from "react-redux";

class AuthWidget extends Component {
  render() {
    const { auth = {} } = this.props;
    return this.props.children(auth.data || {});
  }
}

const mapStateToProps = (state) => {
  const { auth = {data: {}}} = state.httpDataReducer;
  return {
    auth
  };
};

export default connect(mapStateToProps)(AuthWidget);
