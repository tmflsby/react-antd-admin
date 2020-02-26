import React, { Component } from "react";
import { Layout } from 'antd';
import "./style/index.less";
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout className='ant-layout-has-sider'>
        <SiderCustom collapsed={this.state.collapsed}/>
        <Layout>
          <HeaderCustom toggle={this.toggle}/>
          <Layout.Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
            {this.props.children}
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>React-Admin ©2020 Created by 帅洋</Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
