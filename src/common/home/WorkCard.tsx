import React from 'react';
import backgroundImage from "../../assets/cardImg.png";

type InfoCardProps = {
 icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}


const WorkCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  description,
  className ,
}) => {
  return (
  <div
  className={`
    relative p-6 bg-[#000000] overflow-hidden border-[1px] 
    text-white border-[#A9A9A9] ${className}
  `}
style={{
  backgroundImage: `
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='49' height='49' fill='none' stroke='%23ffffffcc' stroke-width='0.3'/%3E%3C/svg%3E"),
    url(${backgroundImage})
  `,
  backgroundRepeat: 'repeat, no-repeat',
  backgroundPosition: 'top left, center',
  backgroundSize: 'auto, cover',
  minHeight: '150px',
}}
>
  <div className="absolute inset-0 bg-black/70 z-0 " />
  <div className="relative z-10">
    <div className="pb-3">
   {icon}  
    </div>
    <h3 className="text-2xl  font-bold font-primary text-white leading-6 pb-4">{title}</h3>
    <p className="text-base  font-normal font-secondary text-[#FFFFFFB2] leading-6">{description}</p>
  </div>
</div>
  );
};

export default WorkCard;
