import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import ReactEcharts from 'echarts-for-react';
import axios from "axios";

/**
 * 图表来源参考：http://gallery.echartsjs.com/editor.html?c=xHyE7GIMdG
 */
const chartDataUrl = "https://dsisc.github.io/git-report/data/author_codeline_data.json";
export default class BarLineChart extends Component {
  static displayName = 'BarLineChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        data:[],
        xAxis:[{
          type: "category",
          axisLabel: {
              "show": "false",
              "textStyle": {
                  "color": "#666"
              }
          }
        }],
        series:[]
      }
    };
  }

  componentDidMount() {
    axios.get(chartDataUrl).then((resp) => {
      this.setState({
        chartData: resp
      });
    });
  }

  getOption = () => {
    return {
      title: {
        text: 'developer - number of lines',
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
        data: this.state.chartData.data,
        top: '10%',
        textStyle: {
          color: '#fff',
        },
      },
      xAxis: this.state.chartData.xAxis,
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
          name: 'number of lines',
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
      series: this.state.chartData.series,
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
