import React from "react";
import { Row, Col, Card } from "antd";
import BreadcrumbCustom from "../../components/BreadcrumbCustom";

const Visitor = () => {
  return (
    <div>
      <BreadcrumbCustom first='visitor'/>
      <Row gutter={16}>
        <Col md={24}>
          <Card
            bodyStyle={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 500
            }}
            title="访客模式"
            bordered={false}
          >
            访客模式的页面，你不需要登录即可访问的页面
          </Card>
        </Col>
      </Row>
    </div>
  )
};

export default Visitor;
