import React, { Component } from "react";
import { Layout } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./style/index.less";
import SiderCustom from "./components/SiderCustom";
import HeaderCustom from "./components/HeaderCustom";
import { receiveData } from "./store/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    user && this.props.receiveData(user, 'auth');
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
          <HeaderCustom toggle={this.toggle} user={this.props.auth.data || {}} router={this.props.router}/>
          <Layout.Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
            {this.props.children}
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>React-Admin ©2020 Created by 帅洋</Layout.Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.getIn(['httpDataReducer', 'auth'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveData: bindActionCreators(receiveData, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
