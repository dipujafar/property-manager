import ClientsReviews from "@/components/modules/home/ClientsReviews";
import Companies from "@/components/modules/home/Companies";
import ConpaniesLogo from "@/components/modules/home/ConpaniesLogo";
import FAQ from "@/components/modules/home/FAQ";
import GetInTouchSection from "@/components/modules/home/GetInTouchSection";
import GettingStarted from "@/components/modules/home/GettingStarted";

export default function Home() {
  return (
    <div>
      <ConpaniesLogo />
      <Companies />
      <GettingStarted />
      <ClientsReviews />
      <FAQ />
      <GetInTouchSection />
    </div>
  );
}
