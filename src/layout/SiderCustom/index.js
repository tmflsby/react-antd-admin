import React, { Component } from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import routerConfig from "../../router/config";
import SiderMenu from "../SiderMenu";
import { fetchMenu } from "../../axios";

class SiderCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      mode: 'inline',
      openKeys: [],
      selectedKey: '',
      firstHide: true,    // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
      smenus: []
    };
  }


  componentDidMount() {
    const state = SiderCustom.setMenuOpen(this.props);
    this.setState({state});

    fetchMenu()
      .then(smenus => this.setState({ smenus }))
      .catch(error => console.log(error));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.collapsed !== prevState.collapsed) {
      const state1 = SiderCustom.onCollapse(nextProps.collapsed);
      const state2 = SiderCustom.setMenuOpen(nextProps);
      return {
        ...state1,
        ...state2,
        firstHide: prevState.collapsed !== nextProps.collapsed && nextProps.collapsed,  // 两个不等时赋值props属性值否则为false
        openKeys: prevState.openKeys || (!nextProps.collapsed && state1.openKeys)
      };
    }
    return null;
  }

  static onCollapse = collapsed => {
    return {
      collapsed,
      // firstHide: collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    };
  };

  static setMenuOpen = (props) => {
    const { pathname } = props.location;
    return {
      // openKey: pathname.substr(0, pathname.lastIndexOf('/')),
      openKeys: this.recombineOpenKeys(pathname.match(/[/](\w+)/gi) || []),
      selectedKey: pathname
    };
  };

  static recombineOpenKeys = (openKeys) => {
    let strPlus = '';
    let tempKeys = [];
    for (let i = 0; i < openKeys.length; i++) {
      strPlus += openKeys[i];
      tempKeys.push(strPlus)
    }
    return tempKeys
  };

  menuClick = (e) => {
    this.setState({
      selectedKey: e.key
    });
    console.log('menuClick', this.state);

    const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
    popoverHide && popoverHide();
  };

  openMenu = (v) => {
    console.log(v);
    this.setState({
      openKeys: v,
      firstHide: false
    });
    console.log('openMenu', this.state);
  };

  render() {
    return (
      <Layout.Sider
        className="sider-custom"
        breakpoint='lg'
        collapsed={this.props.collapsed}
        style={{ overflowY: 'auto' }}
        trigger={null}
      >
        <div className="logo"/>
        <SiderMenu
          mode='inline'
          menus={[...routerConfig.menus, ...this.state.smenus]}
          selectedKeys={[this.state.selectedKey]}
          openKeys={this.state.firstHide ? [] : this.state.openKeys}
          onOpenChange={this.openMenu}
          onClick={this.menuClick}
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
