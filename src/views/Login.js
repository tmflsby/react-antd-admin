import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";

class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of Form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className='login'>
        <div className="login-form">
          <div className="login-logo">
            <span>React Admin</span>
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
                  <Input prefix={<Icon type='user' style={{ fontSize: 13 }}/>} placeholder="用户名"/>
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
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码"/>
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
              <a href="#/login" className="login-form-forgot" style={{ float: 'right' }}>忘记密码</a>
              <Button type='primary' htmlType='submit' className='login-form-button' style={{ width: '100%' }}>
                登录
              </Button>
              或<a href="#/login">现在就去注册！</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(Login);
