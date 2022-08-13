import cx from 'classnames';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cx(
        'inline-flex items-center px-2 py-1 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
