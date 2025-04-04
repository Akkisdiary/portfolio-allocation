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
      <TrashIcon />
      {isLoading ? <Spinner /> : children}
    </button>
  );
};


export const LitUpButton: React.FC<IButtonProps> = ({ children, className, isLoading = false, ...props }) => {
  return (
    <button className="p-[2px] overflow-clip relative rounded-full" {...props}>
      <div className="px-8 py-2 font-bold rounded-full relative group transition duration-300 text-white hover:text-slate-700 bg-sky-900 hover:bg-gradient-to-r from-violet-200 to-pink-200">
        {isLoading ? <Spinner /> : children}
      </div>
    </button>
  );
};