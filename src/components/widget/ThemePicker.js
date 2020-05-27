import React, { Component } from "react";
import { Icon } from "antd";
import { SketchPicker } from "react-color";
import classNames from "classnames";

class ThemePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switcherOn: false,
      background: window.localStorage.getItem('@primary-color') || '#313653'
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
    window.localStorage.setItem('@primary-color', color.hex);
    window.less.modifyVars({
      '@primary-color': color.hex
    });
  };

  render() {
    return (
      <div className={classNames('switcher dark-white', { active: this.state.switcherOn })}>
        <span className="sw-btn dark-white" onClick={this._switcherOn}>
            <Icon type="setting" className="text-dark" />
        </span>
        <div style={{ padding: 10 }} className="clear">
          <SketchPicker color={this.state.background} onChangeComplete={this._handleChangeComplete}/>
        </div>
      </div>
    );
  }
}

export default ThemePicker;
