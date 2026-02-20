import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface KineticTextProps {
    children: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
    delay?: number;
    duration?: number;
}

export const KineticText = ({
    children,
    className,
    as: Component = "p",
    delay = 0,
    duration = 0.5,
}: KineticTextProps) => {
    // Split text into words for stagger effect
    const words = children.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: duration,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                duration: duration,
            },
        },
    };

    const MotionComponent = motion(Component as any);

    return (
        <MotionComponent
            className={cn("flex flex-wrap overflow-hidden", className)}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
        >
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="mr-[0.25em] inline-block origin-top-left"
                    variants={child}
                >
                    {word}
                </motion.span>
            ))}
        </MotionComponent>
    );
};
