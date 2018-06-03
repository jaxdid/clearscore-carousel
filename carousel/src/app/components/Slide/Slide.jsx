import React from 'react';

import './slide.scss';

export default function Slide({ data }) {
  return (
    <div className={`slide ${data.className}`}>
      <div className="top">{data.top}</div>
      <div className="middle">{data.middle}</div>
      <div className="bottom">{data.bottom}</div>
    </div>
  );
}