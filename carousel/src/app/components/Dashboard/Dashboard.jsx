import React, { Component } from 'react';
import Carousel from '../Carousel/Carousel';
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
      .then(resp => this.setState({userData: resp}));
  }

  render() {
    const { creditReportInfo } = this.state.userData;

    return creditReportInfo
      ? <Carousel data={creditReportInfo} slideDurationMs={5000} />
      : null;
  }
}
