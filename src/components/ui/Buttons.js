import React, { Component } from "react";
import {Button, Card, Col, Row, Radio, Icon, Dropdown, Menu} from "antd";
import BreadcrumbCustom from "../BreadcrumbCustom";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'default',
      loading: false,
      iconLoading: false
    };
  }

  render() {
    return (
      <div className="gutter-example button-demo">
        <BreadcrumbCustom first='UI' second='按钮'/>
        <Row gutter={16}>
          <Col className='gutter-row' md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Button type='primary'>Primary</Button>
                <Button>Default</Button>
                <Button type='dashed'>Dashed</Button>
                <Button type='danger'>Danger</Button>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Button type="primary" shape="circle" icon="search" />
                <Button type="primary" icon="search">Search</Button>
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <br />
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <Button type="dashed" shape="circle" icon="search" />
                <Button type="dashed" icon="search">Search</Button>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
                  <Radio.Button value="large">Large</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br /><br />
                <Button type="primary" shape="circle" icon="download" size={this.state.size} />
                <Button type="primary" icon="download" size={this.state.size}>Download</Button>
                <Button type="primary" size={this.state.size}>Normal</Button>
                <br />
                <Button.Group size={this.state.size}>
                  <Button type="primary">
                    <Icon type="left" />Backward
                  </Button>
                  <Button type="primary">
                    Forward<Icon type="right" />
                  </Button>
                </Button.Group>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Button type="primary">primary</Button>
                <Button>secondary</Button>
                <Dropdown overlay={
                  <Menu onClick={this.handleMenuClick}>
                    <Menu.Item key='1'>1st item</Menu.Item>
                    <Menu.Item key='2'>2st item</Menu.Item>
                    <Menu.Item key='3'>3st item</Menu.Item>
                  </Menu>
                }>
                  <Button>
                    more <Icon type="down" />
                  </Button>
                </Dropdown>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Button type="primary" loading>Loading</Button>
                <Button type="primary" size="small" loading>Loading</Button>
                <br />
                <Button type="primary"
                        loading={this.state.loading}
                        onClick={this.enterLoading}
                >
                  Click me!
                </Button>
                <Button type="primary" icon="poweroff"
                        loading={this.state.iconLoading}
                        onClick={this.enterIconLoading}
                >
                  Click me!
                </Button>
                <br />
                <Button shape="circle" loading />
                <Button type="primary" shape="circle" loading />
              </Card>
            </div>
          </Col>
        </Row>
        <style>
          {`
            .button-demo .ant-btn {
              margin-right: 8px;
              margin-bottom: 12px;
            }
          `}
        </style>
      </div>
    );
  }

  handleSizeChange = (e) => {
    this.setState({
      size: e.target.value
    });
  };

  handleMenuClick = (e) => {
    console.log('click', e);
  };

  enterLoading = () => {
    this.setState({
      loading: true
    });
  };

  enterIconLoading = () => {
    this.setState({
      iconLoading: true
    });
  };
}

export default Buttons;
