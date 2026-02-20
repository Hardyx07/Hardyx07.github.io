import { LazyMotion, domMax } from "framer-motion";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { DotGrid } from "@/components/DotGrid";
import { SmoothScroll } from "@/components/SmoothScroll";

const Index = () => (
  <LazyMotion features={domMax}>
    <SmoothScroll>
      <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary/20">
        {/* Global Background Layer */}
        <DotGrid />
        <div className="fixed inset-0 z-[var(--z-noise)] pointer-events-none noise-overlay" />
        <AmbientBackground />

        <main className="relative z-[var(--z-content)]">
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Education />
          <SectionDivider />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  </LazyMotion>
);

export default Index;
