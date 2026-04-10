import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Of course! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. No questions asked. Your access will continue until the end of your current billing period.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional information such as your company name, address, and VAT number to your invoices from your account settings.",
  },
  {
    question: "How does billing work?",
    answer:
      "We offer monthly and annual billing options. Annual billing gives you a 20% discount. All payments are processed securely through Stripe.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can update your account email from the settings page. A verification link will be sent to your new email address to confirm the change.",
  },
];


export default function FAQ() {
  return (
    <Container className="lg:space-y-20 space-y-12 bg-light-gray py-8 px-4 rounded-md">
      <SectionTitle
        title="Frequently asked questions"
        subTitle="Everything you need to know about the product and billing."
      />
      <div className="mx-auto max-w-2xl">
        <Accordion type="single" collapsible className="w-full  space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className=" lg:pb-6 pb-4 border-primary-color/28">
              <AccordionTrigger className="text-lg font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-primary-gray">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
