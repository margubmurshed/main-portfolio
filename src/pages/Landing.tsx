import About from "@/components/modules/Landing/About";
import FloatingNav from "@/components/modules/Landing/FloatingNav";
import Hero from "@/components/modules/Landing/Hero";
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
        </div>
    );
};

export default Landing;