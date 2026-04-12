"use client";
import { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type TProsType = {
    children: ReactNode;
    duration: number;
    className?: string;
    x?: string;
    y?: string;
};

const ElementMovement = ({
    children,
    duration,
    className,
    x = "10%",
    y = "10%",
}: TProsType) => {
    return (
        <motion.div
            initial={{ y: 0, x: 0 }}
            animate={{ y: y, x: x }}
            transition={{
                type: "tween",
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                duration: duration,
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};

export default ElementMovement;
