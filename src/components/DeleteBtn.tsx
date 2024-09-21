import cx from 'classnames';
import { TrashIcon } from './Icons';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const DeleteBtn: React.FC<IButtonProps> = ({ children, className, ...props }) => {
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
      {children}
    </button>
  );
};

export default DeleteBtn;
