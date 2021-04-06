import React, { Component } from "react";
import {Row, Col, Card, Spin, Alert, Switch, Button} from "antd";
import NProgress from "nprogress";
import BreadcrumbCustom from "../../components/BreadcrumbCustom";
import "nprogress/nprogress.css";

class Spins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  render() {
    return (
      <div className="gutter-example button-demo">
        <BreadcrumbCustom first="UI" second="加载中" />
        <Row gutter={16}>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Spin />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Spin size="small" />
                <Spin style={{ margin: '0 50px' }}/>
                <Spin size="large" />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Spin tip="Index...">
                  <Alert
                    type="info"
                    message="Alert message title"
                    description="Further details about the context of this alert."
                  />
                </Spin>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false}>
                <Spin spinning={this.state.loading}>
                  {
                    <Alert
                      type="info"
                      message="Alert message title"
                      description="Further details about the context of this alert."
                    />
                  }
                </Spin>
                Index state：<Switch checked={this.state.loading} onChange={this.toggle} />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={12}>
            <div className="gutter-box">
              <Card bordered={false} title='顶部进度条'>
                <p>
                  <Button icon="caret-right" onClick={this.nProgressStart} />
                  <span> NProgress.start() — 显示进度条</span>
                </p>
                <p style={{marginTop: 20}}>
                  <Button icon="caret-right" onClick={this.nProgressDone} />
                  <span>  NProgress.done() — 进度条完成</span>
                </p>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  toggle = (value) => {
    this.setState({
      loading: value
    });
  };

  nProgressStart = () => {
    NProgress.start();
  };

  nProgressDone = () => {
    NProgress.done();
  };
}

export default Spins;
