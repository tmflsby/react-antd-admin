import React, { Component } from "react";
import RcBannerAnim, { Element } from "rc-banner-anim";
import RcTweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";

class AutoPlay extends Component {
  render() {
    return (
      <RcBannerAnim  prefixCls="banner-user" autoPlay>
        <Element prefixCls="banner-user-elem" key="0">
          <Element.BgElement key="bg" className="bg" style={{ background: '#364D79' }}
          />
          <RcTweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </RcTweenOne>
          <RcTweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
            The Fast Way Use Animation In React
          </RcTweenOne>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <Element.BgElement key="bg" className="bg" style={{ background: '#64CBCC' }}/>
          <RcTweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
            Ant Motion Banner
          </RcTweenOne>
          <RcTweenOne className="banner-user-text" animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
            The Fast Way Use Animation In React
          </RcTweenOne>
        </Element>
      </RcBannerAnim>
    );
  }
}

export default AutoPlay;
