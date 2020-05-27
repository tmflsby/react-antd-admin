import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData, receiveData } from "../../store/actions";
import PwaInstaller from "../widget/PwaInstaller";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.props.receiveData(null, 'auth');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { auth: nextAuth = {}, history } = this.props;
    if (nextAuth.data && nextAuth.data.uid) { // 判断是否登录
      window.localStorage.setItem('user', JSON.stringify(nextAuth.data));
      history.push('/');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of Form: ', values);
        const { fetchData } = this.props;
        if (values.userName === 'admin' && values.password === 'admin') {
          return fetchData({funcName: 'admin', stateName: 'auth'});
        }
        if (values.userName === 'guest' && values.password === 'guest') {
          return fetchData({funcName: 'guest', stateName: 'auth'});
        }
      }
    });
  };

  gitHub = () => {
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3000/&scope=user&state=reactAdmin';
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <div className="login-form">
          <div className="login-logo">
            <span>React Admin</span>
            <PwaInstaller />
          </div>
          <Form onSubmit={this.handleSubmit} style={{ maxWidth: 300 }}>
            <Form.Item>
              {
                getFieldDecorator('userName', {
                  rules: [
                    {
                      required: true,
                      message: '请输入用户名！'
                    }
                  ]
                })(
                  <Input prefix={<Icon type='user' style={{ fontSize: 13 }}/>}
                         placeholder="管理员输入admin, 游客输入guest"
                         autoComplete='username'
                  />
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码！'
                    }
                  ]
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                         type="password" placeholder="管理员输入admin, 游客输入guest"
                         autoComplete='current-password'
                  />
                )
              }
            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Checkbox>记住我</Checkbox>
                )
              }
              <span className="login-form-forgot" style={{ float: 'right' }}>忘记密码</span>
              <Button type='primary' htmlType='submit' className='login-form-button' style={{ width: '100%' }}>
                登录
              </Button>
              <p style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>或 现在就去注册!</span>
                <span onClick={this.gitHub} >
                  <Icon type="github" />(第三方登录)
                </span>
              </p>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.httpDataReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: bindActionCreators(fetchData, dispatch),
    receiveData: bindActionCreators(receiveData, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));
