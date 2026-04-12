import ClientsReviews from "@/components/modules/home/ClientsReviews/ClientsReviews";
import CompaniesLogo from "@/components/modules/home/CompaniesLogo";
import FAQ from "@/components/modules/home/FAQ";
import GetInTouchSection from "@/components/modules/home/GetInTouchSection";
import GettingStarted from "@/components/modules/home/GettingStarted";
import Hero from "@/components/modules/home/Hero";
import Pricing from "@/components/modules/home/pricing/Pricing";
import Service from "@/components/modules/home/service/Service";
import Tools from "@/components/modules/home/Tools";
import WhyChooseUs from "@/components/modules/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <>
        <Hero />
      </>
      <div className="md:mt-12.5 mt-7">
        <CompaniesLogo />
      </div>
      <div className="md:mt-13.75 mt-9">
        <Service />
      </div>
      <div className="md:mt-18.25 mt-12">
        <Pricing />
      </ div>
      <div className="md:mt-21 mt-14">
        <Tools />
      </div>
      <div className="md:mt-16.75 mt-10">
        <GettingStarted />
      </div>
      <div className="md:mt-21 mt-14">
        <WhyChooseUs />
      </div>
      <div className="md:mt-30.25 mt-20">
        <ClientsReviews />
      </div>
      <div className="md:mt-45 mt-32">
        <FAQ />
      </div>
      <div className="mt-4.75 md:mb-19.25 mb-10">
        <GetInTouchSection />
      </div>
    </div>
  );
}
