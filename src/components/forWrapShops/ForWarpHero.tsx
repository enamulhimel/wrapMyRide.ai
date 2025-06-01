import HeroHeader from "@/common/HeroHeader";
import warpBg1 from "../../assets//forWrapShops/wrapBg1.png"
import warpBg2 from "../../assets//forWrapShops/wrapBg2.png"
import SubcribeButton from "../footer/SubcribeButton";



export default function ForWarpHero() {
  return (
      <section className="lg:pt-[200px] pt-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse  lg:flex-row gap-10 px-4">
        {/* Left Text Section */}
        <div className="flex-1 text-center lg:text-left">
     
        <HeroHeader>  
          <h2>Turn Website Visitors into Customers </h2> 
          <p className="text-[#FFFFFFB2] text-lg leading-7 pt-6 font-secondary">Empower your clients to visualize their dream wrap directly on your site, streamlining the design process and generating qualified leads. </p>
          
           </HeroHeader>
      

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
           <SubcribeButton> Start Your Free Trial</SubcribeButton>
             
          
            <button className="bg-white hover:bg-gray-200  text-black font-medium px-6 py-3 font-secondary text-lg uppercase transition duration-200 cursor-pointer">
             see pricing plan
            </button>
          </div>
        </div>

        {/* Right Image Section with two stacked images */}
           <div className="w-full lg:w-1/2 relative">
          {/* Second image as background full width */}
       
<div className="relative w-full xl:w-[calc(100vw-50rem)] lg:h-[570px] overflow-hidden rounded-lg shadow-xl ">
  <img
    src={warpBg1}
    alt="Car Visualizer Screenshot 2"
    className="w-full h-full object-contain"
  />
</div>

{/* First image overlaid on top left */}
<div className="absolute -top-10 right-0   z-10 h-[350px]">
  <img
    src={warpBg2}
    alt="Car Visualizer Screenshot 1"
    className="w-full h-full object-contain rounded-lg shadow-2xl"
  />
</div>

      </div>
      </div>
    </section>
  );
}
