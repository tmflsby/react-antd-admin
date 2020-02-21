import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
const { Sider } = Layout;

class SiderCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      mode: 'inline',
      openKey: '',
      selectedKey: ''
    };
  }

  render() {
    return (
      <Sider breakpoint='lg' collapsible={true}
             collapsed={this.state.collapsed}
             onCollapse={this.onCollapse}
      >
        <div className="logo"/>
        <Menu theme='dark' onClick={this.menuClick}
              selectedKeys={[this.state.selectedKey]}
              openKeys={[this.state.openKey]}
              onOpenChange={this.openMenu}
              mode={this.state.mode}
        >
          <Menu.SubMenu key='/app/ui'
                        title={
                          <span>
                            <Icon type='scan'/>
                            <span className="nav-text">UI</span>
                          </span>
                        }
          >
            <Menu.Item key='/app/ui/buttons'>
              <NavLink to='/app/ui/buttons'>按钮</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/icons'>
              <NavLink to='/app/ui/icons'>图标</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/spins'>
              <NavLink to='/app/ui/spins'>加载中</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='/app/table'
                        title={
                          <span>
                            <Icon type='copy'/>
                            <span className="nav-text">表格</span>
                          </span>
                        }
          >
            <Menu.Item key='/app/table/basicTable'>
              <NavLink to='/app/table/basicTable'>基础表格</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/table/advancedTable'>
              <NavLink to='/app/table/advancedTable'>高级表格</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/table/asynchronousTable'>
              <NavLink to='/app/table/asynchronousTable'>异步表格</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='/app/form'
                        title={
                          <span>
                            <Icon type='edit'/>
                            <span className="nav-text">表单</span>
                          </span>
                        }
          >
            <Menu.Item key='/app/form/basicForm'>
              <NavLink to='/app/form/basicForm'>基础表单</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='/app/chart'
                        title={
                          <span>
                            <Icon type='area-chart'/>
                            <span className="nav-text">图表</span>
                          </span>
                        }
          >
            <Menu.Item key='/app/chart/echarts'>
              <NavLink to='/app/chart/echarts'>echarts</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/chart/recharts'>
              <NavLink to='/app/chart/recharts'>recharts</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='pages'
                        title={
                          <span>
                            <Icon type='switcher'/>
                            <span className="nav-text">页面</span>
                          </span>
                        }
          >
            <Menu.Item key='/login'>
              <NavLink to='/login'>登录</NavLink>
            </Menu.Item>
            <Menu.Item key='/404'>
              <NavLink to='/404'>404</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
        <style>
          {`
            #nprogress .spinner{
                left: ${this.state.collapsed ? '70px' : '206px'};
                right: 0 !important;
            }
          `}
        </style>
      </Sider>
    );
  }

  onCollapse = collapsed => {
    console.log('collapsed', collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    });
    console.log('onCollapse', this.state);
  };

  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
    console.log('menuClick', this.state);
  };

  openMenu = v => {
    console.log(v)
    this.setState({
      openKey: v[v.length - 1]
    });
    console.log('openMenu', this.state);
  };
}

export default SiderCustom;
