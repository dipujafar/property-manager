import SectionTitle from '@/components/shared/SectionTitle'
import { TestimonialCarousel } from './TestimonialCarousel'

const testimonials = [
  {
    id: '1',
    name: 'Jenny Wilson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
    avatar: '/images/user_image_1.png',
  },
  {
    id: '2',
    name: 'Esther Howard',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
    avatar: '/images/user_image_2.png',
  },
  {
    id: '3',
    name: 'Robert Fox',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
    avatar: '/images/user_image_3.png',
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 5,
    avatar: '/images/user_image_2.png',
  },
  {
    id: '5',
    name: 'Michael Chen',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 4,
    avatar: '/images/user_image_1.png',
   
  },
]



export default function ClientsReviews() {
  return (
    <div className=" lg:space-y-20 space-y-12">
      <SectionTitle
        title="Check Our Clients Review"
        subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      />

       <div>
          <TestimonialCarousel items={testimonials} />
        </div>
    </div>
  )
}
