import CommonWrapper from "@/common/CommonWrapper"
import SectionHeader from "@/common/SectionHeader"

import LeftWarpCard from "./LeftWarpCard"
import RightWarpCard from "./RightWarpCard"

const ForWrapShopsComponent = () => {
  return (
    <div className="pt-[100px] lg:pt-[150px]">
      <CommonWrapper>
        <SectionHeader className="text-center lg:w-[768px] mx-auto mb-12 lg:mb-20">
          <h2>For Wrap Shops & Dealerships</h2>
          <p className="font-secondary text-lg font-normal leading-6 text-[#FFFFFFB2] pt-6">
            Boost website engagement, capture high-quality leads, and streamline your sales process with our powerful white-label visualizer.
          </p>
        </SectionHeader>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <LeftWarpCard />
          </div>
          <div className="w-full lg:w-1/2">
            <RightWarpCard />
          </div>
        </div>
      </CommonWrapper>
    </div>
  )
}

export default ForWrapShopsComponent
