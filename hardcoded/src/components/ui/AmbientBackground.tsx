import { cn } from "@/lib/utils";

export const AmbientBackground = ({ className }: { className?: string }) => {
    return (
        <div className={cn("fixed inset-0 z-[var(--z-ambient)] overflow-hidden pointer-events-none", className)}>
            {/* Blob 1 */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] mix-blend-screen animate-blob"
                style={{ animationDelay: "0s" }}
            />
            {/* Blob 2 */}
            <div
                className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px] mix-blend-screen animate-blob"
                style={{ animationDelay: "2s" }}
            />
            {/* Blob 3 */}
            <div
                className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[120px] mix-blend-screen animate-blob"
                style={{ animationDelay: "4s" }}
            />

            <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 20s infinite;
          will-change: transform;
        }
      `}</style>
        </div>
    );
};
