import ElementMovement from '@/components/animation/ElementMovement'
import ScheduleMeetingBtn from '@/components/shared/Navbar/ScheduleMeetingBtn'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className='min-h-[calc(100vh-100px)] md:py-15 py-10 bg-contain  flex-center relative' style={{ backgroundImage: `url('/images/hero_bg.png')` }}>
      <div className='max-w-230.75 mx-auto bg-white/60 lg:py-32 md:py-24 py-18 lg:px-30 md:px-20 px-4 rounded-[100%] flex-center flex-col text-center text-black relative'>
        <div className='md:mb-7.75 mb-5 z-10 '>
          <h4 className='md:text-5xl text-3xl font-bold'>Airbnb Assistants For</h4>
          <h6 className='md:text-[38px] text-2xl font-medium'> Property Management</h6>
        </div>
        <p className='text-sm font-medium md:mb-9.75 mb-6 z-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <ScheduleMeetingBtn className='z-10' />
        <Link href={'#pricing'} className='text-sm font-medium md:mt-6.75 mt-4 underline z-10'>See Pricing</Link>

        {/* ================== set absolute images ========================= */}
        <div className="absolute top-2 left-0  hidden md:block">
          <ElementMovement duration={3} x="20%">
            <Image alt="about_image" src={"/images/hero_image_1.png"} width={1200} height={1200} className='w-auto h-auto object-contain' ></Image>
          </ElementMovement>
        </div>

        <div className="absolute bottom-8 left-0 hidden md:block">
          <ElementMovement duration={3} y="20%">
            <Image alt="about_image" src={"/images/hero_image_2.png"} width={1200} height={1200} className='w-auto h-auto object-contain' ></Image>
          </ElementMovement>
        </div>

        <div className="absolute bottom-5 right-0 hidden md:block">
          <ElementMovement duration={3} x="20%">
            <Image alt="about_image" src={"/images/hero_image_3.png"} width={1200} height={1200} className='w-auto h-auto object-contain' ></Image>
          </ElementMovement>
        </div>

        <div className="absolute top-5 right-2 hidden md:block">
          <ElementMovement duration={3} y="20%">
            <Image alt="about_image" src={"/images/hero_image_4.png"} width={1200} height={1200} className='w-auto h-auto object-contain' ></Image>
          </ElementMovement>
        </div>

      </div>

      {/* ================== set absolute balls ========================= */}
      <div className='bg-[#635BFF] size-3.25 absolute top-1/4 left-1/12 rounded-full shadow-[0px_2px_6.3px_0px_rgba(0,0,0,0.25)]'></div>
      <div className='bg-[#FF5A5F] size-3.25 absolute top-1/2 left-1/6 rounded-full shadow-[0px_2px_6.3px_0px_rgba(0,0,0,0.25)]'></div>
      <div className='bg-[#FFEC5A] size-1.75 absolute top-3/4 left-[10%] rounded-full shadow-[0px_2px_6.3px_0px_rgba(0,0,0,0.25)]'></div>
      <div className='bg-[#5AF9FF] size-3.25 absolute top-1/6 left-1/2 rounded-full shadow-[0px_2px_6.3px_0px_rgba(0,0,0,0.25)]'></div>
      <div className='bg-[#34E0A1] size-3.75 absolute top-1/6 left-1/2 rounded-full shadow-[0px_2px_6.3px_0px_rgba(0,0,0,0.25)]'></div>
      <div className='bg-[#5AF9FF] size-3.25 absolute  bottom-1/12 left-1/2 rounded-full shadow-[0px_2px_6.3px_0px_rgba(0,0,0,0.25)]'></div>
      <div className='bg-[#FFEC5A] size-3.25 absolute top-1/3 right-1/12 rounded-full shadow-[0px_2px_6.3px_0px_rgba(0,0,0,0.25)]'></div>
      <div className='bg-[#0C3B7C] size-1.75 absolute top-3/4 right-[5%] rounded-full shadow-[0px_2px_6.3px_0px_rgba(0,0,0,0.25)]'></div>

    </div>
  )
}
