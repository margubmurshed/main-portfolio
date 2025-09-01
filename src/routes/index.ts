
import BlogDetails from "@/pages/BlogDetails";
import Dashboard from "@/pages/Dashboard";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import ProjectDetails from "@/pages/ProjectDetails";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    { index: true, Component: Landing },
    { path: "/project/:id", Component: ProjectDetails },
    { path: "/blog/:slug", Component: BlogDetails },
    { path: "/login", Component: Login },
    { path: "/dashboard", Component: withAuth(Dashboard) },
])