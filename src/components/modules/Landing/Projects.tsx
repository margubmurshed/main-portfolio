import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 pt-20" id="projects">
            <div className="w-full text-center space-y-10">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight pb-10">
                    My Works
                </h1>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 container mx-auto gap-5">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            subTitle={project.subTitle}
                            featuredImage={project.featuredImage}
                            featuredSkills={project.featuredSkills}
                            id={project.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
