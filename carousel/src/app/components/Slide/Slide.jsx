import React from 'react';

export default function Slide({ content }) {
  return (
    <div className="slide">
      <p>{content.top}</p>
      <h1>{content.middle}</h1>
      <p>{content.bottom}</p>
    </div>
  );
}