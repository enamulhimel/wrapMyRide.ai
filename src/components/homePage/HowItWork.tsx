
import SectionHeader from '@/common/SectionHeader'
import WorkCard from '@/common/home/WorkCard'

import card1 from "../../assets/homepage/card1.png"
import card2 from "../../assets/homepage/card2.svg"
import card3 from "../../assets/homepage/card3.svg"
import card4 from "../../assets/homepage/card4.svg"
import YellowButton from '@/common/YellowButton'
import {  ChevronRight } from 'lucide-react'
import CommonWrapper from '@/common/CommonWrapper'

const steps = [
  {
    icon: card1,
    title: "Upload Your Car",
    description: "Simply upload a photo of your car from any angle."
  },
  {
    icon: card2,
    title: "Describe Your Style",
    description: "Use plain English to describe the wrap you imagine."
  },
  {
    icon: card3,
    title: "See the Magic",
    description: "Our AI instantly generates a realistic preview of your car with the custom wrap applied."
  },
  {
    icon: card4,
    title: "Download & Share",
    description: "Save your design or share it with friends and wrap shops."
  },
]

const HowItWorkComponent = () => {
  return (
    <div className="py-[150px] flex flex-col gap-[40px]  mx-auto  overflow-hidden px-5 md:px-0 ">
    <CommonWrapper className='flex flex-col gap-[40px]'> 
          <SectionHeader className="text-left">How It Works</SectionHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
          {steps.map((step, index) => (
            <WorkCard
            key={index}
              icon={<img src={step.icon} alt={step.title} className="w-10 h-10" />}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
   <div className="flex gap-4">
    <YellowButton> Try Now</YellowButton>
    <button className='text-lg px-4 py-2 font-medium leading-[27px] font-secondary  tracking-[0.36px] uppercase text-white flex items-center gap-2'>Learn More    <ChevronRight /> </button>
 
   </div>
   
    </CommonWrapper>
    </div>
  )
}

export default HowItWorkComponent
