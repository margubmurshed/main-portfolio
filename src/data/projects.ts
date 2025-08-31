import project1Image1 from "@/assets/images/digital-wallet-system.png";
import project1Image2 from "@/assets/images/Screenshot 2025-08-31 171427.png";
import project1Image3 from "@/assets/images/Screenshot 2025-08-31 171446.png";
import project1Image4 from "@/assets/images/Screenshot 2025-08-31 171354.png";

export const projects = [
    {
        id: 1,
        name: "Digital Wallet System",
        featuredImage: project1Image1, // <-- Added featuredImage
        shortDescription: "A secure, role-based digital wallet system with frontend and backend for Users, Agents, and Admins.",
        longDescription: `Build a complete digital wallet platform (similar to bKash or Nagad) including frontend and backend. 
            The system supports role-based dashboards, wallet management, transactions, commission tracking, guided tours, toast notifications, and a polished responsive UI. 
            Backend handles authentication, authorization, wallet operations, and transaction history.
        `,
        featuredTechs: ["react", "redux-toolkit", "express", "mongodb", "typescript"],

        status: "Completed",
        startDate: "2025-08-01",
        endDate: "2025-09-01",

        features: [
            "Frontend Public Landing Section: Home, About, Features, Pricing (optional), Contact, FAQ",
            "Frontend Role-based Authentication (JWT + Registration with role selection)",
            "User Dashboard: Wallet overview, Deposit, Withdraw, Send Money, Transaction History, Profile Management",
            "Agent Dashboard: Cash-in, Transactions, Commission History, Profile Management",
            "Admin Dashboard: Manage Users/Agents, View All Transactions, Filters & Pagination, Profile Management",
            "Global Loading Indicators & Error Handling",
            "Form Validations and Advanced Filtering",
            "Data Visualization: Cards, Bar Charts, Pie Charts, Tables",
            "Toast Notifications for UI Feedback",
            "Guided Tour for new users (driver.js/react-joyride) with restart option",
            "Theme Toggle (Light/Dark Mode) and Responsive Design",
            "Backend JWT Authentication with secure password hashing using Mongoose pre-save hook",
            "Backend Role-based Authorization (User, Agent, Admin)",
            "Auto Wallet Creation during registration (initial balance: 50 Taka)",
            "User Features: Add Money, Withdraw Money, Send Money, Cash-out",
            "Agent Features: Cash-in, view commissions",
            "Admin Features: View, update, approve, block Users/Agents and their wallets",
            "Transaction History with Commission Tracking",
            "Automatic Wallet Status Updates based on user status and approval"
        ],

        technologyStack: {
            frontend: ["react", "react-router", "redux-toolkit", "rtk-query", "typescript", "tailwind"],
            backend: ["node", "express", "mongodb", "mongoose", "jwt", "bcrypt", "passport"],
            validation: ["zod"],
            other: ["dotenv", "driver"],
        },

        uiScreenshots: [
            { title: "Landing Page", url: project1Image1 },
            { title: "User Dashboard", url: project1Image2 },
            { title: "Agent Dashboard", url: project1Image3 },
            { title: "Admin Dashboard", url: project1Image4 }
        ],

        challenges: [
            "Implementing role-based dashboards with dynamic API data",
            "Ensuring responsive and accessible UI/UX across devices",
            "Integrating guided tours with actual DOM elements and state persistence",
            "Managing complex state and async API calls efficiently with RTK Query",
            "Creating polished, realistic UI data for a professional look",
            "Secure backend operations with proper JWT authentication and wallet status handling",
            "Implementing auto wallet creation and automatic status updates based on user actions"
        ],

        links: {
            liveLink: "https://margub-digital-wallet.vercel.app/",
            clientRepo: "https://github.com/margubmurshed/digital-wallet-system-client",
            serverRepo: "https://github.com/margubmurshed/digital-wallet-system"
        }
    }
]

