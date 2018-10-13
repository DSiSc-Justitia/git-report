import React, { Component } from 'react';
import DeveloperLinesChart from './components/DeveloperLinesChart';
import DeveloperCommitsChart from './components/DeveloperCommitsChart';
import RepositoryLinesChart from './components/RepositoryLinesChart';
import RepositoryCommitsChart from './components/RepositoryCommitsChart';
//import TabChart from './components/TabChart';

export default class Business extends Component {
  static displayName = 'Business';

  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <div>
        <DeveloperLinesChart />
        <DeveloperCommitsChart />
        <RepositoryLinesChart />
        <RepositoryCommitsChart />
      </div>
    );
  }
}
