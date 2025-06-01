import DealersSeeOurImpact from "@/components/forDealers/DealersSeeOurImpact"
import ReadyToCapture from "@/components/forWrapShops/ReadyToCapture"
import OurCompetitiveEdge from "@/components/whyUs/OurCompetitiveEdge"
import WhyUsHero from "@/components/whyUs/WhyUsHero"
import { WrapMyRideTabs } from "@/components/whyUs/WrapMyRideTabs"


const WhyUs = () => {
  return (
    <div>
      <WhyUsHero/>
        <OurCompetitiveEdge/>
        <WrapMyRideTabs/>
    <DealersSeeOurImpact/>
    <ReadyToCapture/>
    </div>
  )
}

export default WhyUs
