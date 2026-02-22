import { motion } from "framer-motion";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const softSkills = [
  { icon: "🤝", label: "Teamwork" },
  { icon: "💬", label: "Communication" },
  { icon: "⏰", label: "Time Management" },
  { icon: "🧠", label: "Critical Thinking" },
  { icon: "🚀", label: "Project Management" },
  { icon: "✨", label: "Creativity" },
];

const languages = [
  { lang: "Indonesia", level: "Native", pct: 100 },
  { lang: "English",   level: "Intermediate", pct: 65 },
];

const About = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="pb-8">

      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl font-bold mb-1">About</h1>
        <p className="text-gray-500 text-sm mb-6">A brief introduction to who I am.</p>
        <div className="border-t border-[#222] mb-8" />
      </motion.div>

      {/* Bio paragraphs */}
      <motion.div variants={item} className="max-w-2xl mb-8 space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          I'm <span className="text-purple-400 font-semibold">Namira Aulia</span>, a Jakarta-based Informatics Engineering
          graduate from <span className="text-white font-medium">Institut Teknologi Sumatera (ITERA)</span>, specializing in
          web development and information systems.
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          Experienced in analyzing functional requirements, testing features, and troubleshooting system issues. I am adept
          at both individual and teamwork, with excellent communication skills.
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          I am passionate about growing in a dynamic professional environment and contributing to innovative projects that
          make a real-world impact.
        </p>
        <p className="text-gray-400 text-sm">Best regards,</p>
        <p
          className="text-purple-400 text-4xl"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          namira
        </p>
      </motion.div>

      <div className="border-t border-[#222] my-8" />

      {/* Education */}
      <motion.div variants={item} className="mb-8">
        <h2 className="text-xl font-semibold mb-1 flex items-center gap-2">🎓 Education</h2>
        <p className="text-gray-500 text-sm mb-6">My academic background.</p>

        <motion.div
          whileHover={{ borderColor: "#7c3aed" }}
          className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-5 transition-colors"
        >
          <div className="flex justify-between items-start flex-wrap gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-sm font-bold text-white">
                  IT
                </div>
                <h3 className="font-semibold text-white">Institut Teknologi Sumatera (ITERA)</h3>
              </div>
              <p className="text-gray-400 text-sm ml-10">Bachelor of Informatics Engineering</p>
              <div className="flex items-center gap-2 mt-2 ml-10">
                <span className="text-xs bg-purple-900/40 border border-purple-700/40 text-purple-300 px-2 py-0.5 rounded-full">
                  GPA: 3.41 / 4.00
                </span>
                <span className="text-xs bg-[#222] border border-[#333] text-gray-400 px-2 py-0.5 rounded-full">
                  S1 / Bachelor
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-500 text-xs">Lampung Selatan, Indonesia</p>
              <p className="text-gray-400 text-xs mt-1">Sept 2020 – Feb 2025</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="border-t border-[#222] my-8" />

      {/* Soft Skills */}
      <motion.div variants={item} className="mb-8">
        <h2 className="text-xl font-semibold mb-1">🌟 Soft Skills</h2>
        <p className="text-gray-500 text-sm mb-6">Beyond the code.</p>
        <div className="grid grid-cols-3 gap-3">
          {softSkills.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04, borderColor: "#7c3aed" }}
              className="bg-[#161616] border border-[#2a2a2a] rounded-xl px-4 py-3 flex items-center gap-3 transition-colors"
            >
              <span className="text-2xl">{s.icon}</span>
              <span className="text-gray-300 text-sm font-medium">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-[#222] my-8" />

      {/* Languages */}
      <motion.div variants={item} className="mb-8">
        <h2 className="text-xl font-semibold mb-1">🌐 Languages</h2>
        <p className="text-gray-500 text-sm mb-6">Languages I speak.</p>
        <div className="space-y-4 max-w-lg">
          {languages.map((l, i) => (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">{l.lang}</span>
                <span className="text-gray-500">{l.level}</span>
              </div>
              <div className="h-2 bg-[#222] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.pct}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-[#222] my-8" />

      {/* Fun Facts */}
      {/* <motion.div variants={item}>
        <h2 className="text-xl font-semibold mb-1">⚡ Fun Facts</h2>
        <p className="text-gray-500 text-sm mb-6">A little more about me.</p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: "☕", text: "Coffee-fueled coder who debugs best in the morning" },
            { icon: "🎨", text: "Passionate about clean UI — design matters as much as code" },
            { icon: "📚", text: "Always learning — currently exploring Next.js & SSR" },
            { icon: "🌏", text: "Based in Jakarta but open to remote opportunities" },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, borderColor: "#7c3aed" }}
              className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-4 flex gap-3 transition-colors"
            >
              <span className="text-2xl mt-0.5">{f.icon}</span>
              <p className="text-gray-400 text-sm leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div> */}
    </motion.div>
  );
};

export default About;