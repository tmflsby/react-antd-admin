import React from "react";
import { Table, Icon } from "antd";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => {
      return (
        <a href="#/app/table/basicTable">{text}</a>
      );
    }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => {
      return (
        <span>
          <a href="#/app/table/basicTable">Action 一 {record.name}</a>
          <span className="ant-divider" />
          <a href="#/app/table/basicTable">Delete</a>
          <span className="ant-divider" />
          <a href="#/app/table/basicTable" className="ant-dropdown-link">
            More actions
            <Icon type="down" />
          </a>
        </span>
      );
    }
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  }
];

const BasicTable = () => {
  return (
    <Table columns={columns} dataSource={data}/>
  );
};

export default BasicTable;
