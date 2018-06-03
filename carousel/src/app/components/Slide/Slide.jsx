import React from 'react';
import Circle from 'react-circle';

import './slide.scss';

export default function Slide({ data, slideDurationMs }) {
  const {
    className,
    arcDetails,
    top,
    middle,
    bottom
  } = data;
  
  return (
    <div
      className={`slide ${className}`}
      style={{ animationDuration: `${slideDurationMs}ms` }}
    >
      {arcDetails ? _renderArc(arcDetails) : null}
      <div className="top">{top}</div>
      <div className="middle">{middle}</div>
      <div className="bottom">{bottom}</div>
    </div>
  );
}

function _renderArc({ percentage, color }) {
  return (
    <Circle
      progress={percentage < 100 ? percentage : 100}
      size={440}
      lineWidth={6}
      progressColor={color}
      bgColor="transparent"
      animationDuration={3}
      showPercentage={false}
    />
  );
}