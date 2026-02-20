import { cn } from "@/lib/utils";

/**
 * DotGrid – a CSS-only horizontally-scrolling dot-matrix background.
 *
 * The pattern is built from a `radial-gradient` tile whose width matches
 * `--dot-spacing`.  A `translateX` keyframe animation slides it
 * one full tile-width so the seam is invisible and the loop is seamless.
 */
export const DotGrid = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "fixed inset-0 pointer-events-none z-[var(--z-base)]",
                className
            )}
        >
            {/* Dot layer */}
            <div className="dot-grid-layer" />

            {/* Vignette overlay – darkens edges so grid fades nicely */}
            <div className="dot-grid-vignette" />

            <style>{`
        .dot-grid-layer {
          position: absolute;
          /* overshoot by one tile width so the scroll loops cleanly */
          inset: -30px;
          right: -60px;
          --dot-size: 1.2px;
          --dot-spacing: 28px;
          --dot-color: rgba(255, 255, 255, 0.15);

          background-image: radial-gradient(
            circle,
            var(--dot-color) var(--dot-size),
            transparent var(--dot-size)
          );
          background-size: var(--dot-spacing) var(--dot-spacing);
          animation: dotScroll 60s linear infinite;
          will-change: transform;
        }

        @keyframes dotScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(var(--dot-spacing) * -1)); }
        }

        .dot-grid-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 80% 60% at 50% 50%,
            transparent 30%,
            hsl(var(--background)) 100%
          );
        }

        /* Respect user preference */
        @media (prefers-reduced-motion: reduce) {
          .dot-grid-layer {
            animation: none;
          }
        }
      `}</style>
        </div>
    );
};

export default DotGrid;
