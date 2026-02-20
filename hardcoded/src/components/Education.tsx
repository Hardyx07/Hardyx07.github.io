import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationEntry {
    id: number;
    degree: string;
    institution: string;
    location: string;
    period: string;
    description: string;
    icon: string; // emoji or text icon fallback
    accentColor: string; // tailwind ring / gradient color
}

const educationData: EducationEntry[] = [
    {
        id: 1,
        degree: "Bachelor of Science in Computer Science",
        institution: "Kalvium",
        location: "Rajasthan, India",
        period: "July 2024 — July 2028",
        description:
            "Currently learning how to build real-world software — while battling deadlines, bugs, and the occasional existential crisis. They call it \"practical computer science education.\" I call it \"professional problem creation (and sometimes solving).\"",
        icon: "🎓",
        accentColor: "from-cyan-500/20 to-blue-500/20",
    },
    {
        id: 2,
        degree: "Bachelor of Science in Computer Science",
        institution: "JECRC University, Jaipur",
        location: "Pilani, India",
        period: "July 2024 — July 2028",
        description:
            "Pursuing a CS degree focused on theoretical foundations and practical applications — or as I describe it, learning things I'll Google again before every exam.",
        icon: "🏛️",
        accentColor: "from-violet-500/20 to-purple-500/20",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.15,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};

const Education = () => {
    return (
        <section id="education" className="py-24 lg:py-32" aria-label="Education">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section badge */}
                <motion.div
                    className="flex justify-center mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary tracking-widest uppercase">
                        <GraduationCap className="w-3.5 h-3.5" />
                        Education
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    className="text-3xl lg:text-5xl font-heading font-bold tracking-tight text-center mb-4"
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    Ongoing Struggle: My Academic Life
                    <span className="text-primary">.</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Still attending classes, submitting assignments, and pretending to
                    understand complex algorithms.
                </motion.p>

                {/* Timeline cards */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical timeline line */}
                    <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent" />

                    <div className="space-y-6">
                        {educationData.map((entry, i) => (
                            <motion.div
                                key={entry.id}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="relative pl-16 md:pl-20"
                            >
                                {/* Timeline node */}
                                <div className="absolute left-3 md:left-5 top-8 w-6 h-6 md:w-7 md:h-7 rounded-full bg-background border-2 border-white/10 flex items-center justify-center text-xs z-10">
                                    <span>{entry.icon}</span>
                                </div>

                                {/* Card */}
                                <div className="group relative rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden transition-all duration-500 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                                    {/* Top accent gradient */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${entry.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                    />

                                    <div className="p-6 lg:p-8">
                                        {/* Degree */}
                                        <h3 className="text-lg lg:text-xl font-heading font-bold text-white mb-1.5 group-hover:text-white transition-colors">
                                            {entry.degree}
                                            <span className="text-primary/60 group-hover:text-primary transition-colors">
                                                .
                                            </span>
                                        </h3>

                                        {/* Institution & meta */}
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4">
                                            <span className="text-sm text-muted-foreground font-medium">
                                                {entry.institution}
                                            </span>
                                            <span className="hidden sm:inline text-white/10">|</span>
                                            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground/70">
                                                <Calendar className="w-3 h-3" />
                                                {entry.period}
                                            </span>
                                            <span className="hidden sm:inline text-white/10">|</span>
                                            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground/70">
                                                <MapPin className="w-3 h-3" />
                                                {entry.location}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {entry.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
