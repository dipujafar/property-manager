import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';
import { TService } from '@/types';
import ServiceCard from './ServiceCard';


const services: TService[] = [
  {
    icon: "/images/service_icon_1.png",
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/service_icon_2.png",
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/service_icon_3.png",
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/service_icon_4.png",
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/service_icon_5.png",
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "/images/service_icon_6.png",
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];



export default function Service() {
  return (
    <Container className=" lg:space-y-13.5 space-y-8">
      <SectionTitle
        title="Our Service"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4'>
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>

    </Container>
  )
}
