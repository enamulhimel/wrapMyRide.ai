import { ReactNode } from "react";

interface HeroHeaderProps {
  children: ReactNode;
  className?: string;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ children, className  }) => {
  return (
    <div
      className={`
        text-white font-bold tracking-[2.56px] leading-[100%] 
        text-[35px] sm:text-[48px] md:text-[56px] lg:text-[64px] 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default HeroHeader;
