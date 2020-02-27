import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";

class SiderCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'inline',
      openKey: '',
      selectedKey: ''
    };
  }

  static getDerivedStateFromProps(nextProps, preState) {
    if (nextProps.collapsed !== preState.collapsed) {
      const state2 = SiderCustom.onCollapse(nextProps.collapsed);
      return {
        ...state2
      };
    }
    return null;
  }

  render() {
    return (
      <Layout.Sider breakpoint='lg'
                    collapsed={this.props.collapsed}
                    style={{ overflowY: 'auto' }}
                    trigger={null}
      >
        <div className="logo"/>
        <Menu theme='dark' onClick={this.menuClick}
              selectedKeys={[this.state.selectedKey]}
              openKeys={[this.state.openKey]}
              onOpenChange={this.openMenu}
              mode={this.state.mode}
        >
          <Menu.Item key="/app/dashboard/index">
            <NavLink to={'/app/dashboard/index'} replace>
              <Icon type="mobile" />
              <span className="nav-text">首页</span>
            </NavLink>
          </Menu.Item>
          <Menu.SubMenu key='/app/ui'
                        title={
                          <span>
                            <Icon type='scan'/>
                            <span className="nav-text">UI</span>
                          </span>
                        }
          >
            <Menu.Item key='/app/ui/buttons'>
              <NavLink to='/app/ui/buttons' replace>按钮</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/icons'>
              <NavLink to='/app/ui/icons' replace>图标</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/spins'>
              <NavLink to='/app/ui/spins' replace>加载中</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/modals'>
              <NavLink to='/app/ui/modals' replace>对话框</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/notifications'>
              <NavLink to='/app/ui/notifications' replace>通知提醒框</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/tabs'>
              <NavLink to='/app/ui/tabs' replace>标签页</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/banners'>
              <NavLink to='/app/ui/banners' replace>轮播图</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/wysiwyg'>
              <NavLink to='/app/ui/wysiwyg' replace>富文本</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/draggable'>
              <NavLink to='/app/ui/draggable' replace>拖拽</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/gallery'>
              <NavLink to='/app/ui/gallery' replace>画廊</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='/app/animation'
                        title={
                          <span>
                            <Icon type='rocket'/>
                            <span className="nav-text">动画</span>
                          </span>
                        }
          >
            <Menu.Item key='/app/animation/basicAnimations'>
              <NavLink to='/app/animation/basicAnimations' replace>基础动画</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/animation/exampleAnimations'>
              <NavLink to='/app/animation/exampleAnimations' replace>动画案例</NavLink>
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
              <NavLink to='/app/table/basicTable' replace>基础表格</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/table/advancedTable'>
              <NavLink to='/app/table/advancedTable' replace>高级表格</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/table/asynchronousTable'>
              <NavLink to='/app/table/asynchronousTable' replace>异步表格</NavLink>
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
              <NavLink to='/app/form/basicForm' replace>基础表单</NavLink>
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
              <NavLink to='/app/chart/echarts' replace>echarts</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/chart/recharts'>
              <NavLink to='/app/chart/recharts' replace>recharts</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title={
                          <span>
                            <Icon type='switcher'/>
                            <span className="nav-text">页面</span>
                          </span>
                        }
          >
            <Menu.Item key='/login'>
              <NavLink to='/login' replace>登录</NavLink>
            </Menu.Item>
            <Menu.Item key='/404'>
              <NavLink to='/404' replace>404</NavLink>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key='/app/auth'
                        title={
                          <span>
                            <Icon type="safety" />
                            <span className="nav-text">权限管理</span>
                          </span>
                        }
          >
            <Menu.Item key='/app/auth/basic'>
              <NavLink to='/app/auth/basic' replace>基础演示</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/auth/routerEnter'>
              <NavLink to='/app/auth/routerEnter' replace>路由拦截</NavLink>
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
      </Layout.Sider>
    );
  }

  static onCollapse = collapsed => {
    return {
      collapsed,
      mode: collapsed ? 'vertical' : 'inline'
    };
  };

  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
    console.log('menuClick', this.state);
  };

  openMenu = v => {
    console.log(v);
    this.setState({
      openKey: v[v.length - 1]
    });
    console.log('openMenu', this.state);
  };
}

export default SiderCustom;
