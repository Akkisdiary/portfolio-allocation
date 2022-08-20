import cx from 'classnames';
import React from 'react';

interface ISelectProps extends React.HTMLProps<HTMLSelectElement> {
  options: string[];
}

const Select: React.FC<ISelectProps> = ({ options, className, ...rest }) => {
  return (
    <select
      className={cx(
        'm-0 block rounded-t-md rounded-b-md border bg-slate-100 bg-clip-padding bg-no-repeat p-2 text-sm capitalize text-slate-700 shadow-sm transition hover:border-slate-500 focus:border-slate-500 focus:bg-white focus:shadow-md focus:outline-none active:rounded-b-none',
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
