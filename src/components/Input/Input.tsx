import cx from 'classnames';
import React from 'react';

const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({ className, ...props }) => {
  return <input className={cx('border mb-1 rounded-md shadow px-4 py-2', className)} {...props} />;
};

export default Input;
