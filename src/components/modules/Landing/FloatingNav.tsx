import { motion } from "framer-motion";
import { Home, User, Code, Mail } from "lucide-react";
import { Link } from "react-scroll";

const navItems = [
  { name: "Home", icon: <Home size={24} />, href: "home" },
  { name: "About", icon: <User size={24} />, href: "about" },
  { name: "Projects", icon: <Code size={24} />, href: "projects" },
  { name: "Contact", icon: <Mail size={24} />, href: "contact" },
];

const FloatingNav = () => {
  return (
    <div className="fixed top-1/2 left-5 transform -translate-y-1/2 z-50">
      <ul className="flex flex-col gap-4">
        {navItems.map((item, index) => (
          <motion.li
            key={index}
            className="group relative"
            whileHover={{ scale: 1.2 }}
          >
            
            <Link to={item.href} smooth duration={600} offset={-70} activeClass="text-red-500 bg-primary" className="text-white w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer flex items-center justify-center">
            {item.icon}
            <motion.span
              className="absolute left-full ml-3 px-3 py-1 rounded-md bg-white text-black whitespace-nowrap text-sm pointer-events-none opacity-0 group-hover:opacity-100"
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
  );
};

export default FloatingNav;
