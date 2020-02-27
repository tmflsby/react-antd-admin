import { Component } from "react";
import { connect } from "react-redux";

class AuthWidget extends Component {
  render() {
    return this.props.children(this.props.auth);
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.getIn(['httpDataReducer', 'auth']),
  };
};

export default connect(mapStateToProps)(AuthWidget);
