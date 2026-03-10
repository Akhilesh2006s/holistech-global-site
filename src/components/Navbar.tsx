import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/company" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Update active section based on current route
    const currentPath = location.pathname || "/";
    const match = navLinks.find((link) => link.href === currentPath);
    setActiveSection(match ? match.href : "home");
  }, [location.pathname]);

  const goTo = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50"
    >
      <div className="px-4 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-[64px] rounded-full bg-white/90 backdrop-blur-xl shadow-[0_18px_45px_rgba(15,23,42,0.20)] border border-white/70">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              goTo("/");
            }}
            className="flex items-center gap-2 pl-2 pr-3 group"
          >
            <img
              src="/Logo.png"
              alt="Holistech Global Solutions logo"
              className="h-12 w-12 rounded-xl object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-[16px] font-extrabold tracking-[0.16em] text-slate-900 uppercase">
                Holistech
              </span>
              <span className="font-heading text-[11px] font-semibold tracking-[0.22em] text-blue-700 uppercase">
                Global Solutions
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(link.href);
                  }}
                  className={`relative px-3.5 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-blue-700 bg-slate-100/70"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block pr-2">
            <a
              href="/partner"
              onClick={(e) => {
                e.preventDefault();
                goTo("/partner");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-semibold text-white bg-gradient-to-r from-slate-900 to-slate-700 rounded-full hover:shadow-lg hover:shadow-slate-900/25 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              Partner With Us
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 mr-2 rounded-xl flex items-center justify-center bg-slate-100/80 hover:bg-slate-200/80 transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden px-4 pt-2"
          >
            <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-xl border border-slate-200/60 rounded-2xl shadow-[0_16px_40px_rgba(15,23,42,0.18)] px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(link.href);
                  }}
                  className={`block py-2.5 px-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.href
                      ? "text-blue-700 bg-blue-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-2">
                <a
                  href="/partner"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo("/partner");
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
