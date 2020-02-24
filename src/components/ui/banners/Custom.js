import React, { Component } from "react";
import RcBannerAnim, { Element, Arrow, Thumb } from "rc-banner-anim";
import RcTweenOne, { TweenOneGroup } from "rc-tween-one";
import "rc-banner-anim/assets/index.css";

class Custom extends Component {
  constructor(props) {
    super(props);
    this.imgArray = [
      'https://zos.alipayobjects.com/rmsportal/hzPBTkqtFpLlWCi.jpg',
      'https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg',
    ];
    this.state = {
      intShow: 0,
      prevEnter: false,
      nextEnter: false,
      thumbEnter: false,
    };
    [
      'onChange',
      'prevEnter',
      'prevLeave',
      'nextEnter',
      'nextLeave',
      'onMouseEnter',
      'onMouseLeave',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  onChange(type, int) {
    if (type === 'before') {
      this.setState({
        intShow: int,
      });
    }
  }

  getNextPrevNumber() {
    let nextInt = this.state.intShow + 1;
    let prevInt = this.state.intShow - 1;
    if (nextInt >= this.imgArray.length) {
      nextInt = 0;
    }
    if (prevInt < 0) {
      prevInt = this.imgArray.length - 1;
    }

    return [prevInt, nextInt];
  }

  prevEnter() {
    this.setState({
      prevEnter: true,
    });
  }

  prevLeave() {
    this.setState({
      prevEnter: false,
    });
  }

  nextEnter() {
    this.setState({
      nextEnter: true,
    });
  }

  nextLeave() {
    this.setState({
      nextEnter: false,
    });
  }

  onMouseEnter() {
    this.setState({
      thumbEnter: true,
    });
  }

  onMouseLeave() {
    this.setState({
      thumbEnter: false,
    });
  }

  render() {
    const intArray = this.getNextPrevNumber();
    const thumbChildren = this.imgArray.map((img, i) => {
      return (
        <span key={i}><i style={{ backgroundImage: `url(${img})` }} /></span>
      );
    });

    return (
      <RcBannerAnim onChange={this.onChange} onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave} prefixCls="custom-arrow-thumb"
      >
        <Element key="aaa" prefixCls="banner-user-elem">
          <Element.BgElement key="bg" className="bg"
                             style={{
                               backgroundImage: `url(${this.imgArray[0]})`,
                               backgroundSize: 'cover',
                               backgroundPosition: 'center'
                             }}
          />
          <RcTweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </RcTweenOne>
          <RcTweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
            The Fast Way Use Animation In React
          </RcTweenOne>
        </Element>
        <Element key="bbb" prefixCls="banner-user-elem">
          <Element.BgElement key="bg" className="bg"
                             style={{
                               backgroundImage: `url(${this.imgArray[1]})`,
                               backgroundSize: 'cover',
                               backgroundPosition: 'center',
                             }}
          />
          <RcTweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </RcTweenOne>
          <RcTweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
            The Fast Way Use Animation In React
          </RcTweenOne>
        </Element>
        <Arrow arrowType="prev" key="prev" prefixCls="user-arrow" component={RcTweenOne}
               onMouseEnter={this.prevEnter} onMouseLeave={this.prevLeave}
               animation={{ left: this.state.prevEnter ? 0 : -120 }}
        >
          <div className="arrow" />
          <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}
                         appear={false} className="img-wrapper" component="ul"
          >
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})`}} key={intArray[0]} />
          </TweenOneGroup>
        </Arrow>
        <Arrow arrowType="next" key="next" prefixCls="user-arrow" component={RcTweenOne}
               onMouseEnter={this.nextEnter} onMouseLeave={this.nextLeave}
               animation={{ right: this.state.nextEnter ? 0 : -120 }}
        >
          <div className="arrow" />
          <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}
                         appear={false} className="img-wrapper" component="ul"
          >
            <li style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})`}} key={intArray[1]} />
          </TweenOneGroup>
        </Arrow>
        <Thumb prefixCls="user-thumb" key="thumb" component={RcTweenOne}
               animation={{ bottom: this.state.thumbEnter ? 0 : -70 }}
        >
          {thumbChildren}
        </Thumb>
      </RcBannerAnim>
    );
  }
}

export default Custom;
