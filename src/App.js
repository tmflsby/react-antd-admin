import React, { Component } from "react";
import { Layout, notification, Icon } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { receiveData } from "./store/actions";
import Router from "./router";
import DocumentTitle from "react-document-title";
import SiderCustom from "./components/SiderCustom";
import HeaderCustom from "./components/HeaderCustom";
import ThemePicker from "./components/widget/ThemePicker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      title: ''
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    user && this.props.receiveData(user, 'auth');

    this.getClientWidth();
    window.onresize = () => {
      console.log('屏幕变化了');
      this.getClientWidth();
    };

    const openNotification = () => {
      notification.open({
        message: '帅🐏',
        description: (
          <div>
            <p>
              GitHub地址： <a href="https://github.com/tmflsby" target="_blank" rel="noopener noreferrer">https://github.com/tmflsby</a>
            </p>
          </div>
        ),
        icon: <Icon type="smile-circle" style={{ color: 'red' }}/>,
        duration: 0
      });
      window.localStorage.setItem('isFirst', JSON.stringify(true));
    };
    const isFirst = JSON.parse(window.localStorage.getItem('isFirst'));
    !isFirst && openNotification();
  }

  getClientWidth = () => { // 获取当前浏览器宽度并设置responsive管理响应式
    const clientWidth = window.innerWidth;
    this.props.receiveData({
      isMobile: clientWidth <= 992,
    }, 'responsive')
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  _setTitle = (title) => {
    if (this.state.title === title) return;
    this.setState({ title })
  };

  render() {
    return (
      <DocumentTitle title={this.state.title}>
        <Layout>
          {!this.props.responsive.data.isMobile && <SiderCustom collapsed={this.state.collapsed}/>}
          <ThemePicker/>
          <Layout style={{ flexDirection: 'column' }}>
            <HeaderCustom toggle={this.toggle} user={this.props.auth.data || {}}
                          collapsed={this.state.collapsed}
            />
            <Layout.Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
              <Router auth={this.props.auth} onRouterChange={this._setTitle}/>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
              React-Admin ©{new Date().getFullYear()} Created by 帅洋
            </Layout.Footer>
          </Layout>
        </Layout>
      </DocumentTitle>
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
