import React, { Component } from "react";
import { Icon } from "antd";
import { SketchPicker } from "react-color";
import classNames from "classnames";
import { setLocalStorage, getLocalStorage } from "../../utils";

class ThemePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switcherOn: false,
      background: getLocalStorage('@primary-color') || '#313653'
    };
  }

  _switcherOn = () => {
    this.setState({
      switcherOn: !this.state.switcherOn
    });
  };

  _handleChangeComplete = (color) => {
    this.setState({
      background: color.hex
    });
    setLocalStorage('@primary-color', color.hex);
    window.less.modifyVars({
      '@primary-color': color.hex
    });
  };

  render() {
    return (
      <div
        className={
          classNames('switcher dark-white', {
            active: this.state.switcherOn
          })
        }
      >
        <span
          className="sw-btn dark-white"
          onClick={this._switcherOn}
        >
            <Icon
              className="text-dark"
              type="setting"
            />
        </span>
        <div
          className="clear"
          style={{ padding: 10 }}
        >
          <SketchPicker
            color={this.state.background}
            onChangeComplete={this._handleChangeComplete}
          />
        </div>
      </div>
    );
  }
}

export default ThemePicker;
