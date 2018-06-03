import React, { Component } from 'react';
import Slide from '../Slide/Slide';
import { decorateMoneyValue } from '../../utils'

import './carousel.scss';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    const {
      score,
      maxScoreValue,
      currentLongTermDebt,
      currentLongTermCreditLimit,
      daysUntilNextReport
    } = this.props.data;

    this.state = {
      slides: [
        {
          className: 'credit-score',
          top: 'Your credit score is',
          middle: score,
          bottom: `out of ${maxScoreValue}`,
          arcDetails: {
            color: '#f7df71',
            percentage: Math.round((score / maxScoreValue) * 100)
          }
        },
        {
          className: 'long-term-debt',
          top: 'Your long term debt total',
          middle: decorateMoneyValue(currentLongTermDebt),
          bottom: `Total credit limit ${currentLongTermCreditLimit || 0}`,
          arcDetails: null
        },
        {
          className: 'next-report-delta',
          top: 'Your next report is in',
          middle: daysUntilNextReport,
          bottom: 'Days',
          arcDetails: {
            color: '#89bcdb',
            percentage: Math.ceil((daysUntilNextReport / 30) * 100)
          }
        }
      ]
    };

    this._advanceSlides = this._advanceSlides.bind(this)
  }

  componentDidMount() {
    this._animation = setInterval(() => {
      this.setState({
        slides: this._getNextSlideOrder()
      });
    }, this.props.slideDurationMs);
  }

  componentWillUnmount() {
    clearInterval(this._animation);
  }

  _getNextSlideOrder() {
    const [firstSlide, ...remainingSlides] = this.state.slides;
    return [...remainingSlides, firstSlide];
  }

  _advanceSlides() {
    this.setState({
      slides: this._getNextSlideOrder()
    });
  }

  render() {
    return (
      <div className="carousel" onClick={this._advanceSlides}>
        <Slide data={this.state.slides[0]} slideDurationMs={5000} />
      </div>
    );
  }
}