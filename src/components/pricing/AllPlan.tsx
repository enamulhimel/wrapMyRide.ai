import CommonWrapper from "@/common/CommonWrapper";
import backgroundImage from "../../assets/cardImg.png";
import plan from "../../assets/pricing/plan.svg";

const AllPlan = () => {
  return (
    <CommonWrapper className="lg:px-0 px-5">
      <div
        className="relative p-6  lg:p-16 border border-[rgba(255,255,255,0.36)] h-full flex flex-col"
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Content */}
        <div className="relative z-10 h-full">
          <h2 className="text-white text-xl sm:text-2xl font-primary font-bold leading-6">
            All plans include:
          </h2>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-6 lg:px-8">
            {[
              "Mobile-friendly embeddable tool",
              "AI-powered wrap previews",
              "Lead form (Name, Email, Phone)",
              "Easy install with one line of code",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <img src={plan} alt="" className="w-6 h-6 mt-1" />
                <p className="text-base sm:text-lg font-medium font-secondary leading-5 text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CommonWrapper>
  );
};

export default AllPlan;
