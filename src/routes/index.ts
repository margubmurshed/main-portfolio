import Landing from "@/pages/Landing";
import ProjectDetails from "@/pages/ProjectDetails";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    { index: true, Component: Landing },
    { path: "/project/:id", Component: ProjectDetails },
])