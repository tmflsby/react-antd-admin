import { Component } from "react";
// import { connect } from "react-redux";
import { connectAlita } from "redux-alita";

class AuthWidget extends Component {
  render() {
    // return this.props.children(this.props.auth || {});
    const { auth = {} } = this.props;
    return this.props.children(auth.data || {});
  }
}

// const mapStateToProps = (state) => {
//   const { auth = {data: {}}} = state.httpDataReducer;
//   return {
//     auth
//   };
// };
//
// export default connect(mapStateToProps)(AuthWidget);
export default connectAlita(['auth'])(AuthWidget);
