
import FAQSection from "@/components/homePage/FAQSection"
import AllPlan from "@/components/pricing/AllPlan"
import OptionalAdd from "@/components/pricing/OptionalAdd"
import PricingPlan from "@/components/pricing/PricingPlan"
import ReadyToCapturMore from "@/components/pricing/ReadyToCapturMore"



const Pricing = () => {
  return (
    <div className="overflow-hidden">
      <PricingPlan/>
      <AllPlan/>
      <OptionalAdd/>
      <FAQSection/>
      <ReadyToCapturMore/>
    </div>
  )
}

export default Pricing