import CommonWrapper from "@/common/CommonWrapper"
import ImpactCard from "@/common/home/ImpactCard"
import ImpactColorFullCard from "@/common/home/ImpactColorFullCard"
import Placeholder1 from '../../assets/homepage/Placeholder Logo.svg'
import Placeholder2 from '../../assets/homepage/Placeholder Logo2.svg'
import AvatarImg from "../../assets/homepage/Avatar Image.png"
import { Star } from 'lucide-react'
import SectionHeader from "@/common/SectionHeader"


const SeeOurImpact = () => {
  return (
    <CommonWrapper>
 <div className="pt-[150px] overflow-hidden px-5 md:px-0">
<SectionHeader className="text-center mb-20 font-primary">
     <h2>What Our Users Are Saying</h2>
     <p className="text-lg text-[#FFFFFFB2] font-secondary pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>    
     </SectionHeader>
      
<div className="flex flex-col gap-8">

  <div className="flex flex-col lg:flex-row gap-8">
    <ImpactCard icon={Placeholder1} className="w-full lg:w-1/4" />
    
    <ImpactColorFullCard
      icons={[
        <Star className="text-[#FFE600]" key="1" />,
        <Star className="text-[#FFE600]" key="2" />,
        <Star className="text-[#FFE600]" key="3" />,
        <Star className="text-[#FFE600]" key="4" />,
        <Star className="text-[#FFE600]" key="5" />,
      ]}
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
      img={AvatarImg}
      title="Name Surname"
      description="Position, Company name"
      className="w-full lg:w-1/2"
    />
    
    <ImpactCard icon={Placeholder2} className="w-full lg:w-1/4" />
  </div>

  <div className="flex flex-col sm:flex-row gap-8">
    <ImpactCard icon={Placeholder2} className="w-full sm:w-1/4" />
    <ImpactCard icon={Placeholder1} className="w-full sm:w-1/4" />
    <ImpactCard icon={Placeholder2} className="w-full sm:w-1/4" />
    <ImpactCard icon={Placeholder1} className="w-full sm:w-1/4" />
  </div>

</div>

 </div>

    </CommonWrapper>
  )
}

export default SeeOurImpact