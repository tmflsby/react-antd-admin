import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import { weibo } from "../../axios";
require('echarts/map/js/china');

class EchartsScatter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: {
        backgroundColor: '#404a59',
        title : {
          text: '微博签到数据点亮中国',
          subtext: 'From ThinkGIS',
          sublink: 'http://www.thinkgis.cn/public/sina',
          left: 'center',
          top: 'top',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {},
        legend: {
          left: 'left',
          data: ['强', '中', '弱'],
          textStyle: {
            color: '#ccc'
          }
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        },
        series: [{
          name: '弱',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 1,
          large: true,
          itemStyle: {
            normal: {
              shadowBlur: 2,
              shadowColor: 'rgba(37, 140, 249, 0.8)',
              color: 'rgba(37, 140, 249, 0.8)'
            }
          },
          data: []
        }, {
          name: '中',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 1,
          large: true,
          itemStyle: {
            normal: {
              shadowBlur: 2,
              shadowColor: 'rgba(14, 241, 242, 0.8)',
              color: 'rgba(14, 241, 242, 0.8)'
            }
          },
          data: []
        }, {
          name: '强',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbolSize: 1,
          large: true,
          itemStyle: {
            normal: {
              shadowBlur: 2,
              shadowColor: 'rgba(255, 255, 255, 0.8)',
              color: 'rgba(255, 255, 255, 0.8)'
            }
          },
          data: []
        }]
      }
    }
  }

  componentDidMount() {
    weibo().then(weiboData => {
      weiboData = weiboData.map((seriesData, idx) => {
        let px = seriesData[0] / 1000;
        let py = seriesData[1] / 1000;
        let res = [[px, py]];

        for (let i = 2; i < seriesData.length; i += 2) {
          let dx = seriesData[i] / 1000;
          let dy = seriesData[i + 1] / 1000;
          let x = px + dx;
          let y = py + dy;

          res.push([x.toFixed(2), y.toFixed(2), 1]);
          px = x;
          py = y;
        }

        return res;
      });
      this.setState({
        option: {
          series: [
            { data: weiboData[0] },
            { data: weiboData[1] },
            { data: weiboData[2] }
          ]
        }
      });
    })
  }

  render() {
    return (
      <ReactEcharts
        className={'react_for_echarts'}
        style={{
          height: 400,
          width: '100%'
        }}
        option={this.state.option}
      />
    );
  }
}

export default EchartsScatter;
