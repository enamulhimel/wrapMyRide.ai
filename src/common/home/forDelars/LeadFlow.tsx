
import SectionHeader from "@/common/SectionHeader";
import YellowButton from "@/common/YellowButton";




interface Step {
  title: string;
  description: string;
}

interface LeadFlowProps {
  heading: string;
  subheading?: string;
  ctaLabel?: string;
  steps: Step[];
}

export default function LeadFlow({
  heading,
  subheading,
  ctaLabel,
  steps,
}: LeadFlowProps) {
  return (
    <section>
      <div className="mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg font-secondary font-normal leading-7 text-[#FFFFFFB2] pb-4">
            {subheading}
          </p>
          <SectionHeader className="pb-8">
            <h2>{heading}</h2>
          </SectionHeader>

          <YellowButton>{ctaLabel ?? ""}</YellowButton>
        </div>

        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <div className=" flex items-center justify-center font-bold text-2xl text-white font-primary leading-6">
                  {String(index + 1).padStart(2, "0")}
                </div>
                {index !== steps.length - 1 && (
                  <div className="w-px h-20 bg-white mt-2"></div>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-primary font-bold text-white leading-6 mb-4">
                  {step.title}
                </h3>
                <p className="text-base text-[#FFFFFFB2] font-secondary font-normal leading-6">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
