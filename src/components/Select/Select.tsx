import cx from 'classnames';
import React from 'react';

interface ISelectProps extends React.HTMLProps<HTMLSelectElement> {
  options: string[];
}

const Select: React.FC<ISelectProps> = ({ options, className, ...rest }) => {
  return (
    <select
      className={cx(
        'm-0 block rounded-t-md rounded-b-md border bg-slate-100 p-2 text-sm capitalize text-slate-700 shadow-sm transition hover:border-slate-500 focus:outline-none active:rounded-b-none active:border-slate-500 active:bg-white active:shadow-md',
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

export default Select;
