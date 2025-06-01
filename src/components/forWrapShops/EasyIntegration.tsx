import CommonWrapper from "@/common/CommonWrapper";
import LeadFlow from "@/common/home/forDelars/LeadFlow";


const steps = [
  {
    title: "Sign Up & Customize",
    description:
      "Choose a plan and easily customize the widget in your dashboard with your logo, brand colors, and even custom background images.",
  },
  {
    title: "Embed the Widget",
    description:
      "Copy and paste the simple embed code onto any page of your website (works with WordPress, Shopify, Webflow, etc.",
  },
  {
    title: "Customers Visualize",
    description:
      "Visitors to your site use the interactive tool to create and visualize their desired wrap designs.",
  },
  {
    title: "Receive & Manage Leads",
    description:
      "Get instant notifications and view detailed lead information, including their design request, directly in your partner dashboard.",
  },
];

export default function EasyIntegration() {
  return (
    <div className="lg:pt-[150px] pt-20 lg:px-0 px-5">
        <CommonWrapper>
              <LeadFlow
      heading={`Easy Integration, Powerful Results`}
      subheading="How It Works"
      ctaLabel="Try Now"
      steps={steps}
    />
        </CommonWrapper>

    </div>
  
  );
}
