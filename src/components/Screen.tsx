import React from 'react';
import cx from 'classnames';

interface IScreenProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

const Screen: React.FC<IScreenProps> = ({ className, children, ...props }) => (
  <div
    className={cx('w-screen h-screen', className)}
    data-testid="content-area"
    {...props}
  >
    {children}
  </div>
);

export default Screen;
