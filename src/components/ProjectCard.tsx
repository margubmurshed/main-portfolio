import { Link } from "react-router";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface ProjectCardProps {
    title: string;
    subTitle: string;
    featuredImage: string;
    featuredSkills: string[];
    id: number;
}


const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subTitle,
    featuredImage,
    featuredSkills,
    id,
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
        >
            {/* Background Image */}
            <img
                src={featuredImage}
                alt={title}
                className="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-500 ease-in-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-5 text-white
                      opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg lg:text-xl font-bold">{title}</h3>
                <p className="text-sm text-gray-300">{subTitle}</p>

                <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {featuredSkills.map((skill, i) => (
                        <span
                            key={i}
                            className="text-xs bg-white/20 px-2 py-1 rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 self-start mx-auto"
                >
                    <Link to={`/project/${id}`}>View Details</Link>
                </Button>
            </div>
        </motion.div>
    );
};

export default ProjectCard