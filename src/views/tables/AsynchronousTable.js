import React, { Component } from "react";
import { Table, Button, Row, Col, Card } from "antd";
import moment from "moment";
import { getBBCNews } from "../../axios";
import BreadcrumbCustom from "../../components/BreadcrumbCustom";

const columns = [
  {
    title: '新闻标题',
    dataIndex: 'title',
    width: 100,
    render: (text, record) => <a href={record.url} target="_blank" rel="noopener noreferrer">{text}</a>
  }, {
    title: '作者',
    dataIndex: 'author',
    width: 80
  }, {
    title: '发布时间',
    dataIndex: 'publishedAt',
    render: (date) => {
      return moment(date).format('YYYY-MM-DD hh:mm:ss');
    },
    width: 150
  }, {
    title: '描述',
    dataIndex: 'description',
    width: 200
  }
];

class AsynchronousTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      data: []
    }
  }

  componentDidMount() {
    this.start();
  }

  start() {
    this.setState({
      loading: true
    });
    getBBCNews().then(({articles}) => {
      articles.map((item, index) => {
        return item.key = index;
      });
        this.setState({
        data: articles,
        loading: false
      });
    }).catch(error => {
      console.log(error);
    });
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({
      selectedRowKeys
    });
  };

  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div className="gutter-example">
        <BreadcrumbCustom first="表格" second="异步表格" />
        <Row gutter={16}>
          <Col className="gutter-row" md={24}>
            <div className="gutter-box">
              <Card title="异步表格--BBC新闻今日热门" bordered={false}>
                <div style={{ marginBottom: 16 }}>
                  <Button
                    type="primary"
                    disabled={loading}
                    loading={loading}
                    onClick={this.start.bind(this)}
                  >
                    Reload
                  </Button>
                  <span style={{ marginLeft: 8 }}>
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                  </span>
                </div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AsynchronousTable;
