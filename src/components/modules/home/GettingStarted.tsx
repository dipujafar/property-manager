import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";

const infoData = [
  {
    id: 1,
    icon: "/images/info_image_1.png",
    title: "Add requirements & sign up today",
  },
  {
    id: 2,
    icon: "/images/info_image_2.png",
    title: "Connect with your CSM & onboarding team",
  },
  {
    id: 3,
    icon: "/images/info_image_3.png",
    title: "Meet your STR Assistant next week",
  },
];

export default function GettingStarted() {
  return (
    <Container className="max-w-243 mx-auto lg:space-y-16 space-y-10">
      <SectionTitle
        title="Getting Started is Easy"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      />
      <div className="flex flex-wrap flex-col md:flex-row lg:gap-9.5 gap-5 items-stretch">
        {infoData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col flex-1 lg:space-y-8 space-y-6 mt-7 md:mt-0"
          >
            <div className="flex-1 bg-white py-7 px-4 flex items-center justify-center rounded-lg border border-light-pink hover:border-[#fbb9cb] duration-300 relative">
              {" "}
              {/* flex-1 here */}
              <Image
                src={item.icon}
                width={1200}
                height={1200}
                alt="info icon"
                className="w-auto  max-h-27 object-cover"
              />
              <div className="md:size-19 size-16 bg-white border-4 border-primary-color rounded-full absolute md:-top-6 -top-10 md:-left-6 flex-center">
                <span className="lg:text-[29px] text-2xl font-medium">{String(item.id).padStart(2, "0")}</span>
              </div>
            </div>
            <p className="lg:text-xl font-semibold text-center max-w-63.75 mx-auto">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}
