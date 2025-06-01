import { FC, ButtonHTMLAttributes } from "react"
import clsx from "clsx"

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

const CustomButton: FC<CustomButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "bg-white text-black text-[18px] font-medium leading-[27px] tracking-[0.36px] uppercase px-4 py-2 font-secondary cursor-pointer ",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default CustomButton