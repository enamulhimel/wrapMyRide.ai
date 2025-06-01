import CommonWrapper from '@/common/CommonWrapper';
import SectionHeader from '@/common/SectionHeader';
import SimpleCard from '@/common/SimpleCard';
import YellowButton from '@/common/YellowButton';

import why1 from "../../assets/whyUs/why1.svg";
import why2 from "../../assets/whyUs/why2.svg";
import why3 from "../../assets/whyUs/why3.svg";
import why4 from "../../assets/whyUs/why4.svg";
import why5 from "../../assets/whyUs/why5.svg";
import why6 from "../../assets/whyUs/why6.svg";





const cards = [
  {
    icon: <img src={why1} alt="card1" className="w-12 h-12" />,
    title: 'Advanced AI Technology',
    description: 'Our proprietary AI understands natural language and applies wraps with unparalleled realism and precision.',
  },
  {
    icon: <img src={why2} alt="card2" className="w-12 h-12" />,
    title: 'Unmatched Visualization Quality',
    description: 'Experience stunningly realistic previews that accurately reflect how the wrap will look on your specific vehicle.',
  },
  {
    icon: <img src={why3} alt="card2" className="w-12 h-12" />,
    title: 'Easy-to-Use Interface',
    description: 'Designed for everyone – upload, type, and visualize in seconds, no graphic design skills needed.',
  },
  {
    icon: <img src={why4} alt="card2" className="w-12 h-12" />,
    title: 'Powerful Lead Generation for Businesses',
    description: 'Our embeddable widget is specifically built to engage your website visitors and capture high-intent leads directly.',
  },
   {
   icon: <img src={why5} alt="card2" className="w-12 h-12" />,
    title: 'Seamless Embeddable Widget',
    description: 'Easily integrate the tool into any website or CMS platform with a simple copy-paste code.',
  },
   {
    icon: <img src={why6} alt="card2" className="w-12 h-12" />,
    title: 'Built by Automotive Tech Experts (Proven ROI)',
    description: 'Developed by Proven ROI, a team with a deep understanding of the automotive industry.',
  },
 
];

const OurCompetitiveEdge = () => {
  return (
    <div className="lg:pt-[150px] pt-20 lg:px-0 px-5">
      <CommonWrapper className="space-y-10">
        <div>
          <p className="text-lg font-secondary font-normal leading-7 text-[#FFFFFFB2] pb-4">
          Key Differentiators
          </p>
          <SectionHeader className="pb-8  ">
            <h2>Our Competitive Edge</h2>
          </SectionHeader>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default OurCompetitiveEdge;
