import React from 'react';
import PropTypes from 'prop-types';
import Circle from 'react-circle';

import './slide.scss';

function renderArc({ percentage, color }) {
  return (
    <Circle
      className="arc"
      progress={percentage < 100 ? percentage : 100}
      size={440}
      lineWidth={6}
      progressColor={color}
      bgColor="transparent"
      animate={false}
      showPercentage={false}
    />
  );
}

renderArc.propTypes = {
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default function Slide({ data, slideDurationMs }) {
  const {
    className,
    arcDetails,
    top,
    middle,
    bottom,
  } = data;

  return (
    <div
      className={`slide ${className}`}
      style={{ animationDuration: `${slideDurationMs}ms` }}
    >
      {arcDetails ? renderArc(arcDetails) : null}
      <div className="top">{top}</div>
      <div className="middle">{middle}</div>
      <div className="bottom">{bottom}</div>
    </div>
  );
}

Slide.propTypes = {
  data: PropTypes.shape({
    className: PropTypes.string,
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    middle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    arcDetails: PropTypes.object,
  }).isRequired,
  slideDurationMs: PropTypes.number.isRequired,
};
