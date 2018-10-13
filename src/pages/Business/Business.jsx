import React, { Component } from 'react';
import BarLineChart from './components/BarLineChart';
import BarLineChart1 from './components/BarLineChart1';
import BarLineChart2 from './components/BarLineChart2';
import BarLineChart3 from './components/BarLineChart3';
//import TabChart from './components/TabChart';

export default class Business extends Component {
  static displayName = 'Business';

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div>
        <BarLineChart />
        <BarLineChart1 />
        <BarLineChart2 />
        <BarLineChart3 />
      </div>
    );
  }
}
