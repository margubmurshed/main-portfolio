"use client";

import React, { useEffect } from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { Check, Eye, Home } from "lucide-react";
import { technologies } from "@/data/technologies";
import Skill from "@/components/Skill";
import { Button } from "@/components/ui/button";
import { SiGithub } from "react-icons/si";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectDetailsPage: React.FC = () => {
    const params = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const id = Number(params.id);
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="text-center py-20 text-red-600 font-bold">
                Project not found!
            </div>
        );
    }

    const featuredTechs = technologies.filter(tech => project.featuredTechs.find(t => t === tech.id))

    return (
        <div className="container mx-auto px-4 py-10 space-y-10 text-foreground">
            <div className="fixed bottom-5 right-5 z-50">
                <motion.div
                    className="group relative"
                    whileHover={{ scale: 1.2 }}
                >

                    <Link to="/" className="w-12 h-12 rounded-full flex items-center justify-center transition-all bg-white/10 hover:bg-white/20 shadow-md">
                        <span className="mix-blend-difference"><Home /></span>
                        <motion.span
                            className="absolute right-full mr-3 px-3 py-1 rounded-md bg-white text-black whitespace-nowrap text-sm pointer-events-none opacity-0 group-hover:opacity-100"
                            initial={{ x: -10 }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            Home
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
            {/* Featured Image */}
            {project.featuredImage && (
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="w-full overflow-hidden rounded-md shadow-lg mb-6 border"
                >
                    <img
                        src={project.featuredImage}
                        alt={project.name}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            )}

            {/* Featured Techs */}
            {project.featuredTechs && project.featuredTechs.length > 0 && (
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="font-semibold text-lg mb-4 flex flex-wrap gap-3"
                >
                    {featuredTechs.map(tech => (
                        <Badge key={tech.id}>
                            <tech.icon />
                            {tech.name}
                        </Badge>
                    ))}
                </motion.div>
            )}

            {/* Header */}
            <motion.header variants={fadeInUp} initial="hidden" animate="visible" className="space-y-2">
                <h1 className="text-4xl font-bold">{project.name}</h1>
                <p className="">{project.shortDescription}</p>
                <p className="text-sm flex flex-wrap items-center gap-3">
                    <span>Status:</span>
                    <Badge><Check />{project.status}</Badge>
                    <span>|</span>
                    <span>{format(project.startDate, "d MMMM yyyy")} - {format(project.endDate, "d MMMM yyyy")}</span>
                </p>
            </motion.header>

            {/* Long Description */}
            <motion.section variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
                <p className="">{project.longDescription}</p>
            </motion.section>

            {/* Features */}
            <motion.section variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-2xl font-semibold mb-2">Features</h2>
                <ul className="list-disc list-inside space-y-1">
                    {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
            </motion.section>

            {/* Technology Stack */}
            <motion.section variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-2xl font-semibold mb-2">Technology Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(project.technologyStack).map(([key, values], idx) => {
                        const techs = technologies.filter(tech => values.find(t => t === tech.id))
                        return (
                            (
                                <div
                                    key={idx}
                                    className="p-4 border rounded-md bg-primary/30"
                                >
                                    <h3 className="font-semibold mb-3 text-center capitalize">{key}</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {techs.map((tech) => (
                                            <Skill key={tech.id} name={tech.name} icon={tech.icon} className="text-foreground bg-background/20" />
                                        ))}
                                    </div>
                                </div>
                            )
                        )
                    })}
                </div>
            </motion.section>

            {/* UI Screenshots */}
            <motion.section variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-2xl font-semibold mb-2">UI Screenshots</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.uiScreenshots.map((shot, idx) => (
                        <motion.div
                            key={idx}
                            className="border rounded-md overflow-hidden border-primary"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={shot.url}
                                alt={shot.title}
                                className="w-full object-cover"
                            />
                            <p className="text-center p-2 bg-[var(--popover)]">{shot.title}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Challenges */}
            <motion.section variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
                <ul className="list-disc list-inside space-y-1">
                    {project.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                    ))}
                </ul>
            </motion.section>

            {/* Links */}
            <motion.section variants={fadeInUp} initial="hidden" animate="visible">
                <h2 className="text-2xl font-semibold mb-2">Links</h2>
                <div className="flex flex-wrap gap-3">
                    <a href={project.links.liveLink} target="_blank">
                        <Button><Eye /> Live Link</Button>
                    </a>
                    {project.links.clientRepo && <a href={project.links.clientRepo} target="_blank">
                        <Button><SiGithub /> Client Repository</Button>
                    </a>}
                    {project.links.serverRepo && <a href={project.links.serverRepo} target="_blank">
                        <Button><SiGithub /> Server Repository</Button>
                    </a>}
                </div>
            </motion.section>
        </div>
    );
};

export default ProjectDetailsPage;
