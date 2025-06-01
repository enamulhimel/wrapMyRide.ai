import CommonWrapper from "@/common/CommonWrapper";
import HeroHeader from "@/common/HeroHeader";
import { Compare } from "@/components/ui/compare";
import aiIcon from "../../assets/homepage/AI Icon.svg"
import bgIMG from "../../assets/Hero BG.png"


export function HeroSection() {
  return (
    <section className="w-full border-b border-[rgba(255,255,255,0.36)] flex flex-col items-center justify-center hero-section bg-no-repeat bg-cover bg-center overflow-hidden  "
      style={{ backgroundImage: `url(${bgIMG})` }}
    >
      <CommonWrapper className="w-full flex flex-col pt-20 lg:px-0 px-5">
        <HeroHeader className="md:w-4xl pt-20">  See Your Car Wrapped Before You Buy
          <img src={aiIcon} alt="" className="inline-block h-12 w-12 align-middle animate-pulse" />
          <p className="md:w-2xl md:text-lg text-base font-secondary text-[#FFFFFFB2] leading-6 pt-6">  Instantly visualize custom car wrap designs using our powerful AI tool.</p>
        </HeroHeader>

        <div className="flex justify-end items-center w-full  pt-10">
          <Compare
            firstImage="/src/assets/cars/hero car/1.png" // Replace with your before image path
            secondImage="/src/assets/cars/hero car/2.png" // Replace with your after image path
            firstImageClassName="object-cover"
            secondImageClassname="object-cover"
            className="w-full h-[100px] md:w-[85%] md:h-[300px] "
            slideMode="hover"
            autoplay={true}
          />
        </div>
      </CommonWrapper>

    </section>
  );
} 