import CommonWrapper from "@/common/CommonWrapper";
import SectionHeader from "@/common/SectionHeader";
import { useState } from "react";
import backgroundImage from "../../assets/cardImg.png";
import YellowButton from "@/common/YellowButton";
import card1 from "../../assets/whyUs/card1.png"
import card2 from "../../assets/whyUs/card2.png"
import card3 from "../../assets/whyUs/card3.png"



type Tab = "wrapShops" | "dealerships" | "restylers";

const tabContent: Record<Tab, {
  title: string;
  description: string;
  icon: string; 
  
}> = {
  wrapShops: {
    title: "Vehicle Wrap Shops",
    description:
      "Customizers, PPF installers, and tint professionals use WrapMyRide.ai to speed up sales and eliminate the need for manual mockups.",
    icon: card1,
  },
  dealerships: {
    title: "Auto Dealerships",
    description:
      "From F&I upsells to aftermarket departments, dealerships embed our tool to help customers visualize upgrades and say “yes” on the spot.",
    icon: card2,
  },
  restylers: {
    title: "Mobile Restylers",
    description:
      "Solo operators and mobile wrap teams use the platform to pitch wraps on-site — no laptops or designers needed.",
    icon: card3,
   
  },
};


export const WrapMyRideTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>("wrapShops");

  return (
    <section className=" text-white pt-12 px-4 md:px-12">
<CommonWrapper>
<div className="text-center">
          <p className="text-lg font-secondary font-normal leading-7 text-[#FFFFFFB2] pb-4">
        Use Cases
          </p>
          <SectionHeader className="pb-8  mx-auto text-center">
            <h2>Who Benefits from WrapMyRide.ai?</h2>
            <p className="text-lg font-secondary font-normal leading-7 text-[#FFFFFFB2] pt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
          </SectionHeader>
        </div>
     <div className="relative p-6 grid md:grid-cols-3 gap-0  pt-20 bg-[#000000]">
  {/* Tab Menu */}
  <div className="relative z-10 flex flex-col  bg-black  h-96 "
  
  style={{
    backgroundImage: `
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='49' height='49' fill='none' stroke='%23ffffffcc' stroke-width='0.3'/%3E%3C/svg%3E"),
      url(${backgroundImage})
    `,
    backgroundRepeat: 'repeat, no-repeat',
    backgroundPosition: 'top left, center',
    backgroundSize: 'auto, cover',
  }}>
     {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none" />
  <button
    className={`w-full flex-1 z-10 py-4 px-6 text-left border border-white text-white transition font-secondary font-medium text-[20px] leading-5 hover:bg-black hover:border-l-amber-300 ${
      activeTab === "wrapShops" ? " border-l-amber-300 bg-black" : " border-l-white"
    }`}
    onClick={() => setActiveTab("wrapShops")}
  >
    Vehicle Wrap Shops
  </button>
  <button
    className={`w-full flex-1 py-4 z-10 px-6 text-left border border-[#A9A9A9] text-white transition font-secondary font-medium text-[20px] leading-5 hover:bg-black hover:border-l-amber-300 ${
      activeTab === "dealerships" ? "" : ""
    }`}
    onClick={() => setActiveTab("dealerships")} >
    Auto Dealerships
  </button>
  <button
    className={`w-full flex-1 z-10 py-4 px-6 text-left border border-[#A9A9A9] text-white transition font-secondary font-medium text-[20px] leading-5 hover:bg-black hover:border-l-amber-300 ${
      activeTab === "restylers" ? "" : ""
    }`}
    onClick={() => setActiveTab("restylers")}>
    Mobile Restylers
  </button>
</div>

  {/* Tab Content */}
 <div
  className="relative z-10 md:col-span-2 p-6 md:p-16 border bg-black border-[#A9A9A9] text-white"
  style={{
    backgroundImage: `
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='49' height='49' fill='none' stroke='%23ffffffcc' stroke-width='0.3'/%3E%3C/svg%3E"),
      url(${backgroundImage})`,
    backgroundRepeat: 'repeat, no-repeat',
    backgroundPosition: 'top left, center',
    backgroundSize: 'auto, cover',
  }}>
  {/* Overlay */} 
  <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none" />

  {/* Content area should always be relative and z-10 */}
  <div className="relative z-10">
  <div className=" pb-6  ">
  <img src={tabContent[activeTab].icon} alt="icon" className="w-12 h-12 " />
 <h2 className="text-xl md:text-2xl text-white font-primary font-bold"> {tabContent[activeTab].title}</h2> 
</div>


<p className="text-[#FFFFFFB2] text-base font-secondary leading-6 pb-6">{tabContent[activeTab].description}</p>

<div className="flex flex-wrap gap-4">
  <YellowButton>SIGN UP now</YellowButton>

  {/* Show LEARN MORE button only if it's NOT the last tab */}
  {activeTab !== "restylers" && (
    <button className="border border-white text-white px-4 py-2 text-lg font-secondary font-medium hover:bg-gray-800 transition">
      LEARN MORE
    </button>
  )}
</div>
</div>
</div>
</div>

</CommonWrapper>
          
    </section>
  );
};
