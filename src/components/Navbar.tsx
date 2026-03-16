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
  const [activeSection, setActiveSection] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname || "/";
    setActiveSection(currentPath);
  }, [location.pathname]);

  const goTo = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-3 left-0 right-0 z-50"
    >
      <div className="px-4 lg:px-6">

        {/* Navbar container */}
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 lg:px-6 h-16 lg:h-18 rounded-full bg-white/90 backdrop-blur-xl shadow-lg border border-white/60">

          {/* LOGO + WORDMARK */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              goTo("/");
            }}
            className="flex items-center gap-3 flex-shrink-0"
          >
            <img
              src="/Logo.png"
              alt="Holistech Global Solutions"
              className="h-10 w-auto object-contain drop-shadow-sm"
            />
            <div className="hidden sm:flex flex-col leading-none text-left">
              <span className="text-sm font-semibold tracking-[0.12em] text-slate-900 uppercase">
                Holistech
              </span>
              <span className="text-[11px] font-semibold tracking-[0.12em] text-slate-700 uppercase mt-[2px]">
                Global Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-center">
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
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition ${
                    isActive
                      ? "text-indigo-600 bg-indigo-50 shadow-sm"
                      : "text-gray-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="/partner"
              onClick={(e) => {
                e.preventDefault();
                goTo("/partner");
              }}
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-md hover:shadow-lg hover:translate-y-0.5 transition"
            >
              Partner With Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden px-6 pt-3"
          >
            <div className="bg-white rounded-xl shadow-lg p-4 space-y-2">

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(link.href);
                  }}
                  className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/partner"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("/partner");
                }}
                className="block text-center mt-3 py-2 rounded-lg bg-purple-600 text-white font-semibold"
              >
                Partner With Us
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;