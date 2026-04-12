import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { TPricing } from '@/types'
import { Check, X } from 'lucide-react'

export function PricingCard({
    title,
    description,
    price,
    period,
    features,
    highlighted = false,
}: TPricing) {
    return (
        <div
            className={cn(
                'rounded-lg px-6 py-10 flex flex-col',
                highlighted
                    ? 'bg-primary-color text-white shadow-lg'
                    : 'bg-white border border-[#FAC4D2] text-gray-900'
            )}
        >
            {/*================================= Header ========================== */}
            <h3 className="text-[22px] font-bold mb-2.75">{title}</h3>
            <p className={cn('mb-6', highlighted ? 'text-[#F7F8F9]' : 'text-primary-gray')}>
                {description}
            </p>

            {/* Price */}
            <div className="md:mb-6 mb-4">
                <span className="md:text-[56px] text-4xl font-bold">${price}</span>
                <span className={cn('ml-2', highlighted ? 'text-[#F7F8F9]' : 'text-primary-gray')}>
                    / {period}
                </span>
            </div>

            {/* ================================ CTA Button ==================================== */}
            <Button
                className={cn(
                    'w-full md:mb-10 mb-7 font-semibold rounded-sm py-5 cursor-pointer',
                    highlighted
                        ? 'bg-white text-primary-color hover:bg-gray-100'
                        : 'border border-primary-color text-primary-color hover:bg-pink-50'
                )}
                variant={highlighted ? 'default' : 'outline'}
            >
                Get Started Now
            </Button>

            {/* ================================ Features =======================================*/}
            <div className="space-y-4 flex-1">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        {feature.included ? (
                            <div
                                className={cn(
                                    'shrink-0 size-8 rounded-full flex items-center justify-center',
                                    highlighted ? 'bg-white' : 'bg-[#FAC4D2]'
                                )}
                            >
                                <Check
                                    size={16}
                                    className="text-primary-color"
                                    strokeWidth={3}
                                />
                            </div>
                        ) : (
                            <div
                                className={cn(
                                    'shrink-0 size-8 rounded-full flex items-center justify-center',
                                    highlighted ? 'bg-white' : 'bg-[#F7F8F9]'
                                )}
                            >
                                <X
                                    size={16}
                                    className={cn("text-[#191D23]")}
                                    strokeWidth={3}
                                />
                            </div>
                        )}
                        <span
                            className={cn(
                                'font-medium',
                                !highlighted && 'text-[#191D23]',
                                !feature.included && !highlighted && 'text-[#A0ABBB]'
                            )}
                        >
                            {feature.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}