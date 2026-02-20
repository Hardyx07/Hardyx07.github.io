import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

const ProjectCard = ({ project, index, onOpen }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      onClick={() => onOpen(project)}
      className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden cursor-pointer transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
    >
      {/* Top gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="p-6 lg:p-8">
        {/* Header with project number */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground/50 tracking-widest">
              {String(index + 1).padStart(2, "0")}
            </span>
            {project.favourite && (
              <div className="favourite-badge-wrapper scale-[0.85] origin-left group-hover:scale-100 transition-transform duration-500">
                <div className="favourite-badge-border" />
                <span className="favourite-badge-label shadow-sm">
                  ✦ Hardcoded Pick
                </span>
              </div>
            )}
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full border border-white/10 text-muted-foreground hover:text-white hover:border-white/30 transition-colors"
              >
                <Github size={14} />
              </a>
            )}
            {project.live && project.live !== "not found" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full border border-white/10 text-muted-foreground hover:text-white hover:border-white/30 transition-colors"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-heading font-bold mb-2 text-white group-hover:text-white transition-colors">
          {project.title}
          <span className="text-primary/60 group-hover:text-primary transition-colors">.</span>
        </h3>

        {/* Tagline */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-muted-foreground font-heading tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom subtle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/50 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Badge styles (scoped via class names) */}
      <style>{`
        .favourite-badge-wrapper {
          position: relative;
          border-radius: 9999px;
          padding: 1px;               /* border thickness */
          overflow: hidden;
        }

        .favourite-badge-border {
          position: absolute;
          inset: -50%;
          background: conic-gradient(
            from 0deg,
            rgba(148, 163, 184, 0.05),   /* slate-400 very muted */
            rgba(148, 163, 184, 0.35),
            rgba(165, 180, 200, 0.1),
            rgba(148, 163, 184, 0.35),
            rgba(148, 163, 184, 0.05)
          );
          animation: badgeRotate 8s linear infinite;
          will-change: transform;
        }

        .favourite-badge-label {
          position: relative;
          display: inline-block;
          padding: 4px 14px;
          border-radius: 9999px;
          background: hsl(240 10% 5.5%);   /* near --background */
          font-family: 'Inter', monospace;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(203, 213, 225, 0.8);  /* slate-300 */
          white-space: nowrap;
        }

        @keyframes badgeRotate {
          to { transform: rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .favourite-badge-border {
            animation: none;
          }
        }
      `}</style>
    </motion.article>
  );
};

export default ProjectCard;

