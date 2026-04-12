import AnimatedArrow from '@/components/animation/AnimatedArrow'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


export default function ScheduleMeetingBtn({ className }: { className?: string }) {
  return (
    <Link href={"#"} className={className}>
      <Button className="cursor-pointer text-white border-0 bg-primary-color hover:bg-[#d41145] duration-200 px-5.5 py-5.5 rounded-[5px]  font-bold group">
        Schedule A Meeting <AnimatedArrow />
      </Button>
    </Link>
  )
}
