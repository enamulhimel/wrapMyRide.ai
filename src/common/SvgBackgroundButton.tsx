import React from "react";
import svgbutton from "../assets/svgbutton.png";

interface SvgBackgroundButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode; 
}

const SvgBackgroundButton: React.FC<SvgBackgroundButtonProps> = ({
  children,
  onClick,
  className ,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative border border-white text-white px-4 py-2 hover:shadow-[-8px_8px_#FFFFFFA6] transition duration-300 text-base flex items-center justify-center gap-3 ${className}`}
      style={{
        backgroundImage: `url(${svgbutton})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" />

      {/* Button Content */}
      <div className="relative z-10 text-[#FFFFFFA6] flex items-center gap-2 font-orbit">
        {icon && <span className="w-5 h-5">{icon}</span>}
        {children}
      </div>
    </button>
  );
};

export default SvgBackgroundButton;
