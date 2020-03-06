import React, { Component } from "react";
import { Layout } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./style/index.less";
import Router from "./routers";
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
    this.getClientWidth();
    window.onresize = () => {
      console.log('屏幕变化了');
      this.getClientWidth();
    }
  }

  getClientWidth = () => { // 获取当前浏览器宽度并设置responsive管理响应式
    const clientWidth = document.body.clientWidth;
    this.props.receiveData({
      isMobile: clientWidth <= 992,
    }, 'responsive')
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        {!this.props.responsive.data.isMobile && <SiderCustom collapsed={this.state.collapsed}/>}
        <Layout style={{ flexDirection: 'column' }}>
          <HeaderCustom toggle={this.toggle} user={this.props.auth.data || {}}
                        collapsed={this.state.collapsed}
          />
          <Layout.Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
            <Router auth={this.props.auth}/>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>
            React-Admin ©2020 Created by 帅洋
          </Layout.Footer>
        </Layout>
        {
          this.props.responsive.data.isMobile && ( // 手机端对滚动很慢的处理
            <style>
              {`
                #root {
                  height: auto;
                }
              `}
            </style>
          )
        }
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const { auth = {data: {}}, responsive = {data: {}} } = state.httpDataReducer;
  return {
    auth,
    responsive
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveData: bindActionCreators(receiveData, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
