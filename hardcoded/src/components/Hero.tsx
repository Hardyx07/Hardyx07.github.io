import { motion } from "framer-motion";
import { KineticText } from "@/components/ui/KineticText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ArrowRight, Download } from "lucide-react";
import TechMarquee from "./TechMarquee";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20" aria-label="Hero">
    <div className="container mx-auto px-6 lg:px-12 relative z-[var(--z-content)]">
      <div className="flex flex-col items-start max-w-5xl mx-auto">

        {/* Role / Tagline */}
        <div className="mb-6 overflow-hidden">
          <KineticText
            as="h2"
            className="text-xl md:text-2xl font-medium tracking-widest text-primary uppercase"
            duration={0.8}
          >
            Full-Stack Developer & System Thinker
          </KineticText>
        </div>

        {/* Main Title - Split for impact */}
        <div className="space-y-2 mb-8">
          <KineticText
            as="h1"
            className="text-6xl sm:text-7xl lg:text-9xl font-heading font-bold tracking-tighter leading-[0.9]"
            delay={0.2}
          >
            Hardik
          </KineticText>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl sm:text-7xl lg:text-9xl font-heading font-bold tracking-tighter leading-[0.9] text-muted-foreground/50"
            >
              Tailor<span className="text-primary">.</span>
            </motion.h1>
          </div>
        </div>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Crafting scalable, high-performance web applications with a focus on
          <span className="text-foreground font-semibold"> architectural precision</span> and
          <span className="text-foreground font-semibold"> fluid user experiences</span>.
        </motion.p>

        {/* Buttons — No magnetic effect, clean hover */}
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <MagneticButton
            variant="primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton variant="outline">
            Download Resume <Download className="w-4 h-4" />
          </MagneticButton>
        </motion.div>
      </div>

      {/* Marquee pinned to bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mt-24 w-full"
      >
        <div className="text-xs font-mono text-center mb-4 text-muted-foreground uppercase tracking-widest">Things I Pretend to Be Good At</div>
        <TechMarquee />
      </motion.div>
    </div>
  </section>
);

export default Hero;
