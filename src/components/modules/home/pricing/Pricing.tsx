import Container from '@/components/shared/Container'
import SectionTitle from '@/components/shared/SectionTitle'
import { Switch } from '@/components/ui/switch'
import arrowImage from "@/assets/images/arrow_sign_image.png"
import Image from 'next/image'
import { PricingCard } from './PricingCard'


const pricingData = [
    {
        title: 'Freebie',
        description: 'Ideal for individuals who need quick access to basic features.',
        price: 0,
        period: 'Month',
        features: [
            { name: '20,000+ of PNG & SVG graphics', included: true },
            { name: 'Access to 100 million stock images', included: true },
            { name: 'Upload custom icons and fonts', included: false },
            { name: 'Unlimited Sharing', included: false },
            { name: 'Upload graphics & video in up to 4k', included: false },
            { name: 'Unlimited Projects', included: false },
            { name: 'Instant Access to our design system', included: false },
            { name: 'Create teams to collaborate on designs', included: false },
        ],
    },
    {
        title: 'Professional',
        description: 'Ideal for individuals who need advanced features and tools for client work.',
        price: 25,
        period: 'Month',
        features: [
            { name: '20,000+ of PNG & SVG graphics', included: true },
            { name: 'Access to 100 million stock images', included: true },
            { name: 'Upload custom icons and fonts', included: true },
            { name: 'Unlimited Sharing', included: true },
            { name: 'Upload graphics & video in up to 4k', included: true },
            { name: 'Unlimited Projects', included: true },
            { name: 'Instant Access to our design system', included: false },
            { name: 'Create teams to collaborate on designs', included: false },
        ],
    },
    {
        title: 'Enterprise',
        description: 'Ideal for businesses who need personalized services and security for large teams.',
        price: 100,
        period: 'Month',
        features: [
            { name: '20,000+ of PNG & SVG graphics', included: true },
            { name: 'Access to 100 million stock images', included: true },
            { name: 'Upload custom icons and fonts', included: true },
            { name: 'Unlimited Sharing', included: true },
            { name: 'Upload graphics & video in up to 4k', included: true },
            { name: 'Unlimited Projects', included: true },
            { name: 'Instant Access to our design system', included: true },
            { name: 'Create teams to collaborate on designs', included: true },
        ],
    },
]


export default function Pricing() {
    return (
        <Container className=" lg:space-y-22.5 space-y-16 ">
            <div className='lg:space-y-8.5 space-y-5'>
                <SectionTitle
                    title="Airnbn Assistent pricing"
                    subTitle="Choose a plan that’s right for you"
                    className='lg:space-y-4 text-xl'
                />
                <div className='flex-center md:gap-6 gap-4 relative truncate overflow-visible w-fit mx-auto'>
                    <p>Pay Monthly </p>
                    <Switch id="payment" />
                    <p>Pay Yearly</p>

                    <div className='md:flex items-end absolute -top-4 -right-50 hidden '>
                        <Image src={arrowImage} alt="arrow" />
                        <span className='md:text-lg text-primary-color md:font-medium'>Save 25%</span>
                    </div>
                </div>
            </div>

           
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {pricingData.map((pricing, index) => (
                        <div key={index} className="flex-1 max-w-sm">
                            <PricingCard {...pricing} highlighted={index === 1} />
                        </div>
                    ))}
                
            </div>
        </Container>
    )
}



