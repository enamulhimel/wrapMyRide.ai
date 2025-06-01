import React from "react";
import backgroundImage from "../../assets/cardImg.png";

type ImpactCardProps = {
  icon: string;
  className?: string;
};

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, className }) => {
  return (
    <div
      className={`relative p-6 bg-[#000000] overflow-hidden border-[1px] border-[#A9A9A9] h-[260px] ${className}`}
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='49' height='49' fill='none' stroke='%23ffffffcc' stroke-width='0.3'/%3E%3C/svg%3E"),
          url(${backgroundImage})
        `,
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "top left, center",
        backgroundSize: "auto, cover",
        minHeight: "150px",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 flex justify-center items-center h-full">
        <img src={icon} alt="" className="max-w-full max-h-full object-contain" />
      </div>
    </div>
  );
};

export default ImpactCard;
