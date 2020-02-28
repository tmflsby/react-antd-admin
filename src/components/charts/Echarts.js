import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import EchartsArea from "./EchartsArea";
import EchartsGraphnpm from "./EchartsGraphnpm";
import EchartsPie from "./EchartsPie";
import EchartsScatter from "./EchartsScatter";
import EchartsEffectScatter from "./EchartsEffectScatter";
import EchartsForce from "./EchartsForce";

class Echarts extends Component {
  render() {
    return (
      <div className='guttrer-example'>
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
            <div className="gutter-box">
              <Card title="区域图" bordered={false}>
                <EchartsArea />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
            <div className="gutter-box">
              <Card title="散点图--1" bordered={false}>
                <EchartsScatter />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={24}>
            <div className="gutter-box">
              <Card title="散点图--2" bordered={false}>
                <EchartsEffectScatter />
              </Card>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={8}>
            <div className="gutter-box">
              <Card title="关系图--1" bordered={false}>
                <EchartsGraphnpm />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="gutter-box">
              <Card title="关系图--2" bordered={false}>
                <EchartsForce />
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" span={8}>
            <div className="gutter-box">
              <Card title="饼图" bordered={false}>
                <EchartsPie />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Echarts;
