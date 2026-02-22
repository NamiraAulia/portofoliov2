import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

// Role badge colors
const roleColors = {
  "Full Stack Developer": "bg-purple-900/40 text-purple-300 border-purple-700/40",
  "UI/UX Designer": "bg-pink-900/40 text-pink-300 border-pink-700/40",
  "Backend Developer": "bg-blue-900/40 text-blue-300 border-blue-700/40",
  "Frontend Developer": "bg-cyan-900/40 text-cyan-300 border-cyan-700/40",
  "UI Designer": "bg-rose-900/40 text-rose-300 border-rose-700/40",
};

const ProjectModal = ({ project, onClose }) => {
  const [imgIdx, setImgIdx] = useState(0);
  if (!project) return null;
  const multi = project.images && project.images.length > 1;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-[95%] max-w-xl max-h-[90vh] rounded-2xl bg-[#111] border border-[#2a2a2a] shadow-2xl overflow-hidden flex flex-col"
        initial={{ scale: 0.85, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.85, y: 30 }}
        transition={{ type: "spring", damping: 22 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#222] text-gray-300 hover:bg-purple-600 transition-all flex items-center justify-center">
          <IoClose size={16} />
        </button>

        {/* Image */}
        <div className="relative bg-[#0d0d0d] flex items-center justify-center" style={{ minHeight: 200, maxHeight: "38vh" }}>
          {project.images?.length > 0 ? (
            <>
              <img src={project.images[imgIdx]} alt={project.title} className="max-h-[38vh] w-full object-contain" />
              {multi && (
                <>
                  <button onClick={() => setImgIdx((p) => (p - 1 + project.images.length) % project.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#222] hover:bg-purple-600 text-white flex items-center justify-center transition-all">
                    <FaArrowLeft size={12} />
                  </button>
                  <button onClick={() => setImgIdx((p) => (p + 1) % project.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#222] hover:bg-purple-600 text-white flex items-center justify-center transition-all">
                    <FaArrowRight size={12} />
                  </button>
                  <div className="absolute bottom-3 flex gap-1.5">
                    {project.images.map((_, i) => (
                      <button key={i} onClick={() => setImgIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === imgIdx ? "bg-purple-500 w-4" : "bg-[#444]"}`} />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="h-40 flex items-center justify-center text-gray-600 text-sm">No preview available</div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">{project.title}</h2>
            {project.role && (
              <span className={`text-xs px-2.5 py-1 rounded-full border ${roleColors[project.role] || "bg-[#222] text-gray-400 border-[#333]"}`}>
                {project.role}
              </span>
            )}
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

          {project.technologies?.length > 0 && (
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">Technologies</p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((t, i) => (
                  <span key={i} className="text-xs bg-purple-900/30 border border-purple-800/40 text-purple-300 px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          )}

          {project.features?.length > 0 && (
            <div>
              <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">Key Features</p>
              <ul className="space-y-1">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="text-purple-500 mt-1">•</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer links */}
        <div className="px-5 py-3 border-t border-[#1e1e1e] bg-[#0d0d0d] flex gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-purple-400 flex items-center gap-2 transition-colors">
              <FaGithub size={14} /> GitHub
            </a>
          )}
          {project.figma && (
            <a href={project.figma} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-pink-400 flex items-center gap-2 transition-colors">
              <FiFigma size={14} /> Figma
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-green-400 flex items-center gap-2 transition-colors">
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Fallback projects if PROJECTS is empty
const fallbackProjects = [
  {
    title: "Service & Booking System",
    role: "Full Stack Developer",
    year: "2024",
    description: "Automated service & booking system to improve business efficiency and customer experience.",
    technologies: ["Laravel", "Bootstrap", "Tailwind CSS", "Git", "cPanel"],
    features: ["Authentication & role management", "Booking & payment features", "Email notification system", "SEO integrated"],
    image: null, images: [],
  },
  {
    title: "Forum Group Discussion Website",
    role: "Backend Developer",
    year: "2023",
    description: "Structured discussion forum website with authentication, role management, and secure data handling.",
    technologies: ["PHP", "MySQL", "AJAX", "Bootstrap", "Git", "cPanel"],
    features: ["Role-Based Access Control", "RESTful API with AJAX", "User authentication", "Deployed on cPanel"],
    image: null, images: [],
  },
  {
    title: "Job Portal Website",
    role: "Frontend Developer",
    year: "2025",
    description: "Job portal website using Next.js with SSR, RESTful API integration for listings and applications.",
    technologies: ["Next.js", "React", "SSR", "RESTful API", "Git"],
    features: ["SSR for performance", "SEO optimization", "Job search & application", "Agile development"],
    image: null, images: [],
  },
  {
    title: "Rental Application",
    role: "UI/UX Designer",
    year: "2023",
    description: "Rental application to enable ITERA students to efficiently borrow unused items.",
    technologies: ["Figma"],
    features: ["Wireframes & prototypes", "Color scheme & branding", "System workflows", "User research"],
    image: null, images: [],
  },
  {
    title: "Thenia Shop",
    role: "UI Designer",
    year: "2023",
    description: "Mobile app for second-hand item trading (clothes, shoes, etc.).",
    technologies: ["React Native", "Expo", "Figma"],
    features: ["Splash screen & logo", "Cross-platform design", "Visual asset design", "Responsive layout"],
    image: null, images: [],
  },
  {
    title: "Travel Report Information System",
    role: "UI/UX Designer",
    year: "2023",
    description: "Digital reporting system for technician travel at PT PGAS Telekomunikasi Nusantara.",
    technologies: ["Figma"],
    features: ["Dashboard & report forms", "User research", "Wireframes & prototypes", "Approval workflow design"],
    image: null, images: [],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const projectList = (PROJECTS && PROJECTS.length > 0) ? PROJECTS : fallbackProjects;

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="pb-8">

      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl font-bold mb-1">Projects</h1>
        <p className="text-gray-500 text-sm mb-6">A showcase of projects I've built or contributed to.</p>
        <div className="border-t border-[#222] mb-8" />
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.02, borderColor: "#7c3aed" }}
            className="cursor-pointer rounded-xl bg-[#161616] border border-[#2a2a2a] overflow-hidden transition-all group"
            onClick={() => setSelected(project)}
          >
            {/* Thumbnail or placeholder */}
            <div className="h-36 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-b border-[#222] flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className="flex flex-col items-center gap-2 text-[#333]">
                  <span className="text-4xl">{
                    project.role?.includes("UI") ? "🎨" :
                    project.role?.includes("Full Stack") ? "⚡" :
                    project.role?.includes("Backend") ? "🔧" : "💻"
                  }</span>
                  <span className="text-xs text-[#444]">{project.role}</span>
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                {project.year && <span className="text-gray-600 text-xs">{project.year}</span>}
              </div>
              {project.role && (
                <span className={`text-xs px-2 py-0.5 rounded-full border mr-2 ${roleColors[project.role] || "bg-[#222] text-gray-400 border-[#333]"}`}>
                  {project.role}
                </span>
              )}
              <p className="text-gray-500 text-xs mt-2 line-clamp-2">{project.description}</p>
              {project.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.technologies.slice(0, 4).map((t, i) => (
                    <span key={i} className="text-xs bg-[#1e1e1e] text-gray-500 px-2 py-0.5 rounded">{t}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs text-gray-600">+{project.technologies.length - 4}</span>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;