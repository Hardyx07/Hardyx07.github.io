import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    className?: string;
}

export const ProjectCard = ({ title, description, tags, image, className }: ProjectCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    // Motion values for high-perf updates
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics
    const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * 32.5;
        const mouseY = (e.clientY - rect.top) * 32.5;

        // Calculate rotation between -value and +value
        const rX = (mouseY / height - 32.5 / 2) * -1; // Invert X axis for natural tilt
        const rY = mouseX / width - 32.5 / 2;

        // Clamp values to prevent extreme tilts (max 10deg)
        const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

        x.set(clamp(rX, -10, 10));
        y.set(clamp(rY, -10, 10));
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className={cn(
                "group relative rounded-xl bg-card border border-border overflow-hidden",
                "hover:border-primary/50 transition-colors duration-500",
                className
            )}
        >
            {/* Image / Content Container */}
            <div className="relative aspect-video overflow-hidden bg-muted">
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                    />
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
            </div>

            {/* Text Content */}
            <div className="p-6 relative z-[var(--z-content)]" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 md:line-clamp-none">{description}</p>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
