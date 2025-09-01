import { useResponsiveSize } from "@/hooks/useResponsiveSize";
import { motion } from "framer-motion";
import { Home, User, Code, Mail, Book } from "lucide-react";
import { GiSkills } from "react-icons/gi";
import { Link } from "react-scroll";

const FloatingNav = () => {
  const iconSize = useResponsiveSize();
  const navItems = [
    { name: "Home", icon: <Home size={iconSize} />, href: "home" },
    { name: "About", icon: <User size={iconSize} />, href: "about" },
    { name: "Skills", icon: <GiSkills size={iconSize} />, href: "skills" },
    { name: "Projects", icon: <Code size={iconSize} />, href: "projects" },
    { name: "Blogs", icon: <Book size={iconSize} />, href: "blogs" },
    { name: "Contact", icon: <Mail size={iconSize} />, href: "contact" },
  ];
  return (
    <div className="p-1 lg:p-0 fixed bottom-0 lg:bottom-auto lg:top-1/2 lg:left-5 transform lg:-translate-y-1/2 z-50 w-full lg:w-auto">
      <div className="bg-white py-3 lg:py-0 lg:bg-transparent rounded-full lg:rounded-none">
        <ul className="flex justify-evenly lg:flex-col gap-4">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="group relative"
              whileHover={{ scale: 1.2 }}
            >

              <Link to={item.href} smooth duration={600} activeClass="active-link-scroll" spy className={`w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all bg-white/10 hover:bg-white/20 shadow-md ${item.href === "home" && window.location.pathname === "/" ? "active" : ""
                }`}>
                <span className="mix-blend-difference">{item.icon}</span>
                <motion.span
                  className="absolute left-full ml-3 px-3 py-1 rounded-md bg-white text-black whitespace-nowrap text-sm pointer-events-none opacity-0 group-hover:opacity-100 hidden lg:block"
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.name}
                </motion.span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FloatingNav;