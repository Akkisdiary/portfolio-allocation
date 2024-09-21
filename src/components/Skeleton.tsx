import cx from 'classnames';

const Text: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => (
  <div
    className={cx('animate-pulse rounded-full bg-slate-300 h-3', {
      'w-8': size === 'sm',
      'w-16': size === 'md',
      'w-32': size === 'lg',
    })}
    role="status"
  ></div>
);

const Skeleton = { Text }

export default Skeleton;
