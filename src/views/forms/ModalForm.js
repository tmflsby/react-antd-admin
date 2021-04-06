import React, { Component } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title='创建新收藏'
        okText='创建'
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout='vertical'>
          <Form.Item label='标题'>
            {
              getFieldDecorator('title', {
                rulesConfig: [
                  {
                    required: true,
                    message: '请输入收藏的标题'
                  }
                ]
              })(
                <Input/>
              )
            }
          </Form.Item>
          <Form.Item label='描述'>
            {
              getFieldDecorator('description')(
                <Input type='textarea'/>
              )
            }
          </Form.Item>
          <Form.Item
            className='collection-create-form_last-form-item'
            style={{ marginBottom: 0 }}
          >
            {
              getFieldDecorator('modifier', {
                initialValue: 'public'
              })(
                <Radio.Group>
                  <Radio value='public'>公开</Radio>
                  <Radio value='private'>私有</Radio>
                </Radio.Group>
              )
            }
          </Form.Item>
        </Form>
      </Modal>
    );
  }
);

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({
        visible: false
      });
    });
  };

  saveFormRef = (form) => {
    this.form = form;
  };

  render() {
    return (
      <div>
        <Button type='primary' onClick={this.showModal}>新建收藏</Button>
        <CollectionCreateForm ref={this.saveFormRef} visible={this.state.visible}
                              onCancel={this.handleCancel} onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default ModalForm;
