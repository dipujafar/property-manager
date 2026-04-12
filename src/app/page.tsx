import ClientsReviews from "@/components/modules/home/ClientsReviews";
import Companies from "@/components/modules/home/Companies";
import CompaniesLogo from "@/components/modules/home/CompaniesLogo";
import FAQ from "@/components/modules/home/FAQ";
import GetInTouchSection from "@/components/modules/home/GetInTouchSection";
import GettingStarted from "@/components/modules/home/GettingStarted";
import Hero from "@/components/modules/home/Hero";
import Pricing from "@/components/modules/home/pricing/Pricing";
import Service from "@/components/modules/home/service/Service";
import WhyChooseUs from "@/components/modules/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <CompaniesLogo />
      <Service />
      <Pricing />
      <Companies />
      <GettingStarted />
      <ClientsReviews />
      <WhyChooseUs />
      <FAQ />
      <GetInTouchSection />
    </div>
  );
}
