import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, open, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="border-white/10 bg-background/95 backdrop-blur-xl max-w-2xl max-h-[85vh] overflow-y-auto"
        aria-labelledby="project-title"
        aria-describedby="project-desc"
      >
        <DialogHeader>
          <DialogTitle
            id="project-title"
            className="text-2xl lg:text-3xl font-heading font-bold tracking-tight"
          >
            {project.title}
            <span className="text-primary">.</span>
          </DialogTitle>
          <DialogDescription id="project-desc" className="text-muted-foreground font-body">
            {project.tagline}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Problem / Description */}
          <div>
            <h4 className="text-sm font-heading font-semibold tracking-widest uppercase text-primary mb-2">
              Problem & Solution
            </h4>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture */}
          <div>
            <h4 className="text-sm font-heading font-semibold tracking-widest uppercase text-primary mb-2">
              Architecture
            </h4>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs font-heading font-medium tracking-wide rounded-full bg-white/[0.04] border border-white/[0.06] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-heading font-medium tracking-wide rounded-lg border border-white/10 bg-white/5 text-white/90 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              <Github size={16} /> GitHub
            </a>
            {project.live && project.live !== "not found" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-heading font-medium tracking-wide rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-300"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
