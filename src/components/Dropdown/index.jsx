import React, { useState, useRef } from 'react';
import './style.css';

const Dropdown = ({placeholder = 'Vyber...', options, selected, onChange}) => {

  const handleClick = (item) => {
    onChange(item);
  }

  return (
    <div className="dropdown">
      <div
        className="dropdown__header"
      >
        {selected || placeholder}
      </div>
      <div className="dropdown__list">
        {options.map(item =>
          <div
            className="dropdown__item"
            key={item}
            onClick={() => {handleClick(item)}}
          >{item}</div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
