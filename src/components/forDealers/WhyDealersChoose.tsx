import CommonWrapper from '@/common/CommonWrapper'
import SectionHeader from '@/common/SectionHeader'
import WhyDealersLeftCard from './WhyDealersLeftCard'
import WhyDealersLRightCard from './WhyDealersRightCard'


const WhyDealersChoose = () => {
  return (
    <div className='lg:pt-[150px] pt-20 lg:px-0 px-5'>
      <CommonWrapper>
        <div className="text-center">
          <p className="text-lg font-secondary font-normal leading-7 text-[#FFFFFFB2] pb-4">
            Benefits
          </p>
          <SectionHeader className="pb-8 w-full lg:w-[768px] mx-auto">
            <h2>Why Dealers Choose WrapMyRide.ai</h2>
          </SectionHeader>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch pt-20">
          <div className="w-full lg:w-1/2">
            <WhyDealersLeftCard />
          </div>
          <div className="w-full lg:w-1/2">
            <WhyDealersLRightCard />
          </div>

        </div>
      </CommonWrapper>
    </div>
  )
}

export default WhyDealersChoose
