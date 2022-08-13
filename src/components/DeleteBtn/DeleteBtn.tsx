import cx from 'classnames';
import TrashIcon from '../TrashIcon';

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const DeleteBtn: React.FC<IButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cx(
        'inline-flex items-center px-2 py-1 hover:border-red-500 border border-transparent font-semibold text-sm rounded-md hover:text-red-600 hover:bg-red-200 text-red-500 bg-transparent transition ease-in-out duration-150',
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
