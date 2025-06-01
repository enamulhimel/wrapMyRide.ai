
import FAQSection from '@/components/homePage/FAQSection'
import HowItWorkComponent from '@/components/homePage/HowItWork'
import PricingComponent from '@/components/homePage/PricingComponent'
import SeeOurImpact from '@/components/homePage/SeeOurImpact'
import UnleashYourCreativity from '@/components/homePage/UnleashYourCreativity'
import ForWrapShopsComponent from '@/components/homePage/ForWrapShopsComponent'
import { HeroSection } from '@/components/Home/HeroSection'
import PromptArea from '@/components/Home/PromptArea'



const Home = () => {
  return (
    <div >
      <HeroSection />
      <PromptArea />
      <HowItWorkComponent />
      <UnleashYourCreativity />
      <ForWrapShopsComponent />
      <PricingComponent />
      <SeeOurImpact />
      <FAQSection />


    </div>
  )
}

export default Home