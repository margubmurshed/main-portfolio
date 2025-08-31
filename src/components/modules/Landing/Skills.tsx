import frontEndIcon from "@/assets/images/front-end.png";
import backEndIcon from "@/assets/images/back-end.png";
import toolsIcon from "@/assets/images/tools.png";
import databaseIcon from "@/assets/images/database.png";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoBootstrap, BiLogoTailwindCss, BiLogoReact, BiLogoNodejs, BiLogoVisualStudio, BiLogoGit, BiLogoGithub, BiLogoNetlify, BiLogoFigma, BiLogoChrome, BiLogoTypescript, BiLogoRedux, BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiMongodb, SiFirebase, SiPostman } from 'react-icons/si';
import Skill from "@/components/Skill";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <>
            {/* <section id="skills" className="min-h-screen">
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 -mt-32 p-10 relative">
                <div className="bg-foreground text-background p-5 rounded-md shadow-lg border border-background">
                    <img src={frontEndIcon} alt="frontendicon" className="w-16 mx-auto" />
                    <h2 className="text-center text-lg lg:text-2xl my-5 font-semibold text-slate-900">
                        Front End Development
                    </h2>
                    <div className="grid grid-cols-3 gap-3">
                        <Skill name="HTML" icon={BiLogoHtml5} />
                        <Skill name="CSS" icon={BiLogoCss3} />
                        <Skill name="JavaScript" icon={BiLogoJavascript} />
                        <Skill name="BootStrap" icon={BiLogoBootstrap} />
                        <Skill name="Tailwind" icon={BiLogoTailwindCss} />
                        <Skill name="React" icon={BiLogoReact} />
                        <Skill name="TypeScript" icon={BiLogoTypescript} />
                        <Skill name="Redux" icon={BiLogoRedux} />
                    </div>
                </div>
                <div className="bg-foreground text-background p-5 rounded-md shadow-lg border border-background">
                    <img src={backEndIcon} alt="backendicon" className="w-16 mx-auto" />
                    <h2 className="text-center text-lg lg:text-2xl my-5 font-semibold text-background">
                        Back End Development
                    </h2>
                    <div className="grid grid-cols-3 gap-3">
                        <Skill name="NodeJS" icon={BiLogoNodejs} />
                        <Skill name="ExpressJS" icon={SiExpress} />
                        <Skill name="Firebase" icon={SiFirebase} />
                    </div>
                </div>
                <div className="bg-foreground text-background p-5 rounded-md shadow-lg border border-background">
                    <img src={databaseIcon} alt="backendicon" className="w-16 mx-auto" />
                    <h2 className="text-center text-lg lg:text-2xl my-5 font-semibold text-background">
                        Databases
                    </h2>
                    <div className="grid grid-cols-3 gap-3">
                        <Skill name="MongoDB" icon={SiMongodb} />
                        <Skill name="PostgreSQL" icon={BiLogoPostgresql} />
                    </div>
                </div>
                <div className="bg-foreground text-background p-5 rounded-md shadow-lg border border-background">
                    <img src={toolsIcon} alt="backendicon" className="w-16 mx-auto" />
                    <h2 className="text-center text-lg lg:text-2xl my-5 font-semibold text-slate-900">
                        Development Tools
                    </h2>
                    <div className="grid grid-cols-3 gap-3">
                        <Skill name="VS Code" icon={BiLogoVisualStudio} />
                        <Skill name="Dev Tools" icon={BiLogoChrome} />
                        <Skill name="Git" icon={BiLogoGit} />
                        <Skill name="Github" icon={BiLogoGithub} />
                        <Skill name="Netlify" icon={BiLogoNetlify} />
                        <Skill name="Figma" icon={BiLogoFigma} />
                        <Skill name="Postman" icon={SiPostman} />
                    </div>
                </div>
            </div>
        </section> */}
            <section id="skills" className="min-h-screen">
                <div className="bg-gradient-to-tr from-secondary/50 bg-secondary/10 to-primary relative" >
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background: "#4dba8e",
                            backgroundImage: `
        linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
      `,
                            backgroundSize: "40px 40px",
                        }}
                    />
                    <div className="container mx-auto p-5 py-20 pb-40 z-10 relative">
                        <h2 className="text-4xl font-bold uppercase text-foreground text-center">
                            Skills
                        </h2>
                        <p className="w-fit rounded-md bg-background text-foreground px-5 py-2 text-center mx-auto mt-3">
                            There are the skills I am good at
                        </p>
                    </div>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 -mt-32 relative p-5">
                    {/* Frontend Card */}
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + 1 * 0.15, duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }} className="mb-6 break-inside-avoid bg-foreground text-background p-5 rounded-md shadow-lg border border-background hover:scale-105 transition-transform">
                        <img src={frontEndIcon} alt="frontendicon" className="w-16 mx-auto" />
                        <h3 className="text-center text-lg lg:text-2xl my-5 font-semibold text-slate-900">
                            Front End Development
                        </h3>
                        <motion.div initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + 1 * 0.15, duration: 0.5 }}
                            viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-3 gap-3">
                            <Skill icon={BiLogoRedux} name="Redux" />
                            <Skill icon={BiLogoTypescript} name="TypeScript" />
                            <Skill icon={BiLogoReact} name="React" />
                            <Skill icon={BiLogoTailwindCss} name="Tailwind CSS" />
                            <Skill icon={BiLogoJavascript} name="JavaScript" />
                            <Skill icon={BiLogoBootstrap} name="Bootstrap" />
                            <Skill icon={BiLogoCss3} name="CSS" />
                            <Skill icon={BiLogoHtml5} name="HTML" />
                        </motion.div >
                    </motion.div>

                    {/* Backend Card */}
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + 2 * 0.15, duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }} className="mb-6 break-inside-avoid bg-foreground text-background p-5 rounded-md shadow-lg border border-background hover:scale-105 transition-transform">
                        <img src={backEndIcon} alt="backendicon" className="w-16 mx-auto" />
                        <h3 className="text-center text-lg lg:text-2xl my-5 font-semibold text-background">
                            Back End Development
                        </h3>
                        <motion.div initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + 2 * 0.15, duration: 0.5 }}
                            viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-3 gap-3">
                            <Skill icon={SiExpress} name="Express JS" />
                            <Skill icon={BiLogoNodejs} name="Node JS" />
                            <Skill icon={SiFirebase} name="Firebase" />
                        </motion.div>
                    </motion.div>

                    {/* Databases Card */}
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + 3 * 0.15, duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }} className="mb-6 break-inside-avoid bg-foreground text-background p-5 rounded-md shadow-lg border border-background hover:scale-105 transition-transform">
                        <img src={databaseIcon} alt="databaseicon" className="w-16 mx-auto" />
                        <h3 className="text-center text-lg lg:text-2xl my-5 font-semibold text-background">
                            Databases
                        </h3>
                        <motion.div initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + 3 * 0.15, duration: 0.5 }}
                            viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-3 gap-3">
                            <Skill icon={SiMongodb} name="MongoDB" />
                            <Skill icon={BiLogoPostgresql} name="PostgreSQL" />
                        </motion.div>
                    </motion.div >

                    {/* Dev Tools Card */}
                    <motion.div initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + 4 * 0.15, duration: 0.5 }}
                        viewport={{ once: true, amount: 0.2 }} className="mb-6 break-inside-avoid bg-foreground text-background p-5 rounded-md shadow-lg border border-background hover:scale-105 transition-transform">
                        <img src={toolsIcon} alt="toolsicon" className="w-16 mx-auto" />
                        <h3 className="text-center text-lg lg:text-2xl my-5 font-semibold text-slate-900">
                            Development Tools
                        </h3>
                        <motion.div initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + 4 * 0.15, duration: 0.5 }}
                            viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-3 gap-3">
                            <Skill icon={SiPostman} name="Postman" />
                            <Skill icon={BiLogoGit} name="Git" />
                            <Skill icon={BiLogoGithub} name="GitHub" />
                            <Skill icon={BiLogoChrome} name="Dev Tools" />
                            <Skill icon={BiLogoFigma} name="Figma" />
                            <Skill icon={BiLogoVisualStudio} name="VS Code" />
                            <Skill icon={BiLogoNetlify} name="Netlify" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

        </>
    );
};

export default Skills;