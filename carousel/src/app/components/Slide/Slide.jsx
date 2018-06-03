import React from 'react';

import './slide.scss';

export default function Slide({ data, slideDurationMs }) {
  return (
    <div
      className={`slide ${data.className}`}
      style={{ animationDuration: `${slideDurationMs}ms` }}
    >
      <div className="top">{data.top}</div>
      <div className="middle">{data.middle}</div>
      <div className="bottom">{data.bottom}</div>
    </div>
  );
}