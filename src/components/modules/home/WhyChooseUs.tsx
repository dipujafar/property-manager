import Container from '@/components/shared/Container'
import { Check } from 'lucide-react'
import officerImage from "@/assets/images/officer_image.png"
import Image from 'next/image'
import chooseUsImage2 from "@/assets/images/choose_us_image_2.png"
import chooseUsImage3 from "@/assets/images/choose_us_image_3.png"
import chooseUsImage4 from "@/assets/images/choose_us_image_4.png"
import ScheduleMeetingBtn from '@/components/shared/Navbar/ScheduleMeetingBtn'


const features = [
    "Brilliant Client Service",
    "Flexibility & Adaptibility",
    "We make it Personal",
    "We have expart in our team"
]

export default function WhyChooseUs() {
    return (
        <Container className='bg-light-pink border border-primary-pink rounded-2xl lg:py-16.5 py-10 lg:pl-22.5 md:pl-9.5 pl-3 md:pr-9.5 pr-3 flex-between flex-col md:flex-row gap-5 '>
            <div className='flex-1 max-w-md'>
                <h3 className='text-black lg:text-4xl md:text-2xl text-xl font-bold md:mb-6.5 mb-4'>Few Reasons Why you Choose us?</h3>
                <p className='text-black text-sm font-semibold md:mb-7.5 mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
                <ul className='flex flex-col gap-y-3.5 lg:mb-11.25 mb-8'>
                    {
                        features?.map((feature, i) => (
                            <li key={i} className='flex items-center gap-x-2'><div className='size-8 flex-center bg-[#FAC4D2] rounded-full text-primary-color'><Check size={16} /></div> <span className='font-bold'>{feature}</span></li>
                        ))
                    }
                </ul>
               <ScheduleMeetingBtn  />
            </div>

            <div className='flex-1 flex-center relative'>
                {/* =================== set bg layer image ========================= */}
                <div
                    className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full xl:h-[85%] h-full bg-contain bg-bottom bg-no-repeat '
                    style={{ backgroundImage: `url('/images/choose_us_image_1.png')` }}
                />
                <Image
                    src={officerImage}
                    width={1200}
                    height={1200}
                    alt="officer image"
                    className='w-auto h-auto object-cover relative z-20'
                />
                {/* =================== set absolute images ========================= */}
                <Image
                    src={chooseUsImage2}
                    width={1200}
                    height={1200}
                    alt="absolute image 1"
                    className='w-auto h-auto object-cover absolute top-4 left-3 z-10 hidden md:block'
                />
                <Image
                    src={chooseUsImage3}
                    width={1200}
                    height={1200}
                    alt="absolute image 2"
                    className='w-auto h-auto object-cover absolute -bottom-20 left-0 z-10 hidden md:block'
                />
                <Image
                    src={chooseUsImage4}
                    width={1200}
                    height={1200}
                    alt="absolute image 3"
                    className='w-auto h-auto object-cover absolute top-0 right-4 z-10 hidden md:block'
                />
            </div>

        </Container>
    )
}
