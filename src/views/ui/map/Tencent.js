import React from "react";
import ReactQMap from "react-qmap";
import spot from "../../../style/imgs/spot_location.png";

const getContainer = (dom) => {
  const middleControl = document.createElement('div');
  middleControl.style.cssText = 'width: 22px; height: 30px; position: absolute; ' +
    'left: 50%; top: 50%; z-index: 999; margin-left: -23px; margin-top: -23px';

  middleControl.innerHTML =
    `<img src="${spot}" style="width: 100%;height: 100%;" alt=""/>`;

  dom.appendChild(middleControl);
};

const Tencent = () => {
  return (
    <ReactQMap
      style={{height: 500}}
      apiKey='UN6BZ-MP2W6-XWCSX-M2ATU-QORGZ-OWFOE'
      center={{latitude: 30.53786, longitude: 104.07265}}
      initialOptions={{zoomControl: true, mapTypeControl: true}}
      mySpot={{latitude: 30.53786, longitude: 104.07265}}
      getContainer={getContainer}
    />
  );
};

export default Tencent;
