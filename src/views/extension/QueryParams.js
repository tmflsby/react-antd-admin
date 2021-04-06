import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import BreadcrumbCustom from "../../components/BreadcrumbCustom";

class QueryParams extends Component{
  render() {
    return (
      <div>
        <BreadcrumbCustom first="queryParams"/>
        <Row gutter={16}>
          <Col md={24}>
            <Card title="query参数Demo" bordered={false}>
              <div>参数1： {this.props.query.param1}</div>
              <div>参数2： {this.props.query.param2}</div>
              <div>
                其他参数： {this.props.query.others || <a href="#/app/extension/queryParams?others=nothing">点击查看</a>}
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

}

export default QueryParams;
