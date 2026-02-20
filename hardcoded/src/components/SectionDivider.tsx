import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="w-full flex justify-center py-8">
    <motion.svg
      width="100%"
      height="2"
      viewBox="0 0 1200 2"
      className="max-w-5xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.line
        x1="0"
        y1="1"
        x2="1200"
        y2="1"
        stroke="hsl(186, 100%, 50%)"
        strokeWidth="1"
        strokeOpacity="0.3"
        variants={{
          hidden: { pathLength: 0 },
          visible: { pathLength: 1, transition: { duration: 1.2, ease: "easeInOut" } },
        }}
      />
    </motion.svg>
  </div>
);

export default SectionDivider;
