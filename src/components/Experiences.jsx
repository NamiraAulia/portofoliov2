import { motion } from "framer-motion";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const experiences = [
  {
    year: "Sep 2025 – Present",
    role: "Intern — Frontend Developer",
    company: "PT. Intikom Berlian Mustika",
    location: "Jakarta, Indonesia",
    status: "active",
    description: "Developed a Job Portal Website using Next.js to facilitate job searching and recruitment processes.",
    highlights: [
      "Built responsive UIs leveraging React components and modern frontend architecture",
      "Implemented SEO optimization and server-side rendering (SSR) for better performance",
      "Integrated RESTful APIs for job listings, applications, and user management",
      "Participated in code reviews and agile development practices",
    ],
    technologies: ["Next.js", "React", "SSR", "SEO", "RESTful API", "Git", "SourceTree"],
    color: "#a855f7",
  },
  {
    year: "Aug 2024 – Oct 2024",
    role: "Intern — Full Stack Developer",
    company: "PT. Zoomin Jakarta",
    location: "Jakarta, Indonesia",
    status: "done",
    description: "Developed a Service & Booking System to streamline reservation processes and enhance operational efficiency.",
    highlights: [
      "Designed user-friendly UI/UX with Figma, emphasizing ease of use from booking to payment",
      "Built full-stack app with Laravel (MVC), JavaScript, HTML/CSS, Bootstrap & Tailwind CSS",
      "Integrated Gmail API for email notifications and user authentication",
      "Performed unit testing with PHPUnit to ensure high code quality",
      "Deployed and hosted the application using cPanel",
    ],
    technologies: ["Laravel", "JavaScript", "Bootstrap", "Tailwind CSS", "Gmail API", "PHPUnit", "Git", "cPanel"],
    color: "#ec4899",
  },
  {
    year: "Jul 2023 – Aug 2023",
    role: "Intern — Fullstack Developer",
    company: "DPD PERKINDO",
    location: "Bandung, Indonesia",
    status: "done",
    description: "Designed and developed a Forum Group Discussion Website to facilitate professional communication.",
    highlights: [
      "Implemented authentication, role management, and discussion features",
      "Utilized Bootstrap framework for responsive front-end interface",
      "Built secure backend with PHP and MySQL including user data management",
      "Applied Role-Based Access Control (RBAC) for admin, moderator, and user roles",
    ],
    technologies: ["PHP", "MySQL", "Bootstrap", "RBAC", "Authentication", "Git"],
    color: "#06b6d4",
  },
];

const Experiences = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="pb-8">

      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl font-bold mb-1">Experience</h1>
        <p className="text-gray-500 text-sm mb-6">My professional journey.</p>
        <div className="border-t border-[#222] mb-8" />
      </motion.div>

      {/* Summary bar */}
      {/* <motion.div variants={item} className="grid grid-cols-3 gap-3 mb-8">
        {[
          { label: "Total Internships", value: "3", icon: "💼" },
          { label: "Years Experience", value: "< 1", icon: "📅" },
          { label: "Tech Stacks Used", value: "15+", icon: "⚡" },
        ].map((s, i) => (
          <div key={i} className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-4 text-center">
            <span className="text-xl mb-1 block">{s.icon}</span>
            <p className="text-2xl font-bold text-purple-400">{s.value}</p>
            <p className="text-gray-500 text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div> */}

      {/* Timeline */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-purple-600 via-pink-500 to-cyan-500" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={item}
            className="relative pl-12 mb-8"
          >
            {/* Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 200 }}
              className="absolute left-0 top-1 w-7 h-7 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center"
              style={{ backgroundColor: exp.color }}
            >
              <div className="w-2 h-2 bg-white rounded-full" />
            </motion.div>

            {/* Card */}
            <motion.div
              whileHover={{ borderColor: exp.color, scale: 1.01 }}
              className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-5 transition-all"
            >
              {/* Top row */}
              <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
                <div>
                  <h3 className="font-semibold text-white text-base">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-medium text-sm" style={{ color: exp.color }}>{exp.company}</span>
                    <span className="text-gray-600 text-xs">• {exp.location}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-gray-500 text-xs bg-[#222] px-3 py-1 rounded-full">{exp.year}</span>
                  {exp.status === "active" && (
                    <span className="text-xs flex items-center gap-1 text-green-400">
                      <motion.span
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                      />
                      Currently here
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{exp.description}</p>

              {/* Highlights */}
              <ul className="space-y-1 mb-4">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: exp.color }} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full border"
                    style={{ color: exp.color, borderColor: exp.color + "44", background: exp.color + "11" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experiences;