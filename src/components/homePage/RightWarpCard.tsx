
import { ChevronRight } from "lucide-react";
import backgroundImage from "../../assets/cardImg.png";
import warpright from "../../assets/homepage/warp-right.png"
import ai from "../../assets/homepage/AI Icon.svg";


const RightWarpCard: React.FC = () => {

  return (
    <div
      className="relative  bg-[#000000] border border-[rgba(255,255,255,0.36)] overflow-hidden "
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='49' height='49' fill='none' stroke='%23ffffffcc' stroke-width='0.3'/%3E%3C/svg%3E"),
          url(${backgroundImage})
        `,
        backgroundRepeat: "repeat, no-repeat",
        backgroundPosition: "top left, center",
        backgroundSize: "auto, cover",
      }}
    >
      <div className="absolute inset-0 h-full bg-black/70 z-0 pointer-events-none" />
      <div className="relative z-10">

        <div className="max-w-full">
          <div className="p-12">
            <h3 className="font-secondary text-base font-normal text-[#FFFFFFB2] leading-6 pb-2">For Auto Dealers</h3>
            <h2 className="font-primary text-2xl font-bold text-white leading-6 pb-6">Let Them Dream Before Buying Dream</h2>
            <p className="font-secondary text-sm font-normal text-[#FFFFFFB2] leading-5 pb-8">Help buyers visualize custom wraps on your inventory. Increase sales appeal and capture interested leads instantly.</p>

            <button className='text-lg  py-2 font-medium leading-[27px] font-secondary  tracking-[0.36px] uppercase text-[#FFE600] flex items-center gap-2'>Learn More for Auto Dealers  <ChevronRight /> </button>
          </div>
          <div className="bg-[#1C252D] p-8">

            <div className="py-6">
              <div className="flex justify-between pb-6">
                <div className="">   <h3 className="text-xl font-medium uppercase text-[#E7EDFF] leading-[30px] font-dm">2026 BMW M4 Coupe</h3>
                  <p className="text-lg text-[#FFFFFFA6] font-normal font-dm">Sedan</p>
                </div>

                <p className="text-[28px] font-bold uppercase text-[#E7EDFF] leading-[42px] font-dm">$459.00</p>
              </div>

              <img src={warpright} alt="" className="h-full w-full bg-cover" />

              <div className="flex items-center justify-between">
                <button className="px-4 py-2 rounded-lg  text-center bg-[#4375F9] text-lg flex items-center justify-between font-bold text-white leading-7 font-dm">See Your Car Wrapped <img src={ai} alt="" /></button>

                <button className="px-4 py-2 rounded-lg  text-center bg-[rgba(67,117,249,0.16)] border-[1px] border-[#4375F9] text-lg flex items-center justify-between font-bold text-white leading-7 font-dm">Add to Cart </button>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default RightWarpCard;