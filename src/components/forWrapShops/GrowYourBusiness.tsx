import CommonWrapper from '@/common/CommonWrapper';
import SectionHeader from '@/common/SectionHeader';
import SimpleCard from '@/common/SimpleCard';
import YellowButton from '@/common/YellowButton';

import warp1 from "../../assets/forWrapShops/warp1.svg";
import warp2 from "../../assets/forWrapShops/warp2.svg";
import warp3 from "../../assets/forWrapShops/warp3.svg";
import warp4 from "../../assets/forWrapShops/warp4.svg";




const cards = [
  {
    icon: <img src={warp1} alt="card1" className="w-12 h-12" />,
    title: 'Increase Website Dwell Time & Engagement',
    description: 'Integrate the tool seamlessly under your brand.',
  },
  {
    icon: <img src={warp2} alt="card2" className="w-12 h-12" />,
    title: 'Custom Branding & Backgrounds',
    description: 'Full control over logo, colors, and background images.',
  },
  {
 icon: <img src={warp3} alt="card2" className="w-12 h-12" />,
    title: 'Simplify Design Consultations',
    description: 'Configurable form to collect vital buyer information.',
  },
  {
   icon: <img src={warp4} alt="card2" className="w-12 h-12" />,
    title: 'Stand Out from Competitors',
    description: 'Automate lead flow into your existing systems.',
  },
 
];

const GrowYourBusiness = () => {
  return (
    <div className="lg:pt-[150px] pt-20 lg:px-0 px-5">
      <CommonWrapper className="space-y-10">
        <div>
          <p className="text-lg font-secondary font-normal leading-7 text-[#FFFFFFB2] pb-4">
           Benefits
          </p>
          <SectionHeader className="pb-8 max-w-[768px]">
            <h2>Grow Your Business with WrapMyRide.ai</h2>
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

        <YellowButton>sign up</YellowButton>
      </CommonWrapper>
    </div>
  );
};

export default GrowYourBusiness;
