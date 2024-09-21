import cx from 'classnames';

import { Spinner } from '.';
import { TrashIcon } from '.';
import { ButtonStyles } from './styles';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<IButtonProps> = ({ children, className, isLoading = false, ...props }) => {
  return (
    <button
      className={cx(
        ButtonStyles,
        className
      )}
      {...props}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};


export const DeleteButton: React.FC<IButtonProps> = ({ children, className, isLoading = false, ...props }) => {
  return (
    <button
      className={cx(
        ButtonStyles,
        'text-red-500 hover:border-red-500 hover:bg-red-200 hover:text-red-600',
        className
      )}
      data-testid="delete-btn"
      {...props}
    >
      <TrashIcon />$nbsp;
      {isLoading ? <Spinner /> : children}
    </button>
  );
};


export const LitUpButton: React.FC<IButtonProps> = ({ children, className, isLoading = false, ...props }) => {
  return (
    <button className="p-[2px] overflow-clip border border-sky-600 relative rounded-full shadow shadow-slate-500" {...props}>
      <div className="absolute inset-[-200%] animate-[spin_2s_linear_infinite] bg-gradient-to-b from-indigo-200 from-10% via-sky-500 via-30% to-emerald-800 to-90%" />
      <div className="px-8 py-2 font-bold bg-sky-900 rounded-full relative group transition duration-700 text-white hover:bg-transparent">
        {isLoading ? <Spinner /> : children}
      </div>
    </button>
  );
};
