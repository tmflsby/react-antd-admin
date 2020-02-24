import React, { Component } from "react";
import { Menu, Icon, Layout, Badge } from "antd";
import screenfull from "screenfull";
import { gitOauthInfo, gitOauthToken } from "../axios";
import { queryString } from "../utils";
import avater from "../style/imgs/b1.jpg";
const { Header } = Layout;

class HeaderCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    };
  }

  componentDidMount() {
    const QueryString = queryString();
    const _user = JSON.parse(localStorage.getItem('user')) || '测试';
    if (!_user && QueryString.hasOwnProperty('code')) {
      gitOauthToken(QueryString.code).then(res => {
        gitOauthInfo(res.access_token).then(info => {
          this.setState({
            user: info
          });
          localStorage.setItem('user', JSON.stringify(info));
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
    } else {
      // Ignore or do something else
    }
  };

  render() {
    return (
      <Header className="custom-theme" style={{ background: '#fff', padding: 0, height: 65 }}>
        <Icon
          className="trigger custom-trigger"
          type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
        <Menu mode='horizontal' style={{ lineHeight: '64px', float: 'right' }}>
          <Menu.Item key="full" onClick={this.screenFull} >
            <Icon type="arrows-alt" onClick={this.screenFull} />
          </Menu.Item>
          <Menu.Item key='1'>
            <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
              <Icon type="notification" />
            </Badge>
          </Menu.Item>
          <Menu.SubMenu title={
                          <span className="avatar">
                            <img src={avater} alt="头像" />
                            <i className="on bottom b-white" />
                          </span>
                        }
          >
            <Menu.ItemGroup title='用户中心'>
              <Menu.Item key='setting:1'>你好-{this.state.user.login}</Menu.Item>
              <Menu.Item key="setting:2">个人信息</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title='设置中心'>
              <Menu.Item key='setting:3'>个人设置</Menu.Item>
              <Menu.Item key='setting:4'>系统设置</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>
        <style>
          {`
            .ant-menu-submenu-horizontal > .ant-menu {
              width: 120px;
              left: -40px;
            }
          `}
        </style>
      </Header>
    );
  }
}

export default HeaderCustom;
