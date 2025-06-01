import CommonWrapper from "@/common/CommonWrapper";
import backgroundImage from "../../assets/cardImg.png";
import optional from "../../assets/pricing/optional1.svg";
import optiona2 from "../../assets/pricing/optional2.svg";

const OptionalAdd = () => {
  return (
    <CommonWrapper className="lg:px-0 px-5">
      <div
        className="relative p-6 sm:p-8 lg:p-16 custom-card h-full flex flex-col"
        style={{
          backgroundColor: "#000000",
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='49' height='49' fill='none' stroke='%23ffffffcc' stroke-width='0.3'/%3E%3C/svg%3E"),
            url(${backgroundImage})
          `,
          backgroundRepeat: "repeat, no-repeat",
          backgroundPosition: "top left, center",
          backgroundSize: "auto, cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        <div className="relative z-10 h-full">
          <h2 className="text-white text-xl sm:text-2xl font-primary font-bold leading-6">
            Optional Add-Ons
          </h2>

          <div className="pt-8 flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Card 1 */}
            <div className="w-full lg:w-1/2 border border-[rgba(255,255,255,0.36)] p-6">
              <img src={optional} alt="Install service" className="h-12 w-12" />
              <p className="text-base sm:text-lg font-medium font-secondary text-white pt-4">
                Onboarding & install service
              </p>
              <div className="text-white text-xl sm:text-2xl font-primary font-bold pt-3">
                $99{" "}
                <span className="text-base sm:text-lg font-medium font-secondary text-white">
                  /mo
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full lg:w-1/2 border border-[rgba(255,255,255,0.36)] p-6">
              <img src={optiona2} alt="Support rep" className="h-12 w-12" />
              <p className="text-base sm:text-lg font-medium font-secondary text-white pt-4">
                Dedicated support rep
              </p>
              <div className="text-white text-xl sm:text-2xl font-primary font-bold pt-3">
                $99{" "}
                <span className="text-base sm:text-lg font-medium font-secondary text-white">
                  /mo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default OptionalAdd;
