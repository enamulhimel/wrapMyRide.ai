import React from 'react';

type SimpleCardProps = {

  icon: React.ReactNode; 


  title: string;
  description: string;
  className?: string;
};

const SimpleCard: React.FC<SimpleCardProps> = ({
  icon,
  title,
  description,
  className ,
}) => {
  return (
    <div
      className={`
        relative overflow-hidden 
        text-white bg-black/70 rounded-xl
        ${className}
      `}
      style={{
        minHeight: '150px',
      }}
    >
      <div className="relative z-10">

        <div className="pb-6">{icon}</div>
        <h3 className="text-[20px] sm:text-[24px] font-bold font-primary text-white pb-4">{title}</h3>
        <p className="text-[14px] sm:text-[16px] font-normal text-[#FFFFFFB2] font-secondary">{description}</p>
      </div>
    </div>
  );
};

export default SimpleCard;


