import React, { ReactNode } from "react";
import clsx from "clsx";
interface CommonWrapperProps {
  children: ReactNode;
  className?: string;
}

const CommonWrapper: React.FC<CommonWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "max-w-[1280px] w-full mx-auto  py-6",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CommonWrapper;