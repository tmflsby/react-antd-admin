import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import draftToMarkdown from "draftjs-to-markdown";
import BreadcrumbCustom from "../../components/BreadcrumbCustom";

class Wysiwyg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: undefined,
      editorState: ''
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  onEditorChange = (editorContent) => {
    this.setState({
      editorContent
    });
  };

  imageUploadCallBack = (file) => new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
      const data = new FormData(); // eslint-disable-line no-undef
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );

  render() {
    return (
      <div className="gutter-example button-demo">
        <BreadcrumbCustom first='UI' second='富文本'/>
        <Row gutter={16}>
          <Col className='gutter-row' md={24}>
            <div className="gutter-box">
              <Card title='富文本编辑器' bordered={false}>
                <Editor
                  toolbarClassName='home-toolbar'
                  wrapperClassName='home-wrapper'
                  editorClassName='home-editor'
                  spellCheck
                  editorState={this.state.editorState}
                  onEditorStateChange={this.onEditorStateChange}
                  onContentStateChange={this.onEditorChange}
                  toolbar={{
                    history: { inDropdown: true },
                    inline: { inDropdown: false },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    image: { uploadCallback: this.imageUploadCallBack }
                  }}
                  placeholder="请输入正文~~尝试@哦，有惊喜"
                  onFocus={() => {console.log('focus')}}
                  onBlur={() => {console.log('blur')}}
                  onTab={() => {console.log('tab'); return true;}}
                  localization={{ locale: 'zh', translations: {'generic.add': 'Test-Add'} }}
                  mention={{
                    separator: ' ',
                    trigger: '@',
                    caseSensitive: true,
                    suggestions: [
                      { text: 'A', value: 'AB', url: 'href-a' },
                      { text: 'AB', value: 'ABC', url: 'href-ab' },
                      { text: 'ABC', value: 'ABCD', url: 'href-abc' },
                      { text: 'ABCD', value: 'ABCDDDD', url: 'href-abcd' },
                      { text: 'ABCDE', value: 'ABCDE', url: 'href-abcde' },
                      { text: 'ABCDEF', value: 'ABCDEF', url: 'href-abcdef' },
                      { text: 'ABCDEFG', value: 'ABCDEFG', url: 'href-abcdefg' }
                    ]
                  }}
                />
                <style>
                  {`
                    .home-editor {
                      min-height: 300px;
                    }
                  `}
                </style>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={8}>
            <Card title="同步转换HTML" bordered={false}>
              <pre>{draftToHtml(this.state.editorContent)}</pre>
            </Card>
          </Col>
          <Col className="gutter-row" md={8}>
            <Card title="同步转换MarkDown" bordered={false}>
              <pre style={{whiteSpace: 'pre-wrap'}}>{draftToMarkdown(this.state.editorContent)}</pre>
            </Card>
          </Col>
          <Col className="gutter-row" md={8}>
            <Card title="同步转换JSON" bordered={false}>
              <pre style={{whiteSpace: 'normal'}}>{JSON.stringify(this.state.editorContent)}</pre>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Wysiwyg;
