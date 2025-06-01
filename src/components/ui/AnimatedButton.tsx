import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import backgroundImg from '@/assets/Noise&Texture.png'

import { MotionProps } from "framer-motion";

type AnimatedButtonProps = React.ComponentPropsWithoutRef<"button"> & MotionProps & {
  children: React.ReactNode;
  className?: string;
};

export const AnimatedButton = ({
  children,
  className,
  ...props
}: AnimatedButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={cn(
        "relative inline-flex h-12 overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFE600_0%,#CC1A70_50%,#BC010A_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center px-8 py-1 text-sm font-medium text-foreground backdrop-blur-3xl">
        {children}
      </span>
    </motion.button>
  );
};