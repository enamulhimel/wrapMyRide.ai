import { FC, ReactNode } from "react"
import { Check } from "lucide-react"
import backgroundImage from "../../assets/cardImg.png"

interface PricingCardProps {
  title: string
  price: string
  note?: string
  icon?: ReactNode
  features: string[]
  footerTitle?: string
  backgroundImage?: string
  buttonText?: string
  onButtonClick?: () => void
  className?: string
  buttonClassName?: string
  button?: ReactNode // NEW: custom button support
}

const PricingCard: FC<PricingCardProps> = ({
  title,
  price,
  note,
  icon,
  features,
  footerTitle,
  backgroundImage: bgImage = backgroundImage,
  buttonText,
  onButtonClick,
  className,
  buttonClassName,
  button,
}) => {
  return (
   <div
  className={`
    relative flex flex-col p-6 overflow-hidden 
    bg-black text-white ${className} ${title === "Pro " ? " custom-card" : " border border-[#A9A9A9]"}
  `}
  style={{
    backgroundImage: `
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='49' height='49' fill='none' stroke='%23ffffffcc' stroke-width='0.3'/%3E%3C/svg%3E"),
      url(${bgImage})
    `,
    backgroundRepeat: "repeat, no-repeat",
    backgroundPosition: "top left, center",
    backgroundSize: "auto, cover",
    minHeight: "100%",
  }}
>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon and Header */}
        <div className="flex justify-end pb-4">{icon}</div>

        <div>
          <h3 className="text-[20px] font-medium font-secondary">{title}</h3>
          <h3 className="text-[24px] font-bold mt-2 font-secondary">
            {price} <span className="text-lg font-normal">/mo</span>
          </h3>
          {note && <p className="text-[16px] mt-1 font-secondary text-[#FFFFFFB2]">{note}</p>}
        </div>

        {/* Divider */}
        <div className="border-t border-[1px] border-[#A9A9A9] my-8" />

        {/* Footer */}
        {footerTitle && (
          <h4 className="text-lg font-normal text-[#FFFFFFB2] mb-4 font-secondary">{footerTitle}:</h4>
        )}

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 font-secondary">
              <Check className="text-white mt-1" size={18} />
              <span className="text-base font-normal font-secondary">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Button (always at bottom using mt-auto) */}
        <div className="mt-auto w-full relative z-10 flex justify-center">
          {button ? (
            button
          ) : (
            buttonText && (
              <button
                onClick={onButtonClick}
                className={`
                  w-full h-12 uppercase font-medium text-[18px] tracking-[0.36px] rounded-md  font-secondary
                  transition ${buttonClassName ?? "bg-white text-black hover:bg-gray-200"}
                `}
              >
                {buttonText}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default PricingCard
