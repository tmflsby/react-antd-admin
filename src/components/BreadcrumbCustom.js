import React from "react";
import { Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";

const BreadcrumbCustom = ({first, second}) => {
  first = <Breadcrumb.Item>{first}</Breadcrumb.Item> || '';
  second = <Breadcrumb.Item>{second}</Breadcrumb.Item> || '';
  return (
    <Breadcrumb style={{ margin: '12px 0' }}>
      <Breadcrumb.Item><NavLink to='/#'>首页</NavLink></Breadcrumb.Item>
      {first}
      {second}
    </Breadcrumb>
  );
};

export default BreadcrumbCustom;
