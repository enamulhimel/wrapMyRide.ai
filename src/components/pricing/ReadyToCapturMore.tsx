import CommonWrapper from "@/common/CommonWrapper";
import SectionHeader from "@/common/SectionHeader";
import VisualizeButton from "@/common/VisualizeButton";
import webflow from "../../assets/homepage/Placeholder Logo2.svg";
import realme from "../../assets/homepage/Placeholder Logo.svg";

const ReadyToCapturMore = () => {
  return (
    <div className="lg:pb-[150px] pb-20 lg:px-0 px-5">
      <CommonWrapper>
        <div className="">
          <div className="relative z-10 h-full text-center flex flex-col items-center max-w-3xl mx-auto">
            <SectionHeader>
              <h2>Ready to Capture More Wrap Leads?</h2>
              <p className="text-[#FFFFFFB2] text-lg leading-7 font-medium pt-6 font-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </SectionHeader>

            <VisualizeButton className="mt-8 text-center">Get Started Today</VisualizeButton>

            <p className="text-lg leading-7 font-medium pt-6 font-secondary text-[#FFFFFFB2]">
              Trusted by the world's best companies [social proof to build credibility]
            </p>
          </div>

          {/* Logo Grid - Responsive */}
          <div className="flex flex-wrap justify-center gap-6 pt-10">
            <img src={webflow} alt="Webflow" className="w-24 sm:w-32 object-contain" />
            <img src={realme} alt="Realme" className="w-24 sm:w-32 object-contain" />
            <img src={webflow} alt="Webflow" className="w-24 sm:w-32 object-contain" />
            <img src={realme} alt="Realme" className="w-24 sm:w-32 object-contain" />
            <img src={webflow} alt="Webflow" className="w-24 sm:w-32 object-contain" />
            <img src={realme} alt="Realme" className="w-24 sm:w-32 object-contain" />
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default ReadyToCapturMore;
