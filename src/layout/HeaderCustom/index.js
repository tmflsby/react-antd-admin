import React, { Component } from "react";
import { Menu, Icon, Layout, Badge, Popover } from "antd";
import screenfull from "screenfull";
// import { connect } from "react-redux";
import { connectAlita } from "redux-alita";
import { withRouter } from "react-router-dom";
import SiderCustom from "../SiderCustom";
import PwaInstaller from "../../components/PwaInstaller";
import avatar from "../../style/imgs/b1.jpg";
import { gitOauthInfo, gitOauthToken } from "../../axios";
import {
  queryString,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage
} from "../../utils";

class HeaderCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      visible: false
    };
  }

  componentDidMount() {
    const QueryString = queryString();
    const _user = getLocalStorage('user') || '测试';
    if (!_user && QueryString.hasOwnProperty('code')) {
      gitOauthToken(QueryString.code).then(res => {
        gitOauthInfo(res.access_token).then(info => {
          this.setState({
            user: info
          });
          setLocalStorage('user', info);
        }).catch(err => console.log(err));
      }).catch(err => console.log(err));
    } else {
      this.setState({
        user: _user
      });
    }
  }

  screenFull = () => {
    if (screenfull.isEnabled) {
      screenfull.request().then().catch(err => console.log(err));
    }
  };

  menuClick = (e) => {
    e.key === 'logout' && this.logout();
  };

  logout = () => {
    removeLocalStorage('user');
    this.props.history.push('/login')
  };

  popoverHide = () => {
    this.setState({
      visible: false
    });
  };

  handleVisibleChange = (visible) => {
    this.setState({
      visible
    });
  };

  render() {
    const { responsive = { data: {} }, path } = this.state;
    return (
      <Layout.Header className="custom-theme header">
        {
          responsive.data.isMobile ? (
            <Popover
              trigger='click'
              placement='bottomLeft'
              content={
                <SiderCustom
                  path={path}
                  popoverHide={this.popoverHide}
                />
              }
              visible={this.state.visible}
              onVisibleChange={this.handleVisibleChange}
            >
              <Icon
                className="header__trigger custom-trigger"
                type="bars"
              />
            </Popover>
          ) : (
            <Icon
              className="header__trigger custom-trigger"
              type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.toggle}
            />
          )
        }
        <Menu
          mode='horizontal'
          style={{
            lineHeight: '64px',
            float: 'right'
          }}
          onClick={this.menuClick}
          >
          <Menu.Item key="pwa">
            <PwaInstaller/>
          </Menu.Item>
          <Menu.Item
            key="full"
            onClick={this.screenFull}
          >
            <Icon
              type="arrows-alt"
              onClick={this.screenFull}
            />
          </Menu.Item>
          <Menu.Item key='1'>
            <Badge
              style={{
                marginLeft: 10
              }}
              count={25}
              overflowCount={10}
            >
              <Icon type="notification"/>
            </Badge>
          </Menu.Item>
          <Menu.SubMenu
            title={
              <span className="avatar">
                <img src={avatar} alt="头像"/>
                <i className="on bottom b-white"/>
              </span>
            }
          >
            <Menu.ItemGroup title='用户中心'>
              <Menu.Item key='setting:1'>
                你好-{this.props.user.username}
              </Menu.Item>
              <Menu.Item key="setting:2">
                个人信息
              </Menu.Item>
              <Menu.Item key="logout">
                <span onClick={this.logout}>
                  退出登录
                </span>
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title='设置中心'>
              <Menu.Item key='setting:3'>
                个人设置
              </Menu.Item>
              <Menu.Item key='setting:4'>
                系统设置
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>
      </Layout.Header>
    );
  }
}

// const mapStateToProps = (state) => {
//   const { responsive = {data: {}} } = state.httpDataReducer;
//   return {
//     responsive
//   };
// };
//
// export default withRouter(connect(mapStateToProps)(Index));
export default withRouter(connectAlita(['responsive'])(HeaderCustom));
