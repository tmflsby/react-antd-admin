import React, { Component } from "react";
import { Form, Input, Icon, Button, Checkbox } from "antd";

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    })
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} style={{ maxWidth: 300 }}>
        <Form.Item>
          {
            getFieldDecorator('loginUserName', {
              rules: [
                {
                  required: true,
                  message: '请输入用户名！'
                }
              ]
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                     placeholder="用户名" autoComplete='username'
              />
            )
          }
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator('loginPassword', {
              rules: [
                {
                  required: true,
                  message: '请输入密码！'
                }
              ]
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                     type='password' placeholder='密码'
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
          <span className="login-form-forgot">忘记密码</span>
          <Button type='primary' className="login-form-button"
                  htmlType="submit" style={{ width: '100%' }}
          >
            登录
          </Button>
          或<span>现在就去注册</span>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
