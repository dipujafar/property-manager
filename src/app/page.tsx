import ClientsReviews from "@/components/modules/home/ClientsReviews";
import Companies from "@/components/modules/home/Companies";
import CompaniesLogo from "@/components/modules/home/CompaniesLogo";
import FAQ from "@/components/modules/home/FAQ";
import GetInTouchSection from "@/components/modules/home/GetInTouchSection";
import GettingStarted from "@/components/modules/home/GettingStarted";
import Pricing from "@/components/modules/home/pricing/Pricing";
import Service from "@/components/modules/home/service/Service";

export default function Home() {
  return (
    <div>
      <CompaniesLogo />
      <Service />
      <Pricing />
      <Companies />
      <GettingStarted />
      <ClientsReviews />
      <FAQ />
      <GetInTouchSection />
    </div>
  );
}
