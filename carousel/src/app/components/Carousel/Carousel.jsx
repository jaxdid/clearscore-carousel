import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slide from '../Slide/Slide';

import './carousel.scss';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: this.props.slides,
    };

    this.advanceSlides = this.advanceSlides.bind(this);
  }

  componentDidMount() {
    this.animation = setInterval(
      this.advanceSlides,
      this.props.slideDurationMs,
    );
  }

  componentWillUnmount() {
    clearInterval(this.animation);
  }

  getNextSlideOrder() {
    const [firstSlide, ...remainingSlides] = this.state.slides;
    return [...remainingSlides, firstSlide];
  }

  advanceSlides() {
    this.setState({
      slides: this.getNextSlideOrder(),
    });
  }

  render() {
    return (
      <button className="carousel" onClick={this.advanceSlides}>
        <Slide
          data={this.state.slides[0]}
          slideDurationMs={this.props.slideDurationMs}
        />
      </button>
    );
  }
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  slideDurationMs: PropTypes.number,
};

Carousel.defaultProps = {
  slideDurationMs: 5500,
};
