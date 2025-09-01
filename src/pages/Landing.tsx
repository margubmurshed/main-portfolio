import About from "@/components/modules/Landing/About";
import Blogs from "@/components/modules/Landing/Blogs";
import Contact from "@/components/modules/Landing/Contact";
import FloatingNav from "@/components/modules/Landing/FloatingNav";
import Hero from "@/components/modules/Landing/Hero";
import Projects from "@/components/modules/Landing/Projects";
import Skills from "@/components/modules/Landing/Skills";
import { useEffect } from "react";

const Landing = () => {
    useEffect(() => {
        if (window.location.pathname === "/") {
            window.location.replace("#home");
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 1);   // move by 1px
        window.scrollTo(0, 0);   // reset back
    }, []);
    return (
        <div>
            <FloatingNav />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Blogs />
            <Contact />
        </div>
    );
};

export default Landing;