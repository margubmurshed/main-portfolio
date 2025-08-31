import { motion } from "framer-motion";
import myImage from "@/assets/images/margub-murshed-image.png";
import ThreeDCard from "@/components/3DCard";
import { fadeInUp, scaleIn, staggerContainer } from "@/animations/variants";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative" id="home">
            <div className="min-h-screen w-full bg-[#0d1411] relative">
                {/* Emerald Radial Glow Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
                    }}
                />

                <div className="container mx-auto flex flex-col items-center justify-center min-h-screen gap-12 md:gap-10 px-4 md:px-0">

                    {/* Text Section */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-center space-y-3 md:space-y-5"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-xl sm:text-2xl md:text-3xl font-semibold text-white"
                        >
                            Hi! I am Margub Murshed
                        </motion.h1>

                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold"
                        >
                            <span className="text-primary">MERN</span> Stack Developer
                        </motion.h2>

                        <motion.h3
                            variants={fadeInUp}
                            className="text-sm sm:text-base md:text-xl font-light text-gray-300 max-w-2xl mx-auto"
                        >
                            Passionate MERN Stack Developer creating scalable, user-friendly web applications.
                        </motion.h3>
                    </motion.div>

                    {/* 3D Card */}
                    <motion.div variants={scaleIn} initial="hidden" animate="visible">
                        <ThreeDCard className="w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96">
                            <img
                                src={myImage}
                                alt="Margub Murshed"
                                className="w-full h-full object-cover rounded-2xl px-4 pt-4 sm:px-5 sm:pt-5"
                            />
                        </ThreeDCard>
                    </motion.div>
                    <motion.div variants={scaleIn} initial="hidden" animate="visible" className="flex gap-3 z-10">
                        {/* Download Resume Button */}
                        <Button
                            size="lg"
                            className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            <Download className="mr-2 h-5 w-5" /> {/* Icon on the left */}
                            Download Resume
                        </Button>

                        {/* View Resume Button */}
                        <Button
                            variant="outline"
                            size="lg"
                            className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            <Eye className="mr-2 h-5 w-5" /> {/* Icon on the left */}
                            View Resume
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
