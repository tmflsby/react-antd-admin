import React, { Component } from "react";
import { Icon, Form, Input, Button } from "antd";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalForm extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const {
      getFieldDecorator, getFieldsError,
      getFieldError, isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('horizontalUserName') && getFieldError('horizontalUserName');
    const passwordError = isFieldTouched('horizontalPassword') && getFieldError('horizontalPassword');

    return (
      <Form layout='inline' onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {
            getFieldDecorator('horizontalUserName', {
              rules: [
                {
                  required: false,
                  message: '请输入用户名！'
                }
              ]
            })(
              <Input
                prefix={<Icon type='user' style={{ fontSize: 13 }}/>}
                placeholder='用户名'
                autoComplete='username'
              />
            )
          }
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {
            getFieldDecorator('horizontalPassword', {
              rules: [
                {
                  required: false,
                  message: '请输入密码！'
                }
              ]
            })(
              <Input
                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                type='password'
                placeholder="密码"
                autoComplete='new-password'
              />
            )
          }
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(HorizontalForm);
