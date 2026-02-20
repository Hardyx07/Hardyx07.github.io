import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Font imports - Optimized loading
import "@fontsource/space-grotesk/700.css"; // Primary heading weight
import "@fontsource/inter/400.css";       // Body regular
import "@fontsource/inter/600.css";       // Body semi-bold

createRoot(document.getElementById("root")!).render(<App />);
