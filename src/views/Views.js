import React, { Component } from "react";

class Views extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        {this.props.children}
      </div>
    );
  }
}

export default Views;
