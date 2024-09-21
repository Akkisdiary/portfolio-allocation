import cx from 'classnames';

import { Spinner } from '.';
import { TrashIcon } from '.';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ children, className, isLoading = false, ...props }) => {
  return (
    <button
      className={cx(
        'inline-flex items-center px-2 py-1 font-semibold leading-6 text-sm shadow-sm hover:shadow-md rounded-md text-slate-700 bg-slate-100 border hover:bg-slate-200 hover:border-slate-500 transition ease-in-out duration-150 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};


export const DeleteBtn: React.FC<IButtonProps> = ({ children, className, isLoading = false, ...props }) => {
  return (
    <button
      className={cx(
        'inline-flex items-center rounded-md border border-transparent bg-transparent px-2 py-1 text-sm font-semibold text-red-500 transition duration-150 ease-in-out hover:border-red-500 hover:bg-red-200 hover:text-red-600',
        className
      )}
      data-testid="delete-btn"
      {...props}
    >
      <TrashIcon />
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
