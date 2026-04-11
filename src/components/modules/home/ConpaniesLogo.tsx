import CCountUp from "@/components/shared/CCountUp";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const logoes = [
  "/images/logo_1.png",
  "/images/logo_2.png",
  "/images/logo_3.png",
  "/images/logo_4.png",
  "/images/logo_5.png",
  "/images/logo_6.png",
  "/images/logo_7.png",
];

export default function ConpaniesLogo() {
  return (
    <div className="lg:space-y-9 space-y-6">
      <h6 className="md:text-xl text-black font-semibold px-4 text-center">
        Trusted by leaders in <CCountUp end={50} />+ industries
      </h6>

      <div className="bg-[#F6F6F6] py-5 border border-red-400 ">
        <Marquee
          pauseOnHover
          gradient
          gradientWidth={50}
          gradientColor={"#ebe6e6"}
          speed={40}
        >
          {logoes.map((logo, index) => (
            <Image
              src={logo}
              key={index}
              width={1200}
              height={1200}
              alt="company logo"
              className="w-auto h-auto max-h-14 object-contain md:mx-15 mx-8"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
