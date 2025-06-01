import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode; // optional icon/image (like SVG)
};

const VisualizeButton: React.FC<ButtonProps> = ({ children, onClick, className, icon }) => {
  return (
    <button
      className={clsx('offset uppercase flex items-center justify-center text-base font-normal font-orbit ', className)}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && <span className="ml-2 inline-flex">{icon}</span>}
    </button>
  );
};

export default VisualizeButton;
