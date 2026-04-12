'use client'
import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

interface Testimonial {
    id: string
    name: string
    description: string
    rating: number
    avatar: string
}

interface TestimonialCarouselProps {
    items: Testimonial[]
}

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
    const [carouselRef, api] = useEmblaCarousel(
        {
            align: 'center',
            loop: true,
            skipSnaps: false,
        },
        [
            AutoPlay({
                delay: 4000,
                stopOnInteraction: false,
            }),
        ]
    )

    const [selectedIndex, setSelectedIndex] = React.useState(0)

    React.useEffect(() => {
        if (!api) return

        const onSelect = () => {
            setSelectedIndex(api.selectedScrollSnap())
        }

        api.on('select', onSelect)
        onSelect()

        return () => {
            api.off('select', onSelect)
        }
    }, [api])

    return (
        <div className="w-full">
            <div className="overflow-hidden" ref={carouselRef}>
                <div className="flex gap-4 md:gap-6 -ml-2 md:-ml-3">
                    {items.map((item, index) => (
                        <div
                            key={item.id}
                            className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_33.333%] pl-2 md:pl-3 py-5"
                        >
                            <div
                                className={`transition-all duration-300 rounded-lg p-6 h-full flex flex-col justify-between ${selectedIndex === index
                                        ? 'bg-white shadow-[0px_4px_77.4px_0px_rgba(136,136,136,0.41)] scale-100'
                                        : 'bg-[#F6F6F6] shadow-sm scale-95 opacity-60'
                                    }`}
                            >
                                <div>
                                    <div className="flex items-start gap-4 mb-4">
                                        <Avatar className={`size-25 shrink-0`}>
                                            <AvatarImage src={item.avatar} alt={item.name} />
                                            <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-base md:text-xl text-gray-900">
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-primary-gray mt-1.25">
                                                {item.description}
                                            </p>
                                            <div className="flex gap-0.5 mt-3">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className={
                                                            i < item.rating
                                                                ? 'fill-[#FF9D00] text-[#FF9D00]'
                                                                : ' text-[#FF9D00]'
                                                        }
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}
