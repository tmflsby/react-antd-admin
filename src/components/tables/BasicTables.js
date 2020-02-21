import React from "react";
import { Row, Col, Card } from "antd";
import BreadcrumbCustom from "../BreadcrumbCustom";
import BasicTable from "./BasicTable";
import SortTable from "./SortTable";
import SelectTable from "./SelectTable";
import SearchTable from "./SearchTable";

const BasicTables = () => {
  return (
    <div className="gutter-example">
      <BreadcrumbCustom first='表格' second='基础表格'/>
      <Row gutter={16}>
        <Col className="gutter-row" span={24}>
          <div className="gutter-box">
            <Card title="基础表格" bordered={false}>
              <BasicTable />
            </Card>
          </div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={24}>
          <div className="gutter-box">
            <Card title="可选择表格" bordered={false}>
              <SelectTable />
            </Card>
          </div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <div className="gutter-box">
            <Card title="可控的筛选和排序" bordered={false}>
              <SortTable />
            </Card>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="gutter-box">
            <Card title="自定义筛选" bordered={false}>
              <SearchTable />
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BasicTables;
