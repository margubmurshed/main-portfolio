import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
    return (
        <section className="min-h-screen bg-background text-foreground flex items-center justify-center px-6 pt-20" id="projects">
            <div className="w-full text-center space-y-10">
                <div className="space-y-3">
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        My Works
                    </h1>
                    <p className="px-5 py-2 bg-primary text-background rounded-md w-fit mx-auto">These are the best projects I've done</p>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 container mx-auto gap-5">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.name}
                            subTitle={project.shortDescription}
                            featuredImage={project.featuredImage}
                            featuredTechs={project.featuredTechs}
                            id={project.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
