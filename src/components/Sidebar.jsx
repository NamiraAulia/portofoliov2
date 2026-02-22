import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome, FaUser, FaMicrochip, FaBriefcase,
  FaFolder, FaEnvelope, FaLinkedin, FaGithub,
} from "react-icons/fa";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

// Try to import profile pic — if missing, show initials fallback
let profilePic = null;
try {
  profilePic = new URL("../assets/3X4.png", import.meta.url).href;
} catch {
  profilePic = null;
}

const menuItems = [
  { id: "home",       label: "Home",          icon: <FaHome size={14} /> },
  { id: "about",      label: "About",         icon: <FaUser size={14} /> },
  // { id: "tech",       label: "Technologies",  icon: <FaMicrochip size={14} /> },
  { id: "experience", label: "Experience",    icon: <FaBriefcase size={14} /> },
  { id: "projects",   label: "Projects",      icon: <FaFolder size={14} /> },
  { id: "contact",    label: "Contact",       icon: <FaEnvelope size={14} /> },
];

const Sidebar = ({ activePage, setActivePage, darkMode, setDarkMode }) => {
  const text = darkMode ? "text-white" : "text-gray-900";
  const sub  = darkMode ? "text-gray-400" : "text-gray-500";
  const bg   = darkMode ? "bg-[#111111]" : "bg-white";

  return (
    <div className={`flex flex-col h-full px-5 py-8 ${bg}`}>

      {/* ── PROFILE ── */}
      <div className="flex flex-col items-center mb-6">
        {profilePic ? (
          <motion.img
            src={profilePic}
            alt="Namira Aulia"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="w-20 h-20 rounded-full object-cover border-2 border-purple-600 mb-3 shadow-lg"
          />
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white text-2xl font-bold mb-3 shadow-lg"
          >
            NA
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-1.5"
        >
          <span className={`font-semibold text-sm ${text}`}>Namira Aulia</span>
          {/* verified */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#3b82f6">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </motion.div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`text-xs ${sub}`}
        >
          @namiraaulia
        </motion.span>

        {/* Status dot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-1.5 mt-2"
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-green-400"
          />
          <span className="text-green-400 text-xs">Open to work</span>
        </motion.div>
      </div>

      {/* ── DARK / LIGHT TOGGLE ── */}
      <div className="flex justify-center mb-5">
        <div className={`flex items-center gap-1 rounded-full p-1 ${darkMode ? "bg-[#222]" : "bg-gray-100"}`}>
          <button
            onClick={() => setDarkMode(false)}
            className={`p-2 rounded-full transition-all text-xs ${!darkMode ? "bg-white shadow text-yellow-500" : "text-gray-500 hover:text-gray-300"}`}
          >
            <BsSunFill size={12} />
          </button>
          <button
            onClick={() => setDarkMode(true)}
            className={`p-2 rounded-full transition-all text-xs ${darkMode ? "bg-[#333] shadow text-blue-400" : "text-gray-400 hover:text-gray-600"}`}
          >
            <BsMoonFill size={12} />
          </button>
        </div>
      </div>

      <div className={`w-full h-px mb-4 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`} />

      {/* ── NAV MENU ── */}
      <nav className="flex flex-col gap-1 flex-1">
        {menuItems.map((menu, idx) => {
          const isActive = activePage === menu.id;
          return (
            <motion.button
              key={menu.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + idx * 0.06 }}
              onClick={() => setActivePage(menu.id)}
              className={`relative flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-all duration-200 w-full text-left overflow-hidden
                ${isActive
                  ? darkMode ? "bg-[#1e1e1e] text-white" : "bg-gray-100 text-gray-900"
                  : darkMode ? "text-gray-500 hover:bg-[#161616] hover:text-gray-300" : "text-gray-400 hover:bg-gray-50 hover:text-gray-700"
                }`}
            >
              {/* Active left bar */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-purple-500 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>

              <span className="flex items-center gap-3">
                <span className={isActive ? "text-purple-400" : ""}>{menu.icon}</span>
                <span className={`text-sm font-medium ${isActive ? "text-white" : ""}`}>{menu.label}</span>
              </span>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-gray-500 text-xs"
                >
                  →
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </nav>

      {/* ── SOCIAL ICONS ── */}
      <div className={`w-full h-px my-4 ${darkMode ? "bg-[#2a2a2a]" : "bg-gray-100"}`} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex justify-center gap-4"
      >
        {[
          { href: "https://www.linkedin.com/in/namira-aulia-333135261/", icon: <FaLinkedin size={16} />, color: "hover:text-blue-400" },
          { href: "https://github.com/NamiraAulia", icon: <FaGithub size={16} />, color: "hover:text-gray-200" },
          { href: "mailto:its.namiraaulia@gmail.com", icon: <AiFillMail size={16} />, color: "hover:text-red-400" },
        ].map((s, i) => (
          <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
            className={`text-gray-600 ${s.color} transition-colors`}>
            {s.icon}
          </a>
        ))}
      </motion.div>

      {/* Footer */}
      <p className={`text-center text-xs mt-4 ${darkMode ? "text-gray-700" : "text-gray-300"}`}>
        © 2025 Namira Aulia
      </p>
    </div>
  );
};

export default Sidebar;