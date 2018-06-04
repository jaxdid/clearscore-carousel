import React, { Component } from 'react';
import Slide from '../Slide/Slide';

import './carousel.scss';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: this.props.slides
    };

    this._advanceSlides = this._advanceSlides.bind(this)
  }

  componentDidMount() {
    this._animation = setInterval(
      this._advanceSlides,
      this.props.slideDurationMs
    );
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
        <Slide
          data={this.state.slides[0]}
          slideDurationMs={this.props.slideDurationMs}
        />
      </div>
    );
  }
}