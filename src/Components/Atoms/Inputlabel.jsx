"use client"
import React, { useState } from 'react';

const InputFieldLabel = (props) => {
  const {
    className,
    backgroundColor,
    textAlign,
    padding,
    margin,
    borderRadius,
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
    children,
    placeholder,
    type = 'text', // Default to 'text'
    onChange = (value) => {}, // Default to an empty function
  } = props;

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const inputProps = {
    className: `border border-gray-300 p-2 ${className}`,
    onChange: handleInputChange,
    value: inputValue,
    placeholder: placeholder,
    ...props,
  };

  return (
    <span
      className={`
        ${backgroundColor ? `bg-${backgroundColor}` : ''}
        ${textAlign ? `text-${textAlign}` : ''}
        ${padding ? `p-${padding}` : ''}
        ${margin ? `m-${margin}` : ''}
        ${borderRadius ? `rounded-${borderRadius}` : ''}
        ${position ? `absolute ${position}` : ''}
        ${top ? `top-${top}` : ''}
        ${left ? `left-${left}` : ''}
        ${right ? `right-${right}` : ''}
        ${bottom ? `bottom-${bottom}` : ''}
        ${zIndex ? `z-${zIndex}` : ''}
        ${className || ''}
      `}
    >
      {type === 'checkbox' ? (
        <input type="checkbox" {...inputProps} />
      ) : type === 'number' ? (
        <input type="number" className="rounded-md" {...inputProps} />
      ) : type === 'textarea' ? (
        <textarea className={`border border-gray-300 rounded-md p-2 ${className}`} {...inputProps} />
      ) : (
        <input type="text" className={`border border-gray-300 rounded-md p-2 ${className}`} {...inputProps} />
      )}
    </span>
  );
};

export default InputFieldLabel;
