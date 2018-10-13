import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import ReactEcharts from 'echarts-for-react';
import author_commit_data from './author_commit_data'
/**
 * 图表来源参考：http://gallery.echartsjs.com/editor.html?c=xHyE7GIMdG
 */
export default class BarLineChart extends Component {
  static displayName = 'BarLineChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  getOption = () => {
    return {
      title: {
        text: 'developer - number of commits',
        left: 'center',
        y: '2',
        textStyle: {
          color: '#666',
        },
      },
      backgroundColor: '#fff',
      color: '#384757',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#384757',
          },
        },
      },
      legend: {
        data: author_commit_data.data,
        top: '10%',
        textStyle: {
          color: '#fff',
        },
      },
      xAxis: author_commit_data.xAxis,
      yAxis: [
        {
          type: 'value',
          name: '',
          nameTextStyle: {
            color: '#666',
          },
          axisLabel: {
            show: false,
            textStyle: {
              color: '#666',
            },
          },
          axisLine: {
            show: true,
          },
          splitLine: {
            lineStyle: {
              color: '#666',
            },
          },
        },
        {
          type: 'value',
          name: 'number of commits',
          show: true,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#666',
            },
          },
        },
      ],
      grid: {
        top: '20%',
      },
      series: author_commit_data.series,
    };
  };

  render() {
    return (
      <div className="bar-line-chart">
        <IceContainer>
          <ReactEcharts option={this.getOption()} style={{ height: '350px' }} />
        </IceContainer>
      </div>
    );
  }
}
