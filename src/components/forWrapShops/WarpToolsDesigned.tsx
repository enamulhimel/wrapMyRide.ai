import CommonWrapper from "@/common/CommonWrapper"
import SectionHeader from "@/common/SectionHeader"
import HorizontalAccordion from "./HorizontalAccordion"


const WarpToolsDesigned = () => {
  return (
    <div className="lg:pt-[150px] pt-20 lg:px-0 px-5">
        <CommonWrapper>

    
      <div className="">
        <p className="text-lg font-secondary font-normal leading-7 text-[#FFFFFFB2] pb-4">
            Features
           </p>
          <SectionHeader className="pb-8 w-[768px]">
            <h2>Tools Designed for Your Success</h2>
          </SectionHeader>
          <div className="">
        <HorizontalAccordion/>

          </div>
      </div>
          </CommonWrapper>
    </div>
  )
}

export default WarpToolsDesigned
