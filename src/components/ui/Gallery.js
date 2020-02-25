import React, { Component } from "react";
import { Row, Col, Card } from "antd";
import PhotoSwipe from "photoswipe";
import PhotoswipeUIDefault from "photoswipe/dist/photoswipe-ui-default";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";
import BreadcrumbCustom from "../BreadcrumbCustom";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: null
    };
  }

  componentWillUnmount() {
    this.closeGallery();
  }

  openGallery = (item) => {
    const items = [{ src: item, w: 0, h: 0 }];
    const pswpElement = this.pswpElement;
    const options = {index: 0};

    this.gallery = new PhotoSwipe( pswpElement, PhotoswipeUIDefault, items, options);
    this.gallery.listen('gettingData', (index, item) => {
      const _this = this;
      if (item.w < 1 || item.h < 1) { // unknown size
        let img = new Image();
        img.onload = function() { // will get size after load
          item.w = this.width; // set image width
          item.h = this.height; // set image height
          _this.gallery.invalidateCurrItems(); // reinit Items
          _this.gallery.updateSize(true); // reinit Items
        };
        img.src = item.src; // let's download image
      }
    });
    this.gallery.init();
  };

  closeGallery = () => {
    if (!this.gallery) return;
    this.gallery.close();
  };

  render() {
    const imgs = [
      ['1.png', '2.png', '3.png', '4.png', '5.png'],
      ['6.png', '7.png', '8.png', '9.png', '10.png'],
      ['11.png', '12.png', '13.png', '14.png', '15.png'],
      ['16.png', '17.png', '18.png', '19.png', '20.png'],
      ['21.png', '22.png', '23.png', '24.png', '25.png']
    ];
    const imgsTag = imgs.map(item1 => {
      return (
        item1.map((item2, index) => {
          return (
            <div className="gutter-box">
              <Card bordered={false} bodyStyle={{ padding: 0 }}>
                <div>
                  <img onClick={() => this.openGallery(item2)} alt="example"
                       width="100%" src={'/gallery/' + item2} key={index}
                  />
                </div>
                <div className="pa-m">
                  <h3>React Admin</h3>
                  <small>
                    <a href="https://github.com/tmflsby/react-admin" target="_blank"  rel="noopener noreferrer" >
                      https://github.com/tmflsby/react-admin
                    </a>
                  </small>
                </div>
              </Card>
            </div>
          );
        })
      );
    });

    return (
      <div className="gutter-example button-demo">
        <BreadcrumbCustom first='UI' second='画廊'/>
        <Row gutter={10}>
          <Col className="gutter-row" span={5}>
            {imgsTag[0]}
          </Col>
          <Col className="gutter-row" span={5}>
            {imgsTag[1]}
          </Col>
          <Col className="gutter-row" span={5}>
            {imgsTag[2]}
          </Col>
          <Col className="gutter-row" span={5}>
            {imgsTag[3]}
          </Col>
          <Col className="gutter-row" span={4}>
            {imgsTag[4]}
          </Col>
        </Row>
        <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true"
             ref={(div) => {this.pswpElement = div;} }
        >
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button className="pswp__button pswp__button--close" title="Close (Esc)" />
                <button className="pswp__button pswp__button--share" title="Share" />
                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
                <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />
              <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>
        <style>
          {`
            .ant-card-body img {
              cursor: pointer;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Gallery;
