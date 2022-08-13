import cx from 'classnames';
import React from 'react';

interface IInputProps extends React.HTMLProps<HTMLInputElement> {}

const Input: React.FC<IInputProps> = ({ className, ...props }) => {
  return <input className={cx("border mb-1 w-full rounded-md shadow px-4 py-2", className)} {...props} />;
};

export default Input;
