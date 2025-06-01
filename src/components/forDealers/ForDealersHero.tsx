import HeroHeader from "@/common/HeroHeader";
import bg1 from "../../assets/forDelars/bg1.png"
import bg2 from "../../assets/forDelars/bg2.png"
import YellowButton from "@/common/YellowButton";

export default function ForDealersHero() {
  return (
      <section className="lg:pt-[200px] pt-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse  lg:flex-row gap-10 px-4">
        {/* Left Text Section */}
        <div className="flex-1 text-center lg:text-left">
     
        <HeroHeader>  
          <h2>Sell More Cars with Engaging Visuals </h2> 
          <p className="text-[#FFFFFFB2] text-lg leading-7 pt-6 font-secondary">Integrate our AI car wrap visualizer directly into your dealership website to excite buyers and capture leads. </p>
          
           </HeroHeader>
      

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <YellowButton> SCHEDULE A DEMO</YellowButton>
          
            <button className="bg-white hover:bg-gray-  text-black font-medium px-6 py-3 font-secondary text-lg uppercase transition duration-200 cursor-pointer">
              LEARN ABOUT PRICING
            </button>
          </div>
        </div>

        {/* Right Image Section with two stacked images */}
           <div className="w-full lg:w-1/2 relative">
          {/* Second image as background full width */}
       
<div className="relative w-full xl:w-[calc(100vw-50rem)] lg:h-[570px] overflow-hidden rounded-lg shadow-xl ">
  <img
    src={bg1}
    alt="Car Visualizer Screenshot 2"
    className="w-full h-full object-contain"
  />
</div>

{/* First image overlaid on top left */}
<div className="absolute -top-10 right-0   z-10 h-[350px]">
  <img
    src={bg2}
    alt="Car Visualizer Screenshot 1"
    className="w-full h-full object-contain rounded-lg shadow-2xl"
  />
</div>

      </div>
      </div>
    </section>
  );
}
