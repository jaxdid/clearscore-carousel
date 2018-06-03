import React from 'react';

import './slide.scss';

export default function Slide({ content }) {
  return (
    <div className="slide">
      <div className="top">{content.top}</div>
      <div className="middle">{content.middle}</div>
      <div className="bottom">{content.bottom}</div>
    </div>
  );
}