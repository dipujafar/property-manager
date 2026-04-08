import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Container from "../Container";
import SmallNavSheet from "./SmallNavSheet";
import { navLinks } from "./utils";
import { Button } from "@/components/ui/button";
import AnimatedArrow from "@/components/animation/AnimatedArrow";

function Navbar({ className }: { className?: string }) {
  return (
    <div className={cn("sticky top-0 left-0 bg-white py-6 shadow-[0_3px_8px_rgba(212,17,69,0.25)]", className)}>
      <Container>
        <div className="flex-between gap-x-5">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              className="h-8 md:h-8 xl:h-9 w-auto object-cover"
              placeholder="blur"
              blurDataURL={"/blurImage.jpg"}
            />
          </Link>

          <ul className="lg:flex flex-row gap-x-5 lg:gap-x-8 items-center hidden text-lg">
            {navLinks?.map((nav) => {
              return (
                <li key={nav?.id} className="relative group">
                  <Link
                    href={nav?.rout}
                    className={cn("text-primary-gray font-medium hover:text-primary-color duration-200 pb-1 block text-[#1E1E1E]", nav?.active && "text-primary-color")}
                  >
                    {nav?.label}
                    <span className={cn("absolute bottom-0 left-0 h-0.5 w-full bg-primary-color scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left", nav?.active && "scale-x-100")} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div>
            <div className="lg:block  hidden">
              <Link href={"#"}>
                <Button className="cursor-pointer text-white border-0 bg-primary-color hover:bg-[#d41145] duration-200 px-5.5 py-4.5 rounded-[5px]  font-bold group">
                  Schedule A Meeting <AnimatedArrow />
                </Button>
              </Link>
            </div>
            <div className="lg:hidden block">
              <SmallNavSheet />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
