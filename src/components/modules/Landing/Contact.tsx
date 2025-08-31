"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Phone } from "lucide-react";

const contacts = [
    {
        id: "linkedin",
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/margubmurshed",
        icon: Linkedin,
    },
    {
        id: "gmail",
        name: "Facebook",
        href: "https://facebook.com/margub32",
        icon: Facebook,
    },
    {
        id: "github",
        name: "GitHub",
        href: "https://github.com/margubmurshed",
        icon: Github,
    },
    {
        id: "whatsapp",
        name: "WhatsApp",
        href: "https://wa.me/+8801988474979",
        icon: Phone,
    },
];

export default function Contact() {
    return (
        <section className="min-h-screen bg-[#0d1411] text-[#e5ebe9] flex flex-col items-center justify-center px-6" id="contact">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-2xl text-center space-y-6"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#4dba8e]">
                    Get in Touch
                </h1>
                <p className="text-lg text-[#abd1c2]">
                    Feel free to reach out through any of these platforms
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8"
                >
                    {contacts.map(({ id, name, href, icon: Icon }, i) => (
                        <motion.a
                            key={id}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col items-center justify-center p-5 rounded-2xl bg-[#1a1f1b] shadow-md transition-all duration-300 hover:bg-[#284237] hover:scale-105 hover:text-[#4dba8e]"
                        >
                            <Icon className="w-8 h-8 mb-2 text-[#abd1c2] transition-colors duration-300" />
                            <span className="text-sm">{name}</span>
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
