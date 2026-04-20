import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mail, MapPin, Globe2, ArrowRight, Linkedin, Twitter, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Company", href: "/company" },
  { label: "Contact", href: "/partner" },
];

const FooterSection = () => {
  const navigate = useNavigate();

  const goTo = (href: string) => {
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Main footer */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-950">
        {/* Top CTA band */}
        <div className="border-b border-white/5">
          <div className="container mx-auto px-4 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-1">
                  Ready to scale your channel strategy?
                </h3>
                <p className="text-sm text-white/50">
                  Let's discuss how Holistech can accelerate your growth.
                </p>
              </div>
              <a
                href="/partner"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("/partner");
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer content */}
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="/1.png"
                  alt="Holistech Global Solutions"
                  className="h-20 lg:h-24 w-auto object-contain"
                />
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Strategic GTM and channel expansion partner for technology companies scaling across domestic and global
                markets.
              </p>
              {/* Social icons */}
              <div className="flex gap-3 pt-2">
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4 text-white/60" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4 text-white/60" />
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-white/60" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wide">Quick Links</h4>
              <ul className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        goTo(link.href);
                      }}
                      className="text-sm text-white/40 hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-white mb-5 text-sm uppercase tracking-wide">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm text-white/50">contact@holistechglobal.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm text-white/50">India Chennai | Bengaluru</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm text-white/50">+91 98402 54952</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Globe2 className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm text-white/50">India &amp; global expansion support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Holistech Global Solutions. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Designed with precision for enterprise growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
