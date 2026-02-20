import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const MagneticButton = ({ children, className = "", href, onClick }: PremiumButtonProps) => {
  const base = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-heading font-medium tracking-wide rounded-lg",
    "border border-white/10 bg-white/5 text-white/90",
    "transition-all duration-300 ease-out",
    "hover:border-primary/50 hover:text-white hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
    "active:scale-[0.97]",
    "cursor-pointer",
    className
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    );
  }

  return (
    <div className={base} onClick={onClick} role="button" tabIndex={0}>
      {children}
    </div>
  );
};

export default MagneticButton;
