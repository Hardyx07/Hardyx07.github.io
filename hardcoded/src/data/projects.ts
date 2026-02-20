export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  architecture: string;
  tech: string[];
  github: string;
  live: string;
  favourite?: boolean;
}

export const projects: Project[] = [
  {
    id: "cruxen",
    title: "Cruxen",
    favourite: true,
    tagline: "Developer-focused platform for structured learning and execution",
    description:
      "Designed and built a platform that organizes technical concepts into clear, progressive learning paths. Focused on clarity, reduced cognitive load, and practical execution rather than superficial tutorials.",
    architecture:
      "Component-driven frontend with modular layouts. Backend APIs structured around domain boundaries to allow incremental feature expansion without refactors.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    github: "https://github.com/Hardyx07/CruxEn",
    live: "https://crux-en.vercel.app/",
  },
  {
    id: "bitbloom",
    title: "BitBloom",
    tagline: "Creator-centric ecosystem for digital resources and collaboration",
    description:
      "Built a multi-role platform supporting creators, contributors, and developers. Emphasized clean information hierarchy, scalable permissions, and a focused post-login experience.",
    architecture:
      "Next.js application with role-based access control. API layer designed for extensibility as new creator tools and resources are introduced.",
    tech: ["Next.js", "TypeScript", "React", "Supabase", "Tailwind CSS"],
    github: "https://github.com/kalviumcommunity/S64_HardikTailor_Capstone_BitBloom",
    live: "https://bit-bloom.netlify.app/",
  },
  {
    id: "shopease",
    title: "ShopEase",
    tagline: "Modern e-commerce application with streamlined user flows",
    description:
      "Implemented a complete e-commerce experience including product discovery, cart management, and checkout. Prioritized predictable state handling and responsive performance.",
    architecture:
      "Client-side state managed for cart and checkout flows. Backend services abstracted to support future integrations such as payments and order tracking.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Hardyx07/ShopEase",
    live: "not found",
  },
  {
    id: "realtime-location-tracker",
    title: "Real-Time Location Tracker",
    tagline: "Live location tracking system using WebSockets",
    description:
      "Implemented real-time location streaming with bi-directional WebSocket communication. Achieved low-latency updates and reliable synchronization across connected clients.",
    architecture:
      "WebSocket server handling continuous location updates. Frontend subscribes to live streams and updates UI state without polling or refresh cycles.",
    tech: ["React", "Node.js", "WebSocket", "TypeScript"],
    github: "https://github.com/Hardyx07/REAL-TIME-TRACKER",
    live: "https://example.com",
  },
  {
    id: "crux",
    title: "Crux",
    tagline: "GenAI-News app",
    description:
      "CruX is a modern, AI-powered news application that combines traditional news consumption with advanced AI-driven features for a more engaging and interactive news reading experience.",
    architecture:
      "WebSocket server handling continuous location updates. Frontend subscribes to live streams and updates UI state without polling or refresh cycles.",
    tech: ["React", "Node.js", "WebSocket", "TypeScript"],
    github: "https://github.com/kalviumcommunity/crux",
    live: "https://crux-news.netlify.app/",
  },
];
