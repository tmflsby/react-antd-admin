import React, { Component } from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import routerConfig from "../router/config";
import SiderMenu from "./SiderMenu";

class SiderCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      mode: 'inline',
      openKey: '',
      selectedKey: '',
      firstHide: true    // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
    };
  }

  componentDidMount() {
    const state = SiderCustom.setMenuOpen(this.props);
    this.setState({state})
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const state1 = SiderCustom.onCollapse(nextProps.collapsed);
    const state2 = SiderCustom.setMenuOpen(nextProps);
    return {
      ...state1,
      ...state2,
      ...prevState
    };
  }

  static onCollapse = collapsed => {
    return {
      collapsed,
      firstHide: collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    };
  };

  static setMenuOpen = (props) => {
    const { pathname } = props.location;
    return {
      openKey: pathname.substr(0, pathname.lastIndexOf('/')),
      selectedKey: pathname
    };
  };

  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
    console.log('menuClick', this.state);

    const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
    popoverHide && popoverHide();
  };

  openMenu = v => {
    console.log(v);
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false
    });
    console.log('openMenu', this.state);
  };

  render() {
    return (
      <Layout.Sider breakpoint='lg'
                    collapsed={this.props.collapsed}
                    style={{ overflowY: 'auto' }}
                    trigger={null}
      >
        <div className="logo"/>
        <SiderMenu menus={routerConfig.menus} theme='dark'
                   mode='inline' onClick={this.menuClick}
                   openKeys={this.state.firstHide ? null : [this.state.openKey]}
                   selectedKeys={[this.state.selectedKey]}
                   onOpenChange={this.openMenu}
        />
        <style>
          {`
            #nprogress .spinner{
                left: ${this.state.collapsed ? '70px' : '206px'};
                right: 0 !important;
            }
          `}
        </style>
      </Layout.Sider>
    );
  }
}

export default withRouter(SiderCustom);
