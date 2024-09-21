import cx from 'classnames';

import { loader } from './utils';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children, className, isLoading = false, ...props }) => {
  return (
    <button
      className={cx(
        'inline-flex items-center px-2 py-1 font-semibold leading-6 text-sm shadow-sm hover:shadow-md rounded-md text-slate-700 bg-slate-100 border hover:bg-slate-200 hover:border-slate-500 transition ease-in-out duration-150 cursor-not-allowed',
        className
      )}
      {...props}
    >

      {isLoading ? loader : children}
    </button>
  );
};

export default Button;
