import React, { Component } from "react";
import { Layout } from 'antd';
import "./style/index.less";
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout className='ant-layout-has-sider'>
        <SiderCustom />
        <Layout>
          <HeaderCustom />
          <Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
