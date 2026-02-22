import { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import {
  SiMysql, SiFigma, SiLaravel, SiPhp, SiHtml5, SiCss3,
  SiJavascript, SiBootstrap, SiReact, SiExpo, SiCplusplus,
  SiNextdotjs, SiTailwindcss, SiCpanel, SiGo,
} from "react-icons/si";
import { FaPython, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Frontend Developer", "UI/UX Designer", "Full Stack Developer"];

const categories = [
  {
    label: "Frontend", emoji: "🎨", color: "#3b82f6",
    bg: "bg-blue-900/20", border: "border-blue-700/30", text: "text-blue-300",
    skills: [
      { icon: <SiHtml5 />,      name: "HTML5" },
      { icon: <SiCss3 />,       name: "CSS3" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiBootstrap />,  name: "Bootstrap" },
      { icon: <SiTailwindcss />,name: "Tailwind CSS" },
      { icon: <SiReact />,      name: "React" },
      { icon: <SiNextdotjs />,  name: "Next.js" },
    ],
  },
  {
    label: "Backend", emoji: "⚙️", color: "#ef4444",
    bg: "bg-red-900/20", border: "border-red-700/30", text: "text-red-300",
    skills: [
      { icon: <SiPhp />,    name: "PHP" },
      { icon: <SiLaravel />,name: "Laravel" },
      { icon: <SiMysql />,  name: "MySQL" },
      { icon: <SiGo />,     name: "Golang" },
      { icon: <FaNodeJs />, name: "Node.js" },
    ],
  },
  {
    label: "Mobile", emoji: "📱", color: "#10b981",
    bg: "bg-emerald-900/20", border: "border-emerald-700/30", text: "text-emerald-300",
    skills: [
      { icon: <SiReact />, name: "React Native" },
      { icon: <SiExpo />,  name: "Expo" },
    ],
  },
  {
    label: "Tools & Design", emoji: "🛠️", color: "#ec4899",
    bg: "bg-pink-900/20", border: "border-pink-700/30", text: "text-pink-300",
    skills: [
      { icon: <SiFigma />,  name: "Figma" },
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <SiCpanel />, name: "cPanel" },
      { icon: <span className="font-bold text-xs leading-none">ST</span>, name: "SourceTree" },
    ],
  },
  {
    label: "Languages", emoji: "💻", color: "#f59e0b",
    bg: "bg-amber-900/20", border: "border-amber-700/30", text: "text-amber-300",
    skills: [
      { icon: <FaPython />,    name: "Python" },
      { icon: <SiCplusplus />, name: "C++" },
    ],
  },
];

// ✅ FIX: define allSkills here so it's accessible in JSX below
const allSkills = categories.flatMap((cat) =>
  cat.skills.map((skill) => ({ ...skill, cat }))
);

const floatVariants = (i) => ({
  animate: {
    y: [0, i % 2 === 0 ? -8 : -5, 0],
    transition: {
      duration: 2 + (i % 4) * 0.3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.12,
    },
  },
});

const stats = [
  { label: "Projects",       value: 6,    suffix: "+" },
  { label: "Internships",    value: 3,    suffix: "" },
  { label: "Certifications", value: 6,    suffix: "+" },
  { label: "GPA",            value: 3.41, suffix: "" },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const isInt = Number.isInteger(value);

  useEffect(() => {
    let start = 0;
    const end = isInt ? value : value * 100;
    const step = end / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isInt ? Math.floor(start) : parseFloat((start / 100).toFixed(2)));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, isInt]);

  return <span>{count}{suffix}</span>;
};

const wrap  = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const child = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIdx,     setRoleIdx]     = useState(0);
  const [deleting,    setDeleting]    = useState(false);
  const [activeTab,   setActiveTab]   = useState(null);

  // Typewriter
  useEffect(() => {
    const role  = roles[roleIdx];
    const speed = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = role.substring(0, displayText.length + 1);
        setDisplayText(next);
        if (next === role) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = role.substring(0, displayText.length - 1);
        setDisplayText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIdx]);

  const visibleSkills = activeTab
    ? allSkills.filter((s) => s.cat.label === activeTab)
    : allSkills;

  return (
    <motion.div variants={wrap} initial="hidden" animate="visible" className="pb-8">

      {/* ── NAME ── */}
      <motion.h1 variants={child} className="text-4xl font-bold mb-3 leading-tight">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
          Namira Aulia
        </span>{" "}
        👋
      </motion.h1>

      {/* ── TYPEWRITER ── */}
      <motion.div variants={child} className="flex items-center h-9 mb-5">
        <span className="text-xl text-gray-300 font-light">
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.55, repeat: Infinity }}
            className="inline-block w-0.5 h-5 bg-purple-400 ml-0.5 align-middle"
          />
        </span>
      </motion.div>

      {/* ── BADGES ── */}
      <motion.div variants={child} className="flex flex-wrap gap-2 mb-6">
        {[
          { text: "📍 Jakarta, Indonesia 🇮🇩", cls: "border-[#333] text-gray-400" },
          { text: "✅ Open to Work",             cls: "border-green-800/60 text-green-400 bg-green-900/20" },
          { text: "💻 Onsite / Remote",          cls: "border-purple-800/60 text-purple-400 bg-purple-900/20" },
        ].map((b, i) => (
          <span key={i} className={`text-xs px-3 py-1.5 rounded-full border ${b.cls}`}>
            {b.text}
          </span>
        ))}
      </motion.div>

      {/* ── BIO ── */}
      <motion.p variants={child} className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-8">
        {HERO_CONTENT}
      </motion.p>

      {/* ── STATS ── */}
      <motion.div variants={child} className="grid grid-cols-4 gap-3 mb-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.06, borderColor: "#7c3aed" }}
            className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-4 text-center cursor-default transition-colors"
          >
            <p className="text-2xl font-bold text-purple-400">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="text-gray-500 text-xs mt-1">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="border-t border-[#222] my-8" />

      {/* ── SKILLS / TECHNOLOGIES ── */}
      <motion.div variants={child}>
        <h2 className="text-xl font-semibold mb-1 flex items-center gap-2">
          <span className="text-purple-400 font-mono">&lt;/&gt;</span> Skills
        </h2>
        <p className="text-gray-500 text-sm mb-6">My professional skills & tools.</p>

        {/* ── FLOATING ICONS ── */}
        <div className="flex flex-wrap gap-3 justify-center py-7 px-4 bg-[#0d0d0d] rounded-2xl border border-[#1e1e1e] mb-6">
          {allSkills.map((tech, i) => (
            <motion.div
              key={`float-${tech.cat.label}-${tech.name}`}
              variants={floatVariants(i)}
              animate="animate"
              whileHover={{ scale: 1.25, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
              className="relative group flex flex-col items-center gap-1 cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-md transition-all"
                style={{
                  background: tech.cat.color + "18",
                  border: `1.5px solid ${tech.cat.color}44`,
                  color: tech.cat.color,
                }}
              >
                {tech.icon}
              </div>
              <span className="text-[10px] text-gray-600">{tech.name}</span>
              {/* Tooltip */}
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#1e1e1e] border border-[#2a2a2a] text-white text-[10px] px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 shadow-xl">
                {tech.cat.emoji} {tech.cat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── FILTER TABS ── */}
        <div className="flex flex-wrap gap-2 mb-5">
          {categories.map((cat) => (
            <motion.button
              key={cat.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab(activeTab === cat.label ? null : cat.label)}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border transition-all
                ${activeTab === cat.label
                  ? `${cat.bg} ${cat.border} ${cat.text} font-semibold`
                  : "border-[#2a2a2a] text-gray-500 hover:border-[#444] hover:text-gray-300 bg-[#161616]"
                }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
              <span className={`text-[10px] ml-0.5 ${activeTab === cat.label ? "opacity-70" : "opacity-40"}`}>
                {cat.skills.length}
              </span>
            </motion.button>
          ))}
          <AnimatePresence>
            {activeTab && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setActiveTab(null)}
                className="text-xs px-3 py-1.5 rounded-full border border-[#333] text-gray-600 hover:text-gray-400 bg-[#111]"
              >
                Clear ✕
              </motion.button>
            )}
          </AnimatePresence>
        </div>

      </motion.div>

    </motion.div>
  );
};

export default Hero;