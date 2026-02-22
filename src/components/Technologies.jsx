import {
  SiMysql, SiFigma, SiLaravel, SiPhp, SiHtml5, SiCss3,
  SiJavascript, SiBootstrap, SiReact, SiExpo, SiCplusplus,
  SiNextdotjs, SiTailwindcss, SiCpanel,
} from "react-icons/si";
import { FaPython, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const categories = [
  {
    label: "Frontend",
    color: "#3b82f6",
    icons: [
      { icon: <SiHtml5 />,      name: "HTML5",      level: 90 },
      { icon: <SiCss3 />,       name: "CSS3",       level: 85 },
      { icon: <SiJavascript />, name: "JavaScript", level: 80 },
      { icon: <SiBootstrap />,  name: "Bootstrap",  level: 85 },
      { icon: <SiTailwindcss />,name: "Tailwind",   level: 80 },
      { icon: <SiReact />,      name: "React",      level: 75 },
      { icon: <SiNextdotjs />,  name: "Next.js",    level: 65 },
    ],
  },
  {
    label: "Backend",
    color: "#ef4444",
    icons: [
      { icon: <SiPhp />,     name: "PHP",     level: 85 },
      { icon: <SiLaravel />, name: "Laravel", level: 80 },
      { icon: <SiMysql />,   name: "MySQL",   level: 80 },
      { icon: <FaNodeJs />,  name: "Node.js", level: 50 },
    ],
  },
  {
    label: "Mobile",
    color: "#10b981",
    icons: [
      { icon: <SiReact />, name: "React Native", level: 65 },
      { icon: <SiExpo />,  name: "Expo",         level: 65 },
    ],
  },
  {
    label: "Tools & Design",
    color: "#ec4899",
    icons: [
      { icon: <SiFigma />,      name: "Figma",      level: 80 },
      { icon: <FaGitAlt />,     name: "Git",        level: 80 },
      { icon: <SiCpanel />,     name: "cPanel",     level: 70 },
    ],
  },
  {
    label: "Languages",
    color: "#f59e0b",
    icons: [
      { icon: <FaPython />,    name: "Python", level: 65 },
      { icon: <SiCplusplus />, name: "C++",    level: 60 },
    ],
  },
];

// Float animation per icon
const floatVariants = (i) => ({
  animate: {
    y: [0, i % 2 === 0 ? -8 : -6, 0],
    transition: { duration: 2 + (i % 4) * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 },
  },
});

const Technologies = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="pb-8">

      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl font-bold mb-1">Technologies</h1>
        <p className="text-gray-500 text-sm mb-6">Tools & technologies I work with.</p>
        <div className="border-t border-[#222] mb-8" />
      </motion.div>

      {/* All icons floating */}
      <motion.div variants={item} className="mb-10">
        <div className="flex flex-wrap gap-4 justify-center py-6 px-2 bg-[#0d0d0d] rounded-2xl border border-[#1e1e1e]">
          {categories.flatMap((cat) => cat.icons).map((tech, i) => (
            <motion.div
              key={tech.name}
              variants={floatVariants(i)}
              animate="animate"
              whileHover={{ scale: 1.3, rotate: [0, -5, 5, 0] }}
              className="relative group flex flex-col items-center gap-1 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-2xl hover:border-purple-600 transition-colors shadow-md">
                {tech.icon}
              </div>
              <span className="text-gray-600 text-[10px]">{tech.name}</span>
              {/* tooltip proficiency */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1e1e1e] border border-[#333] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                {tech.level}% proficiency
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Per category with progress bars */}
      <div className="space-y-8">
        {categories.map((cat, ci) => (
          <motion.div
            key={ci}
            variants={item}
            className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-5"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
              <h2 className="text-white font-semibold text-sm">{cat.label}</h2>
            </div>
            <div className="space-y-3">
              {cat.icons.map((tech, ti) => (
                <div key={ti}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-300 flex items-center gap-2">
                      <span>{tech.icon}</span> {tech.name}
                    </span>
                    <span className="text-gray-500">{tech.level}%</span>
                  </div>
                  <div className="h-1.5 bg-[#222] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tech.level}%` }}
                      transition={{ duration: 0.9, delay: ti * 0.08 }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${cat.color}aa, ${cat.color})` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Technologies;