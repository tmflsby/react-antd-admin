import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import BreadcrumbCustom from "../../components/BreadcrumbCustom";
import AuthWidget from "../../components/AuthWidget";

class RouterEnter extends Component {
  render() {
    return (
      <div>
        <BreadcrumbCustom first="权限管理" second="路由拦截" />
        <AuthWidget children={auth => {
          console.log(auth,1123)
          return (
            <Row>
              <Col md={24}>
                <Card
                  bodyStyle={{
                    minHeight: 600
                  }}
                  bordered={false}
                >
                  {
                    auth.permissions &&
                    auth.permissions.includes('auth') &&
                    <h2
                      className="center"
                      style={{
                        height: 500
                      }}
                    >
                      只有管理员登录才能看到该页面，否则跳转到404页面
                    </h2>
                  }
                </Card>
              </Col>
            </Row>
          );
        }}/>
      </div>
    );
  }
}

export default RouterEnter;
