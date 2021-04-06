import React, { Component } from "react";
import img from "../../style/imgs/404.png";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: ''
    };
  }

  enter = () => {
    this.setState({
      animated: 'hinge'
    });
  };

  render() {
    return (
      <div
        className="center"
        style={{
          height: '100%',
          background: '#ececec',
          overflow: 'hidden'
        }}
      >
        <img
          className={`animated swing ${this.state.animated}`}
          src={ img }
          alt="404"
          onMouseEnter={this.enter}
        />
      </div>
    );
  }
}

export default NotFound;
