import React from 'react';
import cx from 'classnames';

interface IScreenProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
}

const Screen: React.FC<IScreenProps> = ({ className, children, ...props }) => (
  <div
    className={cx('w-screen h-screen bg-slate-100', className)}
    data-testid="content-area"
    {...props}
  >
    {children}
  </div>
);

export default Screen;
