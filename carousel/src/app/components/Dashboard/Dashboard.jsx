import React, { Component } from 'react';
import { getJSON } from '../../utils/fetch';

import './dashboard.scss';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      userData: this.getUserData()
    };
  }

  getUserData() {
    return getJSON('https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json')
      .then(resp => this.setState({userData: resp.creditReportInfo}));
  }

  render() {
    if (!this.state.userData) {
      return null;
    }

    return (
      <div>
        {this.state.userData.score}
      </div>
    );
  }
}
