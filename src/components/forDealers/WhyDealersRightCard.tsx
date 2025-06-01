import WorkCard from "@/common/home/WorkCard";

import stopwacth from "../../assets/forDelars/Stopwatch.svg"
import offer from "../../assets/forDelars/offer.svg"
import capture from "../../assets/forDelars/capture.svg"
import enhance from "../../assets/forDelars/enhance.svg"

const cardData = [
  {
    icon: <img src={stopwacth} alt="Stopwatch" className="w-12 h-12" />,
    title: "Shorten Sales Cycles",
    description: "Help buyers make decisions faster by visualizing customizations early. Icon: Stopwatch.",
  },
  {
    icon: <img src={offer} alt="Offer"  className="w-12 h-12" />,
    title: "Offer Customization Without Inventory Risk",
    description: "Showcase endless wrap possibilities on existing stock or orderable models. Icon: Car with diverse wraps.",
  },
  {
    icon: <img src={capture} alt="Capture"  className="w-12 h-12" />,
    title: "Capture Qualified Leads Instantly ",
    description: "Get contact information and specific style requests from interested buyers. Icon: Lead form/contact card.",
  },
  {
    icon: <img src={enhance} alt="Enhance"  className="w-12 h-12" />,
    title: "Enhance Online Inventory Listings ",
    description: "Add a dynamic visualization option to your vehicle detail pages. Icon: Car listing/website icon.",
  },
];

const WhyDealersRightCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {cardData.map((card, index) => (
        <WorkCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default WhyDealersRightCard;
