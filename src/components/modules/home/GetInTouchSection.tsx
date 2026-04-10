"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const UserData = [
  {
    _id: 1,
    image: "/avatar_1.png",
  },
  {
    _id: 2,
    image: "/avatar_2.png",
  },
  {
    _id: 3,
    image: "/avatar_3.png",
  },
];
export default function GetInTouchSection() {
  return (
    <Container className="bg-[#F9FAFB] py-8 px-4 rounded-md lg:space-y-8 space-y-6 flex items-center flex-col">
      <div className="flex justify-center shrink-0 space-x-1.5 md:-space-x-2">
        {UserData.map((data, index) => (
          <motion.div
            initial={{ opacity: 0, x: "5%" }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                duration: 0.8,
                delay: 0.2 * data?._id,
              },
            }}
            viewport={{ once: true }}
            key={data._id}
            className={cn(index!== 0 &&"-translate-x-2",index == 1 && "z-10")}
          >
            <Image
              src={data.image}
              alt="user avatar"
              width={1200}
              height={1200}
              className={cn("size-14 rounded-full object-cover",index == 1 && "size-16 -translate-y-2")}
            />
          </motion.div>
        ))}
      </div>

      <div>
        <motion.h6
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5,  delay: 0.3 },
          }}
          viewport={{ once: true }}
          className="text-center md:text-[#101828] font-bold  text-xl  "
        >
          Still have Questions?
        </motion.h6>

        <motion.p
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.4 },
          }}
          viewport={{ once: true }}
          className="text-center  text-lg  text-primary-gray"
        >
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        viewport={{ once: true }}
      >
        <Link href="#">
          <Button className="bg-primary-color hover:bg-primary-color/80 py-5 px-5 cursor-pointer">
            Get In Touch
          </Button>
        </Link>
      </motion.div>
    </Container>
  );
}
