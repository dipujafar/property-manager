"use client";
import Container from '@/components/shared/Container'
import SectionTitle from '@/components/shared/SectionTitle'
import Image from "next/image";
import { motion } from "motion/react";
import {
    scaleUpChildVariant,
    scaleUpVariant,
} from "@/components/animation/motionVariant";

const tools = [
    "/images/tool_1.png",
    "/images/tool_2.png",
    "/images/tool_3.png",
    "/images/tool_4.png",
    "/images/tool_5.png",
    "/images/tool_6.png",

];

export default function Tools() {
    return (
        <Container className="lg:space-y-34 space-y-20">
            <SectionTitle
                title="Our Tools"
                subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            />

            <div className="bg-[#F6F6F6] pt-9.5 lg:pb-21.25 pb-9.5">
                <motion.div
                    key={"companies"}
                    variants={scaleUpVariant}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="max-w-243 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8.5 md:gap-y-10 gap-y-5  px-4 lg:px-0"
                >
                    {tools.map((item, index) => (
                        <motion.div
                            variants={scaleUpChildVariant}
                            key={index}
                            className="bg-white py-13.5 px-12 flex items-center justify-center rounded-lg hover:shadow-[0_4px_24px_0_rgba(212,17,69,0.25)] duration-300"
                        >
                            <Image
                                src={item}
                                width={1200}
                                height={1200}
                                alt="company logo"
                                className="w-auto h-auto max-h-14 object-contain"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

        </Container>
    )
}
