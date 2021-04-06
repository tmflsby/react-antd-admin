import React, { Component } from "react";
import { Table } from "antd";

const columns = [
  {
  title: 'Name',
  dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no.${i}`
  });
}

class SelectTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: []  // Check here to configure the default column
    };
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({
      selectedRowKeys
    });
  };

  render() {
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        {
          key: 'odd',
          text: '选择奇数列',
          onSelect: (changeableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changeableRowKeys.filter((key, index) => {
              return index % 2 === 0;
            });
            this.setState({
              selectedRowKeys: newSelectedRowKeys
            });
          }
        },
        {
          key: 'even',
          text: '选择偶数列',
          onSelect: (changeableRowKeys) => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changeableRowKeys.filter((key, index) => {
              return index % 2 !== 0;

            });
            this.setState({
              selectedRowKeys: newSelectedRowKeys
            });
          }
        }
      ],
      onSelection: this.onSelection
    };

    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={data}/>
    );
  }
}

export default SelectTable;
