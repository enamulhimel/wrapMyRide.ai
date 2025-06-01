import { ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ children, className  }) => {
  return (
   <div
  className={`
    text-white font-bold tracking-[2.56px] font-primary
    text-[32px] sm:text-[40px] md:text-[48px] leading-12
    ${className}
  `}
>
  {children}
</div>
  );
};

export default SectionHeader;