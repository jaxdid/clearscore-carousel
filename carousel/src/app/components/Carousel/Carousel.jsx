import React, { Component } from 'react';
import Slide from '../Slide/Slide';

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
          top: 'Your credit score is',
          middle: score,
          bottom: `out of ${maxScoreValue}` 
        },
        {
          top: 'Your long term debt total',
          middle: currentLongTermDebt,
          bottom: `Total credit limit ${currentLongTermCreditLimit}`
        },
        {
          top: 'Your next report is in',
          middle: daysUntilNextReport,
          bottom: 'Days'
        }
      ]
    };
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

  render() {
    return (
      <div className="carousel">
        <Slide content={this.state.slides[0]} />
      </div>
    );
  }
}