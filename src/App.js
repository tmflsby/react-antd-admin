import React, { Component } from "react";
import { Layout, notification, Icon } from "antd";
import DocumentTitle from "react-document-title";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { receiveData } from "./store/actions";
import CRouter from "./router/CRouter";
import SiderCustom from "./layout/SiderCustom";
import HeaderCustom from "./layout/HeaderCustom";
import ThemePicker from "./components/ThemePicker";
import { checkLogin, setLocalStorage, getLocalStorage } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      title: ''
    };
  }

  componentDidMount() {
    const user = getLocalStorage('user');

    user && this.props.receiveData(user, 'auth');

    this.getClientWidth();
    window.onresize = () => {
      console.log('屏幕变化了');
      this.getClientWidth();
    };

    const openNotification = () => {
      notification.open({
        message: '帅洋',
        description: (
          <div>
            <p>
              GitHub地址：
              <a
                href="https://github.com/tmflsby"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/tmflsby
              </a>
            </p>
          </div>
        ),
        icon: <Icon type="smile-circle" style={{ color: 'red' }}/>,
        duration: 0
      });
      setLocalStorage('isFirst', true);
    };

    const isFirst = getLocalStorage('isFirst');
    !isFirst && openNotification();
  }

  getClientWidth = () => {
    // 获取当前浏览器宽度并设置responsive管理响应式

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

  render() {
    const { title } = this.state;
    const { auth = { data: {} }, responsive = { data: {} } } = this.state;
    return (
      <DocumentTitle title={title}>
        <Layout>
          {
            !responsive.data.isMobile &&
            checkLogin(auth.data.permission) &&
            <SiderCustom collapsed={this.state.collapsed}/>
          }
          <ThemePicker/>
          <Layout style={{ flexDirection: 'column' }}>
            <HeaderCustom
              toggle={this.toggle}
              collapsed={this.state.collapsed}
              user={auth.data || {}}
            />
            <Layout.Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
              <CRouter auth={auth}/>
            </Layout.Content>
            <Layout.Footer style={{ textAlign: 'center' }}>
              React-AntD-Admin ©{new Date().getFullYear()} Created by 帅洋
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
