import React from "react";
import footerbutton from "../../assets/footerlogoButton.png"; 
 
interface SubcribeButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SubcribeButton: React.FC<SubcribeButtonProps> = ({
  children,
  onClick,
  className ,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative  custom-card  text-white px-4 py-2   transition duration-300 text-base  flex items-center justify-center gap-3 ${className}`}
      style={{
        backgroundImage: `url(${footerbutton})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none text-center " />

      {/* Button Content */}
      <div className="relative z-10 text-white font-secondary flex flex-col justify-center upercase font-medium">
        {children}
      </div>
    </button>
  );
};

export default SubcribeButton;