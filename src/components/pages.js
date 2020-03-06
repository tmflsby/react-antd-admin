import React, { Component } from "react";

class Pages extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        {this.props.children}
      </div>
    );
  }
}

export default Pages;
