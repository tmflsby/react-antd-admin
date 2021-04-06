import React from "react";
import BreadcrumbCustom from "../../components/BreadcrumbCustom";
import { Row, Col, Card } from "antd";

const MultipleMenu = () => {
  return (
    <div>
      <BreadcrumbCustom first="多级菜单"/>
      <Row gutter={16}>
        <Col md={24}>
          <Card title="多级菜单" bordered={false}>
            <div>多级菜单的功能扩展</div>
            <div>菜单样式可能需要你来调整</div>
          </Card>
        </Col>
      </Row>
    </div>
  )
};

export default MultipleMenu;
