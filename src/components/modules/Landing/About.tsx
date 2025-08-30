import { Eye } from "lucide-react";
import { Link } from "react-router";

export default function About() {
    return (
        <section className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
            <div className="max-w-4xl w-full text-center space-y-10">
                {/* Section Title */}
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    About Me
                </h1>

                <div className="space-y-8">
                    {/* Name & Title */}
                    <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        👋 Hi, I’m{" "}
                        <span className="text-primary decoration-primary/40 underline-offset-4">
                            Margub Murshed
                        </span>
                    </h2>

                    {/* About Text */}
                    <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                        I’m a <span className="font-semibold text-primary">MERN Stack Developer</span>{" "}
                        with over a year of hands-on experience building modern, scalable, and
                        user-friendly web applications. I specialize in{" "}
                        <span className="text-accent font-medium">
                            MongoDB, Express.js, React, and Node.js
                        </span>
                        , while constantly exploring new technologies to stay ahead.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                        Beyond coding, I enjoy{" "}
                        <span className="font-medium">writing blogs</span>,{" "}
                        <span className="font-medium">sharing knowledge</span>, and{" "}
                        <span className="font-medium">teaching others</span>. I’m also deeply
                        passionate about exploring new tech trends and experimenting with tools
                        that push creativity forward.
                    </p>

                    {/* Call-to-action / Highlight */}
                    <div className="mt-10 flex justify-center">
                        <Link
                            to="#projects"
                            className="px-6 py-3 rounded-2xl bg-primary text-background font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex gap-3"
                        >
                            <Eye /> View My Projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
