
import { ChevronRight } from "lucide-react";
import backgroundImage from "../../assets/cardImg.png";
import warpLeft from "../../assets/homepage/warp-left.jpg"
import ai from "../../assets/homepage/AI Icon.svg";


const LeftWarpCard: React.FC = () => {

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
            <h3 className="font-secondary text-base font-normal text-[#FFFFFFB2] leading-6 pb-2">For Wrap Shops</h3>
            <h2 className="font-primary text-2xl font-bold text-white leading-6 pb-6">Let Them See Before You Do It</h2>
            <p className="font-secondary text-sm font-normal text-[#FFFFFFB2] leading-5 pb-8">Generate more qualified leads by letting customers design their wrap directly on your site. Customize the tool to match your brand.</p>

            <button className='text-lg  py-2 font-medium leading-[27px] font-secondary  tracking-[0.36px] uppercase text-[#FFE600] flex items-center gap-2'>Learn More for Wrap Shops   <ChevronRight /> </button>
          </div>
          <div className="bg-[#1C252D] p-8">
            <img src={warpLeft} alt="" />
            <div className="py-6">
              <div className="flex justify-between">
                <h3 className="text-xl font-medium uppercase text-[#E7EDFF] leading-[30px] font-dm">Vinyl Wrap (USA)</h3>
                <p className="text-[28px] font-bold uppercase text-[#E7EDFF] leading-[42px] font-dm">$459.00</p>
              </div>
              <div className="gap-3 flex">
                <button className="px-4 py-[6px] rounded-lg border-[1px] border-white text-center bg-[rgba(255,255,255,0.16)] text-sm text-[#E9EFFF] font-dm">White</button>
                <button className="px-4 py-[6px] rounded-lg border-[1px] border-[#FE6902] text-center bg-[rgba(254,107,2,0.16)] text-sm text-[rgba(254,107,2,0.90)]  font-dm">Orange</button>
                <button className="px-4 py-[6px] rounded-lg border-[1px] border-[#BE1E9A] text-center bg-[rgba(190,30,154,0.16)] text-sm text-[#BE1E9A]  font-dm">Purple</button>
                <button className="px-4 py-[6px] rounded-lg border-[1px] border-[#0062DF] text-center bg-[rgba(0,98,223,0.16)] text-sm text-[#0062DF]  font-dm">Blue</button>
              </div>
              <div className="border-t border-[1px] border-[rgba(255,255,255,0.36)] my-6" />

              <div className="flex items-center justify-between">
                <button className="px-4 py-2 rounded-lg  text-center bg-[#FF5733] text-lg flex items-center justify-between font-bold text-white leading-7 font-dm">Try On Wrap Styles <img src={ai} alt="" /></button>

                <button className="px-4 py-2 rounded-lg  text-center bg-[rgba(255,87,51,0.16)] border-[1px] border-[#FF5733] text-lg flex items-center justify-between font-bold text-white leading-7 font-dm">Add to Cart </button>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LeftWarpCard;