import React from 'react';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode; // optional icon/image (like SVG)
};

const MovingButton: React.FC<ButtonProps> = ({ children, onClick, className, icon }) => {
  return (
    <button
      className={clsx('glowing-box-shadow flex items-center justify-center text-base font-normal font-orbit text-[#FFFFFFA6]', className)}
      onClick={onClick}
    >
      <span>{children}</span>
      {icon && <span className="ml-2 inline-flex">{icon}</span>}
    </button>
  );
};

export default MovingButton;
