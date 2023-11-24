import React from 'react';


const Paper= ({
  className,
  backgroundColor,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  textAlign,
  padding,
  margin,
  borderRadius,
  overflowX,
  overflowY,
  position,
  top,
  left,
  right,
  bottom,
  zIndex,
  flex,
  grid,
  children,
}) => {
  const tailwindClasses = `
    ${backgroundColor ? `bg-${backgroundColor}` : ''}
    ${width ? `w-${width}` : ''}
    ${minWidth ? `min-w-${minWidth}` : ''}
    ${maxWidth ? `max-w-${maxWidth}` : ''}
    ${height ? `h-${height}` : ''}
    ${minHeight ? `min-h-${minHeight}` : ''}
    ${maxHeight ? `max-h-${maxHeight}` : ''}
    ${textAlign ? `text-${textAlign}` : ''}
    ${padding ? `p-${padding}` : '10'}
    ${margin ? `m-${margin}` : ''}
    ${borderRadius ? `rounded-${borderRadius}` : ''}
    ${overflowX ? `overflow-x-${overflowX}` : ''}
    ${overflowY ? `overflow-y-${overflowY}` : ''}
    ${position ? `absolute ${position}` : ''}
    ${top ? `top-${top}` : ''}
    ${left ? `left-${left}` : ''}
    ${right ? `right-${right}` : ''}
    ${bottom ? `bottom-${bottom}` : ''}
    ${zIndex ? `z-${zIndex}` : ''}
    ${flex ? `flex-${flex}` : ''}
    ${grid ? `grid-${grid}` : ''}
    ${className || ''}
  `.trim();

  return (
    <div className={tailwindClasses}>
      {children}
    </div>
  );
};

export default Paper;