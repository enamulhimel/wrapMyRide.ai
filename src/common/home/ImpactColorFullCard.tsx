import React from "react";
import backgroundImage from "../../assets/cardImg.png";


type ImpactColorFullCardProps = {
  icons: React.ReactNode[];   // array of icons
  img: string;
  text: string;
  title: string;
  description: string;
  className?: string;
};

const ImpactColorFullCard: React.FC<ImpactColorFullCardProps> = ({
  icons,
  img,
  text,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`relative p-6 overflow-hidden  custom-card  bg-black text-white  ${className}`} 
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='49' height='49' fill='none' stroke='%23ffffffcc' stroke-width='0.3'/%3E%3C/svg%3E"),
          url(${backgroundImage})
        `,
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "top left, center",
        backgroundSize: "auto, cover",
        minHeight: "180px",
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 flex  flex-col items-start gap-4">
        {/* Left Icons: stacked vertically */}
        <div className="flex  gap-2 ">
          {icons.map((icon, idx) => (
            <div key={idx} className="w-6 h-6">
              {icon}
            </div>
          ))}
        </div>

        {/* Text and Avatar */}
        <div className="flex flex-col gap-6">
          <p
            className="text-white  font-normal text-lg font-secondary leading-7"
           
          >
            "{text}"
          </p>

          <div className="flex items-center gap-4">
            {/* Avatar Image in circle */}
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <img src={img} alt="Avatar" className="object-cover w-full h-full" />
            </div>

            {/* Title and description */}
            <div>
              <h3 className="text-white text-lg font-normal font-secondary">{title}</h3>
              <p className="text-[#FFFFFFB2] font-normal text-base font-secondary">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactColorFullCard;
