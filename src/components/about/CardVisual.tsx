import React from "react";
import backgroundImage from "../../assets/cardImg.png";
import SectionHeader from "@/common/SectionHeader";
import VisualizeButton from "@/common/VisualizeButton";



type VisualizeCardProps = {
  header: string;
  buttonText: string;
  className: string;

};

const VisualizeCard: React.FC<VisualizeCardProps> = ({
  header,
  buttonText,
  className ,
 
}) => {
  return (
    <div
      className={`relative lg:p-16 p-6  overflow-hidden  custom-card rounded-md ${className}`}
      style={{
        backgroundColor: "#000000",
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='49' height='49' fill='none' stroke='%23ffffffcc' stroke-width='0.3'/%3E%3C/svg%3E"),
          url(${backgroundImage})
        `,
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "top left, center",
        backgroundSize: "auto, cover",
        minHeight: "200px",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0 "  />

      <div className="relative z-10 h-full text-center  lg:w-[668px] mx-auto">
     <SectionHeader > {header}
     </SectionHeader>
    <div className="mt-8  flex flex-col justify-center items-center">
           <VisualizeButton className="text-center"> {buttonText} </VisualizeButton>
    </div>
  
    
      </div>
    </div>
  );
};

export default VisualizeCard;
    