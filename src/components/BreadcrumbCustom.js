import React, { Component  } from "react";
import { Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";

class BreadcrumbCustom extends Component {
  render() {
    const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || '';
    const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || '';

    return (
      <div>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item><NavLink to='/app/dashboard/index' replace>首页</NavLink></Breadcrumb.Item>
          {first}
          {second}
        </Breadcrumb>
      </div>
    );
  }
}

export default BreadcrumbCustom;
