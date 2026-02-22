import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

const pages = {
  home:       <Hero />,
  about:      <About />,
  // tech:       <Technologies />,
  experience: <Experiences />,
  projects:   <Projects />,
  contact:    <Contact />,
};

const App = () => {
  const [activePage, setActivePage] = useState("home");
  const [darkMode, setDarkMode] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarBg = darkMode ? "bg-[#111111] border-[#222]" : "bg-white border-gray-200";
  const mainBg    = darkMode ? "bg-[#0a0a0a]" : "bg-[#f5f5f5]";

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? "text-white" : "text-gray-900"}`}>

      {/* ── SIDEBAR (desktop) ── */}
      <aside className={`hidden lg:flex w-[268px] min-w-[268px] h-screen flex-col border-r overflow-y-auto ${sidebarBg}`}>
        <Sidebar
          activePage={activePage}
          setActivePage={(id) => { setActivePage(id); setMobileOpen(false); }}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </aside>

      {/* ── MOBILE SIDEBAR (overlay) ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`fixed top-0 left-0 z-50 w-[268px] h-screen border-r overflow-y-auto lg:hidden ${sidebarBg}`}
            >
              <Sidebar
                activePage={activePage}
                setActivePage={(id) => { setActivePage(id); setMobileOpen(false); }}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── MAIN CONTENT ── */}
      <div className={`flex-1 flex flex-col h-screen overflow-hidden ${mainBg}`}>

        {/* Mobile topbar */}
        <div className={`lg:hidden flex items-center justify-between px-4 py-3 border-b ${darkMode ? "border-[#222] bg-[#111]" : "border-gray-200 bg-white"}`}>
          <button onClick={() => setMobileOpen(true)} className="text-gray-400 hover:text-white transition-colors">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className={`text-sm font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>Namira Aulia</span>
          <div className="w-6" />
        </div>

        {/* Scrollable area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-6 py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {pages[activePage]}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;