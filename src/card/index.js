import React from 'react';
import './index.css';

export const Card = props => {
  return (
    <div className="card">
      <img src={`${ props.avatar }`} alt="Avatar" style={{ width: '100%' }} />
      <div className="container">
        <h4><b>{ props.name }</b></h4>
        <p>{ props.title }</p>
      </div>
    </div>
  );
}