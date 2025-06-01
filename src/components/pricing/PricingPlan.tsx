
import CommonWrapper from "@/common/CommonWrapper"
import CustomButton from "@/common/CustomButton"
import HeroHeader from "@/common/HeroHeader"
import PricingCard from "@/common/home/PricingCard"

import YellowButton from "@/common/YellowButton"
import {  Cuboid } from "lucide-react"

const pricingData = [
  {
    title: "Starter",
    price: "$49",
    note: " ",
    icon: <Cuboid className="h-12 w-12" />,
    footerTitle: "Includes",
    features: [
      "1 Project",
      "Basic support",
      "Limited analytics",
    ],
     button: <CustomButton >try the three visualization</CustomButton>,
  },
  {
    title: "Pro ",
    price: "$149",
    note: "or $299 yearly",
    icon: <Cuboid className="h-12 w-12" />,
    footerTitle: "Includes",
    features: [
      "Unlimited projects",
      "Priority support",
      "Team collaboration",
      "Advanced analytics",
    ],
  button:<YellowButton className="px-10"> Start Pro Trial</YellowButton>

  
  },
  {
    title: "Elite",
    price: "$299",
    note: "or $499 yearly",
    icon: <Cuboid className="h-12 w-12" />,
    footerTitle: "Includes",
    features: [
      "Dedicated account manager",
      "Custom integrations",
      "24/7 support",
      "Onboarding assistance",
    ],
    button: <CustomButton >try the three visualization</CustomButton>,
  },
]


const PricingPlan = () => {
  return (
    <div className=" lg:pt-[150px] pt-20 mx-auto overflow-hidden lg:px-0 px-5 ">
    <CommonWrapper>
       <HeroHeader className="text-center lg:w-[768px] mx-auto mb-20"> 
      <h2 >Pricing Plan</h2>
      <p className="lg:text-lg text-base text-[#FFFFFFB2] font-normal pt-6 text-center font-secondary">Simple plans that grow with your business. 
Cancel anytime.
</p>
        
     </HeroHeader>


       <div className=" mx-auto grid gap-8 md:grid-cols-3 ">
      {pricingData.map((plan, i) => (
        <PricingCard
          key={i}
          title={plan.title}
          price={plan.price}
          note={plan.note}
          icon={plan.icon}
          footerTitle={plan.footerTitle}
          features={plan.features}
           button={plan.button}

        />
      ))}
    </div>
    </CommonWrapper>
    </div>
   
  )
}

export default PricingPlan
