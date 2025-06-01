import CommonWrapper from "@/common/CommonWrapper";
import backgroundImage from "../../assets/cardImg.png";
import SectionHeader from "@/common/SectionHeader";
import YellowButton from "@/common/YellowButton";
import unlash from "../../assets/homepage/unlash.jpg";
import SvgBackgroundButton from "@/common/SvgBackgroundButton";
import MovingButton from "@/common/MovingButton";
import ai from "../../assets/homepage/AI Icon.svg";

const UnleashYourCreativity: React.FC = () => {
  const features = [
    {
      title: "Text-to-Style",
      description:
        'Simply tell the AI exactly how you imagine your car looking (like "glossy blue with subtle ghost flames"), and it will bring your unique idea to life on screen.',
    },
    {
      title: "Precise Masking & Contour Mapping",
      description:
        "Don't worry about complicated editing. The AI perfectly applies the wrap design only to your car's body, naturally following all its curves and details, so it looks like a real photo.",
    },
    {
      title: "Background Replacement",
      description:
        "See how your wrapped car looks anywhere! Easily swap out the original background for different scenes, like a studio or a cool landscape, or even upload your own picture.",
    },
  ];

  return (
    <div
      className="relative p-6 bg-[#000000]"
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
        <CommonWrapper>
          <div className="max-w-full">
            <div className="max-w-2xl">
              <h3 className="text-lg text-[#FFFFFFB2] font-secondary pb-4">AI Capabilities</h3>
              <SectionHeader>
                <h2>Unleash Your Creativity With AI</h2>
              </SectionHeader>
              <p className="text-lg text-[#FFFFFFB2] font-normal leading-7 font-orbit pt-6">
                Our cutting-edge AI understands natural language descriptions and applies wraps with incredible accuracy, masking around details and following contours.
              </p>
            </div>

            {/* Responsive container  */}
            <div className="flex flex-col lg:flex-row gap-6 pt-10">
              {/* Left Features */}
              <div className="w-full lg:w-1/2 space-y-4">
                {features.map((item, idx) => (
                  <div
                    key={idx}
                    className="group py-4 px-6 border border-transparent hover:bg-black hover:border-l hover:border-[#FFFFFF29] hover:border-l-white transition-all duration-300 ease-in-out"
                  >
                    <h3 className="text-2xl font-bold text-[#FFFFFFB2] group-hover:text-white font-primary leading-8">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#FFFFFFB2] font-secondary leading-6 pt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
                <div className="mt-6">
                  <YellowButton className="uppercase w-full sm:w-auto">try now</YellowButton>
                </div>
              </div>

              {/* Right Image + Buttons */}
              <div className="w-full lg:w-1/2 bg-black border border-[rgba(255,255,255,0.36)] p-6 md:p-10">
                <img src={unlash} alt="Unlash Preview" className="w-full h-auto object-cover" />
                <div className="mt-6">
                  <SvgBackgroundButton className="w-full text-sidebar-accent-foreground">
                    Purple fluid marbling paint texture
                  </SvgBackgroundButton>
                </div>
                <div className="mt-6">
                  <MovingButton className="w-full" icon={<img src={ai} alt="AI Icon" className="w-6 h-6" />}>
                    Generate
                  </MovingButton>
                </div>
              </div>
            </div>
          </div>
        </CommonWrapper>
      </div>
    </div>
  );
};

export default UnleashYourCreativity;
