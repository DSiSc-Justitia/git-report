import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Tab } from '@icedesign/base';
import SeriesLine from './SeriesLine';
import SeriesLine1 from './SeriesLine1';
import SeriesLine2 from './SeriesLine2';
import SeriesLine3 from './SeriesLine3';

const TabPane = Tab.TabPane;

export default class TabChart extends Component {
  static displayName = 'TabChart';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (key) => {
    console.log('change', key);
  };

  render() {
    return (
      <div className="tab-chart" style={styles.container}>
        <IceContainer style={styles.card}>
          <Tab onChange={this.handleChange}>
            <TabPane key="1" tab="repository - number of commits">
              <SeriesLine />
            </TabPane>
            <TabPane key="2" tab="repository - number of lines">
              <SeriesLine1 />
            </TabPane>
            <TabPane key="3" tab="developer - number of commits">
              <SeriesLine2 />
            </TabPane>
            <TabPane key="4" tab="developer - number of lines">
              <SeriesLine3 />
            </TabPane>
          </Tab>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  container: {
    marginBottom: '20px',
  },
  card: {
    padding: '0 20px',
  },
};
