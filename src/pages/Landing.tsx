import About from "@/components/modules/Landing/About";
import FloatingNav from "@/components/modules/Landing/FloatingNav";
import Hero from "@/components/modules/Landing/Hero";

const Landing = () => {
    return (
        <div>
            <FloatingNav />
            <Hero />
            <About />
        </div>
    );
};

export default Landing;