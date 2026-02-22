import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaGlobe } from "react-icons/fa";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const socialCards = [
  {
    title: "Stay in Touch",
    desc: "Reach out via email for inquiries or collaborations.",
    label: "Go to Gmail ↗",
    href: "mailto:its.namiraaulia@gmail.com",
    icon: <FaEnvelope size={30} />,
    className: "sm:col-span-2 bg-gradient-to-r from-red-800 to-red-600",
  },
  // {
  //   title: "Explore the Code",
  //   desc: "Explore my open-source work.",
  //   label: "Go to GitHub ↗",
  //   href: "https://github.com/NamiraAulia",
  //   icon: <FaGithub size={26} />,
  //   className: "bg-[#111] border border-[#2a2a2a]",
  // },
  {
    title: "Let's Connect",
    desc: "Connect with me professionally.",
    label: "Go to LinkedIn ↗",
    href: "https://www.linkedin.com/in/namira-aulia-333135261/",
    icon: <FaLinkedin size={26} />,
    className: "bg-gradient-to-br from-blue-800 to-blue-600",
  },
  // {
  //   title: "Follow My Journey",
  //   desc: "Follow my creative journey.",
  //   label: "Go to Instagram ↗",
  //   href: "https://www.instagram.com/",
  //   icon: <FaInstagram size={26} />,
  //   className: "bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500",
  // },
  // {
  //   title: "My Portfolio",
  //   desc: "See my previous portfolio site.",
  //   label: "Visit Portfolio ↗",
  //   href: "https://namiraaulia.github.io/portofolio-namira/",
  //   icon: <FaGlobe size={26} />,
  //   className: "bg-gradient-to-br from-indigo-800 to-purple-700",
  // },
];

const Contact = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="pb-8">

      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-3xl font-bold mb-1">Contact</h1>
        <p className="text-gray-500 text-sm mb-6">Get in touch with me.</p>
        <div className="border-t border-[#222] mb-8" />
      </motion.div>

      {/* Availability banner */}
      <motion.div
        variants={item}
        className="bg-green-900/20 border border-green-800/40 rounded-xl p-4 flex items-center gap-3 mb-8"
      >
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0"
        />
        <div>
          <p className="text-green-400 font-medium text-sm">Available for opportunities</p>
          <p className="text-green-600 text-xs">Open to full-time, internship, or freelance projects — onsite or remote</p>
        </div>
      </motion.div>

      {/* Social cards */}
      <motion.div variants={item}>
        <p className="text-gray-400 text-sm mb-4">Find me on social media</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {socialCards.map((card, i) => (
            <motion.a
              key={i}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, opacity: 0.95 }}
              whileTap={{ scale: 0.97 }}
              className={`relative rounded-xl p-5 overflow-hidden flex flex-col justify-between min-h-[110px] transition-opacity ${card.className} ${i === 0 ? "sm:col-span-1" : ""}`}
            >
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{card.title}</h3>
                <p className="text-white/60 text-xs mb-3">{card.desc}</p>
                <span className="inline-block bg-white/15 hover:bg-white/25 text-white text-xs px-3 py-1.5 rounded-lg transition-colors">
                  {card.label}
                </span>
              </div>
              <div className="absolute right-4 bottom-4 text-white/20">
                {card.icon}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-[#222] my-8" />

      {/* Direct contact info */}
      <motion.div variants={item}>
        <h2 className="text-xl font-semibold mb-4">📋 Direct Contact</h2>
        <div className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-5 space-y-3">
          {[
            { icon: "📍", label: "Location", value: CONTACT?.address || "Jakarta, Indonesia" },
            { icon: "📞", label: "Phone", value: CONTACT?.phoneNo || "+62 857-1748-7188" },
            { icon: "✉️", label: "Email", value: CONTACT?.email || "its.namiraaulia@gmail.com", isLink: true },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <span>{c.icon}</span>
              <span className="text-gray-600 w-16 flex-shrink-0">{c.label}</span>
              {c.isLink ? (
                <a href={`mailto:${c.value}`} className="text-purple-400 hover:text-purple-300 transition-colors">{c.value}</a>
              ) : (
                <span className="text-gray-300">{c.value}</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="border-t border-[#222] my-8" />

      {/* CTA */}
      <motion.div variants={item} className="text-center py-4">
        <p className="text-gray-500 text-sm mb-4">Let's build something amazing together 🚀</p>
        <motion.a
          href="mailto:its.namiraaulia@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-medium px-8 py-3 rounded-xl transition-colors text-sm"
        >
          Send me an email ✉️
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;