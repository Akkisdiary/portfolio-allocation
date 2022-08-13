import React from "react";

interface IContainerProps {
  children?: React.ReactNode;
}

const ContentArea: React.FC<IContainerProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen text-center" data-testid="content-area">
      {children}
    </div>
  );
};

export default ContentArea;
