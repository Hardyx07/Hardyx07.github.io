import { motion } from "framer-motion";

const paragraphs = [
  "I architect systems, not just interfaces. Every project starts with understanding the data model, the failure modes, and the user's mental model — in that order.",
  "My stack spans React and TypeScript on the frontend to Node.js, MongoDB, and PostgreSQL on the backend. I think in systems: authentication flows, caching strategies, database schemas, and deployment pipelines.",
  "I optimize for clarity. Clean abstractions, typed interfaces, tested edge cases. Code that reads like intent, not accident.",
];

const wordVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32" aria-label="About">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 lg:p-12 transition-colors duration-500 hover:border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <motion.h2
                className="text-3xl lg:text-4xl font-heading font-bold tracking-tight mb-6"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                Who I am<span className="text-primary">.</span>
              </motion.h2>
              <motion.p
                className="text-muted-foreground leading-relaxed font-body"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {paragraphs[0].split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordVariants}
                    className="inline-block mr-[0.3em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            <div className="space-y-6">
              <motion.h2
                className="text-3xl lg:text-4xl font-heading font-bold tracking-tight mb-6"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                What I build<span className="text-primary">.</span>
              </motion.h2>
              {paragraphs.slice(1).map((para, pIdx) => (
                <motion.p
                  key={pIdx}
                  className="text-muted-foreground leading-relaxed font-body"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {para.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      custom={i + pIdx * 15}
                      variants={wordVariants}
                      className="inline-block mr-[0.3em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
