import CommonWrapper from "@/common/CommonWrapper";
import HeroHeader from "@/common/HeroHeader";
import YellowButton from "@/common/YellowButton";
import whyHero from "../../assets/whyUs/whyUsbg.png";

export default function WhyUsHero() {
  return (
    <section className="lg:pt-[112px] pt-20 overflow-hidden lg:px-0 px-5">
      <CommonWrapper>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
          {/* Left Text Section */}
          <div className="w-full lg:w-[64%] text-center lg:text-left">
            <HeroHeader>
              <h2>Why WrapMyRide.ai is Your Best Choice</h2>
            </HeroHeader>
          </div>

          {/* Right Button and Text */}
          <div className="w-full lg:w-[36%] flex flex-col items-center lg:items-start gap-4">
            <p className="text-[#FFFFFFB2] text-base leading-6 font-secondary text-center lg:text-left">
              Discover the key advantages that set WrapMyRide.ai apart as the leading AI-powered car wrap visualization platform.
            </p>
            <div>
              <YellowButton>BOOK A DEMO</YellowButton>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="pt-10 lg:pt-20">
          <img src={whyHero} alt="Why Us Visual" className="w-full h-auto object-contain" />
        </div>
      </CommonWrapper>
    </section>
  );
}
