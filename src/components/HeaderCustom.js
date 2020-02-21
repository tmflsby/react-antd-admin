import React, { Component } from "react";
import { Menu, Icon, Layout, Badge } from "antd";
const { Header } = Layout;

class HeaderCustom extends Component {
  render() {
    return (
      <Header style={{ background: '#fff', padding: 0, height: 65 }}>
        <Menu mode='horizontal' style={{ lineHeight: '64px', float: 'right' }}>
          <Menu.Item key='1'>
            <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
              <Icon type="notification" />
            </Badge>
          </Menu.Item>
          <Menu.SubMenu title={
                          <span>
                            <Icon type='user'/>你好 - 帅洋
                          </span>
                        }
          >
            <Menu.ItemGroup title='用户中心'>
              <Menu.Item key='setting:1'>个人信息</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title='设置中心'>
              <Menu.Item key='setting:3'>个人设置</Menu.Item>
              <Menu.Item key='setting:4'>系统设置</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>
      </Header>
    );
  }
}

export default HeaderCustom;
