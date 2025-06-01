import CommonWrapper from '@/common/CommonWrapper';
import SectionHeader from '@/common/SectionHeader';
import SimpleCard from '@/common/SimpleCard';
import YellowButton from '@/common/YellowButton';

import card1 from "../../assets/forDelars/card1.svg";
import card2 from "../../assets/forDelars/card2.svg";
import card3 from "../../assets/forDelars/card3.svg";
import card4 from "../../assets/forDelars/card4.svg";
import card5 from "../../assets/forDelars/card5.svg";
import card6 from "../../assets/forDelars/card6.svg";

const cards = [
  {
    icon: <img src={card1} alt="card1" className="w-12 h-12" />,
    title: 'White-Label Embeddable Widget',
    description: 'Integrate the tool seamlessly under your brand.',
  },
  {
    icon: <img src={card2} alt="card2" className="w-12 h-12" />,
    title: 'Custom Branding & Backgrounds',
    description: 'Full control over logo, colors, and background images.',
  },
  {
    icon: <img src={card3} alt="card3" className="w-12 h-12" />,
    title: 'Integrated Lead Capture Form',
    description: 'Configurable form to collect vital buyer information.',
  },
  {
    icon: <img src={card4} alt="card4" className="w-12 h-12" />,
    title: 'CRM Integration (Webhook/Zapier)',
    description: 'Automate lead flow into your existing systems.',
  },
  {
    icon: <img src={card5} alt="card5" className="w-12 h-12" />,
    title: 'Partner Dashboard & Analytics',
    description: 'Track widget usage, popular styles, and lead performance.',
  },
  {
    icon: <img src={card6} alt="card6" className="w-12 h-12" />,
    title: 'Dedicated Support',
    description: 'Get assistance when you need it.',
  },
];

const ToolsDesigned = () => {
  return (
    <div className="lg:pt-[150px] pt-20 lg:px-0 px-5">
      <CommonWrapper className="space-y-10">
        <div>
          <p className="text-lg font-secondary font-normal leading-7 text-[#FFFFFFB2] pb-4">
            Features
          </p>
          <SectionHeader className="pb-8 max-w-[768px]">
            <h2>Tools Designed to Drive Dealer Success</h2>
          </SectionHeader>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <SimpleCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <YellowButton>try now</YellowButton>
      </CommonWrapper>
    </div>
  );
};

export default ToolsDesigned;
