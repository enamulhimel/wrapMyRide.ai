import CommonWrapper from "@/common/CommonWrapper";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import SectionHeader from "@/common/SectionHeader";
import YellowButton from "@/common/YellowButton";


const faqs = [
  {
    question: "Do my customers pay to use the tool?",
    answer:
      "Nope. You pay for the tool as a business owner. Your customers use it free on your site — it's branded with your logo, not ours.",
  },
  {
    question: "How do I add the tool to my website?",
    answer:
      "You copy and paste a small embed code (like a YouTube video) — that's it. No developers needed.",
  },
  {
    question: "Is it mobile-friendly?",
    answer:
      "Yes. The tool works perfectly on desktop, tablet, and mobile.",
  },
  {
    question: "Can I remove the WrapMyRide.ai branding?",
    answer:
      "Yes. That's included in the Elite plan — full white-label experience.",
  },
  {
    question: "What kind of images work best?",
    answer:
      "Side profile photos in daylight or clear indoor lighting yield the best AI results. Our tool works with JPG and PNG uploads.",
  },
  {
    question: "Where do the leads go?",
    answer: "You choose: Zapier webhook to your CRM, email.",
  },
  {
    question: "What happens when I hit my render limit?",
    answer:
      "You'll be prompted to upgrade or wait for your next billing cycle. Elite plan users never worry about this.",
  },
];

export default function FAQSection() {
  return (
    <section className="lg:py-[150px] py-[100px] px-5 md:px-0">
        <CommonWrapper> 
     <SectionHeader className="text-center">
     <h2 >
          Frequently Asked Questions
        </h2>
     </SectionHeader>
       
        <div className=" py-20 grid grid-cols-1 md:grid-cols-2 gap-8 text-white px-4 md:px-0 ">
          {faqs.map((faq, index) => (
            <Accordion type="single" collapsible key={index} className="border-b border-t border-[rgba(255,255,255,0.36)]">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-normal font-secondary leading-7 ">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#FFFFFFB2] font-secondary leading-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="text-center">
            <p className="text-2xl font-primary text-white font-bold leading-6 pb-6">Still have questions?</p>
            <YellowButton > Contact Us</YellowButton>
        </div>
    
        </CommonWrapper>
    
    </section>
  );
}
