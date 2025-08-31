import {
    SiReact, SiReactrouter, SiRedux, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens,
    SiPassport, SiZod, SiDotenv,
} from "react-icons/si";
import { Database, Repeat, Compass, Lock } from "lucide-react"; // fallback icons

export const technologies = [
    { id: "react", name: "React", icon: SiReact, category: "Frontend" },
    { id: "react-router", name: "React Router", icon: SiReactrouter, category: "Frontend" },
    { id: "redux-toolkit", name: "Redux Toolkit", icon: SiRedux, category: "Frontend" },
    { id: "rtk-query", name: "RTK Query", icon: Repeat, category: "Frontend" }, // no specific react-icon
    { id: "typescript", name: "TypeScript", icon: SiTypescript, category: "Frontend" },
    { id: "tailwind", name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },

    { id: "node", name: "Node.js", icon: SiNodedotjs, category: "Backend" },
    { id: "express", name: "Express.js", icon: SiExpress, category: "Backend" },
    { id: "mongodb", name: "MongoDB", icon: SiMongodb, category: "Backend" },
    { id: "mongoose", name: "Mongoose", icon: Database, category: "Backend" }, // placeholder
    { id: "jwt", name: "JWT", icon: SiJsonwebtokens, category: "Backend" },
    { id: "bcrypt", name: "bcrypt", icon: Lock, category: "Backend" },
    { id: "passport", name: "passport.js", icon: SiPassport, category: "Backend" },

    { id: "zod", name: "Zod", icon: SiZod, category: "Validation" },

    { id: "dotenv", name: "dotenv", icon: SiDotenv, category: "Other" },
    { id: "driver", name: "Driver.js / React Joyride", icon: Compass, category: "Other" },
];
