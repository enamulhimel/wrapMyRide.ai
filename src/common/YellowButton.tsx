import React from "react";

type DrawingButtonProps = {
  children: string;
  onClick?: () => void;
  className?: string;
};

const YellowButton: React.FC<DrawingButtonProps> = ({children, onClick, className }) => {
  return (
 <button className={`btn draw-border font-secondary   ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default YellowButton;
