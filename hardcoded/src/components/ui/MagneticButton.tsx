import React from "react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "outline";
}

export const MagneticButton = ({
    children,
    className,
    variant = "primary",
    ...props
}: PremiumButtonProps) => {
    return (
        <button
            className={cn(
                "relative inline-flex items-center gap-2 px-8 py-3 text-sm font-medium uppercase tracking-wider rounded-full overflow-hidden",
                "transition-all duration-300 ease-out",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                variant === "primary" && [
                    "bg-white text-black",
                    "hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]",
                    "active:scale-[0.97]",
                ],
                variant === "outline" && [
                    "bg-transparent text-white border border-white/20",
                    "hover:border-white/50 hover:bg-white/5",
                    "active:scale-[0.97]",
                ],
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </button>
    );
};
