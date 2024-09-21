import cx from 'classnames';
import React from 'react';

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({ className, ...props }) => {
  return (
    <input
      className={cx('outline-0 rounded-md px-4 py-1 bg-slate-100 w-full', className)}
      {...props}
    />
  );
};

interface ISelectProps extends React.HTMLProps<HTMLSelectElement> {
  options: string[];
}

export const Select: React.FC<ISelectProps> = ({ options, className, ...rest }) => {
  return (
    <select
      className={cx(
        'm-0 block rounded-md border bg-slate-100 p-2 text-sm capitalize text-slate-700 shadow-sm transition hover:border-slate-500 focus:outline-none active:rounded-b-none active:border-slate-500 active:bg-white active:shadow-md',
        className
      )}
      {...rest}
    >
      {options.map((o) => (
        <option key={o} value={o} className="capitalize">
          {o}
        </option>
      ))}
    </select>
  );
};
