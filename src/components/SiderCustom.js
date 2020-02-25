import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
const { Sider } = Layout;

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
      <Sider breakpoint='lg' collapsible={true}
             collapsed={this.props.collapsed}
             onCollapse={this.onCollapse}
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
            <NavLink to={'/app/dashboard/index'}>
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
              <NavLink to='/app/ui/buttons'>按钮</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/icons'>
              <NavLink to='/app/ui/icons'>图标</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/spins'>
              <NavLink to='/app/ui/spins'>加载中</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/modals'>
              <NavLink to='/app/ui/modals'>对话框</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/notifications'>
              <NavLink to='/app/ui/notifications'>通知提醒框</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/tabs'>
              <NavLink to='/app/ui/tabs'>标签页</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/banners'>
              <NavLink to='/app/ui/banners'>轮播图</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/wysiwyg'>
              <NavLink to='/app/ui/wysiwyg'>富文本</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/draggable'>
              <NavLink to='/app/ui/draggable'>拖拽</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/ui/gallery'>
              <NavLink to='/app/ui/gallery'>画廊</NavLink>
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
              <NavLink to='/app/animation/basicAnimations'>基础动画</NavLink>
            </Menu.Item>
            <Menu.Item key='/app/animation/exampleAnimations'>
              <NavLink to='/app/animation/exampleAnimations'>动画案例</NavLink>
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
          <Menu.SubMenu title={
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
