import React, { Component  } from "react";
import { Breadcrumb, Switch, Icon } from "antd";
import { NavLink } from "react-router-dom";
import themes from "../style/theme";

class BreadcrumbCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switcherOn: false,
      theme: null,
      themes: JSON.parse(localStorage.getItem('themes')) || [
        {type: 'info', checked: false},
        {type: 'grey', checked: false},
        {type: 'danger', checked: false},
        {type: 'warn', checked: false},
        {type: 'white', checked: false}
      ]
    };
  }

  componentDidMount() {
    this.state.themes.forEach(val => {
      val.checked && this.setState({
        theme: themes['theme' + val.type] || null
      });
    })
  }

  switcherOn = () => {
    this.setState({
      switcherOn: !this.state.switcherOn
    })
  };

  themeChange = (v) => {
    this.setState({
      themes: this.state.themes.map((t, i) => {
        (t.type === v.type && (t.checked = !t.checked)) || (t.checked = false);
        return t;
      }),
      theme: (v.checked && themes['theme' + v.type]) || null
    }, () => {
      localStorage.setItem('themes', JSON.stringify(this.state.themes));
    })
  };

  render() {
    const themesTag = this.state.themes.map((v, i) => (
      <div className="pull-left y-center mr-m mb-s" key={i}>
        <a href='#/' className={`w-24 mr-s b-a ${v.type}`}> </a>
        <Switch checked={v.checked} onChange={() => this.themeChange(v)} />
      </div>
    ));
    const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || '';
    const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || '';

    return (
      <div>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item><NavLink to='/app/dashboard/index' replace>首页</NavLink></Breadcrumb.Item>
          {first}
          {second}
        </Breadcrumb>
        <div className={`switcher dark-white ${this.state.switcherOn ? 'active' : ''}`}>
          <a href='#/' className="sw-btn dark-white" onClick={this.switcherOn}>
            <Icon type="setting" className="text-dark" />
          </a>
          <div style={{padding: '1rem'}} className="clear">
            { themesTag }
          </div>
        </div>
        <style>
          {`
            ${this.state.theme ?
            (`
              .custom-theme {
                background: ${this.state.theme.header.background} !important;
                color: #fff !important;
              }
              .custom-theme .ant-menu {
                background: ${this.state.theme.header.background} !important;
                color: #fff !important;
              }
              .custom-theme .ant-menu-item-group-title {
                color: #fff !important;
              }
            `) : ''
          }          
          `}
        </style>
      </div>
    );
  }
}

export default BreadcrumbCustom;
