import DealersSeeOurImpact from "@/components/forDealers/DealersSeeOurImpact"
import EasyIntegration from "@/components/forWrapShops/EasyIntegration"
import ForWarpHero from "@/components/forWrapShops/ForWarpHero"
import GrowYourBusiness from "@/components/forWrapShops/GrowYourBusiness"
import ReadyToCapture from "@/components/forWrapShops/ReadyToCapture"
import WarpToolsDesigned from "@/components/forWrapShops/WarpToolsDesigned"


const ForWrapShops = () => {
  return (
    <div className="overflow-hidden">
      <ForWarpHero/>
      <GrowYourBusiness/>
      <EasyIntegration/>
      <WarpToolsDesigned/>
      <DealersSeeOurImpact/>
      <ReadyToCapture/>
    </div>
  )
}

export default ForWrapShops