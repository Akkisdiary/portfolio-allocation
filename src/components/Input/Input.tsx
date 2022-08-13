import cx from 'classnames';
import React from 'react';

const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({ className, ...props }) => {
  return (
    <input
      className={cx('outline-0 mb-1 rounded-md px-4 py-1 bg-slate-100 w-full', className)}
      {...props}
    />
  );
};

export default Input;
