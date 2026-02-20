import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/hardik-tailor-49b986304/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Hardyx07", label: "GitHub" },
  { icon: Mail, href: "mailto:hardik.tailor2006@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="py-16 border-t border-border" aria-label="Footer">
    <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center gap-8">
      <div className="flex gap-6">
        {socials.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-3 rounded-full glass-card text-muted-foreground transition-colors"
            whileHover={{
              color: "hsl(186, 100%, 50%)",
              boxShadow: "0 0 20px hsl(186 100% 50% / 0.25)",
              borderColor: "hsl(186, 100%, 50%)",
            }}
            transition={{ duration: 0.2 }}
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>
      <p className="text-xs font-heading tracking-widest uppercase text-muted-foreground">
      Took time, effort, and several identity crises. A job would justify all three.
      </p>
    </div>
  </footer>
);

export default Footer;
