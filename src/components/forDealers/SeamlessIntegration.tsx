import CommonWrapper from "@/common/CommonWrapper";
import LeadFlow from "@/common/home/forDelars/LeadFlow";


const steps = [
  {
    title: "Get Your Embed Code",
    description:
      "Sign up for a Dealer plan and get a unique JavaScript embed code from your dashboard.",
  },
  {
    title: "Customize Branding & Backgrounds",
    description:
      "Upload your dealership logo, set your brand colors, and add custom backgrounds like your showroom or lot photos.",
  },
  {
    title: "Embed on Your Site",
    description:
      "Easily copy and paste the code into your website (compatible with WordPress, Webflow, Dealer.com, etc.",
  },
  {
    title: "Capture & Manage Leads",
    description:
      "Leads with their contact info and wrap requests are sent directly to your dashboard and/or CRM.",
  },
];

export default function SeamlessIntegration() {
  return (
    <div className="lg:pt-[150px] pt-20 lg:px-0 px-5">
        <CommonWrapper>
              <LeadFlow
      heading={`Seamless Integration\n& Powerful Lead Flow`}
      subheading="How It Works"
      ctaLabel="Try Now"
      steps={steps}
    />
        </CommonWrapper>

    </div>
  
  );
}
