import React, { Component } from 'react';
import Carousel from '../Carousel/Carousel';
import { getJSON } from '../../utils/fetch';
import { decorateMoneyValue } from '../../utils';

import './dashboard.scss';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      userData: this.getUserData(),
    };
  }

  getUserData() {
    return getJSON('https://s3.amazonaws.com/cdn.clearscore.com/native/interview_test/creditReportInfo.json')
      .then(resp => this.setState({ userData: resp }));
  }

  getSlides() {
    const {
      score,
      maxScoreValue,
      currentLongTermDebt,
      currentLongTermCreditLimit,
      daysUntilNextReport,
    } = this.state.userData.creditReportInfo;

    return [
      {
        className: 'credit-score',
        top: 'Your credit score is',
        middle: score,
        bottom: `out of ${maxScoreValue}`,
        arcDetails: {
          color: '#f7df71',
          percentage: Math.round((score / maxScoreValue) * 100),
        },
      },
      {
        className: 'long-term-debt',
        top: 'Your long term debt total',
        middle: decorateMoneyValue(currentLongTermDebt),
        bottom: `Total credit limit ${currentLongTermCreditLimit || 0}`,
        arcDetails: null,
      },
      {
        className: 'next-report-delta',
        top: 'Your next report is in',
        middle: daysUntilNextReport,
        bottom: 'Days',
        arcDetails: {
          color: '#89bcdb',
          percentage: Math.ceil((daysUntilNextReport / 30) * 100),
        },
      },
    ];
  }

  render() {
    return this.state.userData.creditReportInfo
      ? <Carousel slides={this.getSlides()} slideDurationMs={5500} />
      : null;
  }
}
