import { motion } from "framer-motion";

const TECH_ITEMS = [
  "React", "TypeScript", "Node.js", "MongoDB", "Next.js",
  "JWT", "Cloudinary", "Git", "Docker", "PostgreSQL",
  "Tailwind CSS", "Framer Motion",
];

const TechMarquee = () => {
  return (
    <div
      className="relative flex items-center overflow-hidden h-12"
      aria-label="Technology stack"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Two identical rows side by side, animating infinitely */}
      <motion.div
        className="flex shrink-0 gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {/* Render twice for seamless loop */}
        {[...TECH_ITEMS, ...TECH_ITEMS].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center whitespace-nowrap px-5 py-2 font-heading text-sm font-medium tracking-wide rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:text-white hover:border-white/30 transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
