import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Eye, X } from "lucide-react";

type LeaderId = "chairman" | "ceo" | null;

const CompanySection = () => {
  const [activeLeader, setActiveLeader] = useState<LeaderId>(null);

  const closeModal = () => setActiveLeader(null);

  return (
  <section id="company" className="section-padding relative overflow-hidden" style={{ background: "transparent" }}>
    <div className="container mx-auto relative z-10 space-y-14">
      {/* Header */}
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3"
        >
          About Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4"
        >
          Company
        </motion.h2>
      </div>

      {/* About text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center space-y-4"
      >
        <h3 className="text-lg md:text-xl font-semibold font-heading">
          About Holistech Global Solutions
        </h3>
        <p className="text-body leading-relaxed">
          Holistech Global Solutions is a strategic advisory and channel partner firm focused on
          enabling vendor-led and partner-driven expansion across domestic and global markets. We
          combine commercial structuring, ecosystem design, and execution capability to unlock
          scalable and sustainable revenue growth.
        </p>
        <p className="text-body leading-relaxed">
          Holistech brings practical execution insight alongside strategic advisory depth, ensuring
          that GTM blueprints are directly tied to on-ground channel performance.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, x: -20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-400 hover:-translate-y-1 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">Mission</p>
          </div>
          <p className="text-sm text-body leading-relaxed">
            To enable technology companies to scale domestically and globally through engineered
            channel ecosystems and structured GTM execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, x: 20 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-6 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-400 hover:-translate-y-1 overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500" />
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
              <Eye className="w-5 h-5 text-violet-600" />
            </div>
            <p className="text-sm font-bold uppercase tracking-wide text-violet-600">Vision</p>
          </div>
          <p className="text-sm text-body leading-relaxed">
            To become a trusted global partner for vendor-led and partner-driven market expansion.
          </p>
        </motion.div>
      </div>

      {/* Leadership */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-8 text-center">
          Leadership
        </p>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Chairman */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex flex-col gap-7 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/70 p-8 md:p-10 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            onClick={() => setActiveLeader("chairman")}
          >
            <div className="w-full aspect-square max-w-[260px] mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 ring-2 ring-slate-200/50 shadow-lg group-hover:ring-blue-200/50 transition-all duration-500">
              <img
                src="/Muzeebur-rahman .png"
                alt="Chairman Muzeebur Rahaman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <h3
                  className="text-2xl md:text-2xl font-bold font-heading tracking-tight text-slate-900"
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em" }}
                >
                  Muzeebur Rahaman
                </h3>
                <div className="space-y-1">
                  <p
                    className="text-sm font-semibold text-blue-700 tracking-[0.18em] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Chairman
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex flex-col gap-7 bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/70 p-8 md:p-10 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            onClick={() => setActiveLeader("ceo")}
          >
            <div className="w-full aspect-square max-w-[260px] mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 ring-2 ring-slate-200/50 shadow-lg group-hover:ring-blue-200/50 transition-all duration-500">
              <img
                src="/mohsin-mohammed - 2.jpg"
                alt="Founder & CEO Mohsin Mohammed"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <h3
                  className="text-2xl md:text-2xl font-bold font-heading tracking-tight text-slate-900"
                  style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "-0.02em" }}
                >
                  Mohsin Mohammed
                </h3>
                <div className="space-y-1">
                  <p
                    className="text-sm font-semibold text-blue-700 tracking-[0.18em] uppercase"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Founder &amp; CEO
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>

    {/* Leader detail modal */}
    <AnimatePresence>
      {activeLeader && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-[1.1fr,1.4fr]"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close"
              className="absolute top-4 right-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
              onClick={closeModal}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Photo */}
            <div className="bg-slate-50 flex items-center justify-center p-10">
              {activeLeader === "chairman" ? (
                <img
                  src="/Muzeebur-rahman .png"
                  alt="Chairman Muzeebur Rahaman"
                  className="w-full max-w-sm rounded-3xl shadow-xl object-cover"
                />
              ) : (
                <img
                  src="/mohsin-mohammed - 2.jpg"
                  alt="Founder & CEO Mohsin Mohammed"
                  className="w-full max-w-sm rounded-3xl shadow-xl object-cover"
                />
              )}
            </div>

            {/* Text */}
            <div className="p-8 md:p-10 space-y-4">
              {activeLeader === "chairman" ? (
                <>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                      Leadership
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight text-slate-900">
                      Muzeebur Rahaman
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 uppercase tracking-[0.16em]">
                      Chairman, Holistech Global Solutions
                    </p>
                  </div>
                  <div className="space-y-3 text-[15px] text-slate-700 leading-relaxed">
                    <p>
                      Muzeebur Rahaman is a seasoned industry leader with over 30 years of experience in the
                      Electronics Manufacturing Services (EMS) and IT hardware supply chain sectors. He currently
                      serves as Managing Director at Foxteq, part of the Foxconn Group, overseeing operations for
                      global brands including Apple, Dell, HP, and Lenovo.
                    </p>
                    <p>
                      He has led transformational growth initiatives, scaling operations from 50 to 1,000+ employees
                      and increasing revenues from USD 5M to USD 200M. With deep expertise in global supply chain
                      management, reverse logistics, and cost optimization, he is known for driving operational
                      excellence, commercial strength, and sustainable international growth.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                      Leadership
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-tight text-slate-900">
                      Mohsin Mohammed
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 uppercase tracking-[0.16em]">
                      Founder &amp; CEO, Holistech Global Solutions
                    </p>
                  </div>
                  <div className="space-y-3 text-[15px] text-slate-700 leading-relaxed">
                    <p>
                      Mohsin Mohammed is a strategic growth leader with 17+ years of experience in enterprise sales,
                      SaaS, and digital transformation. An alumnus of Symbiosis Centre for Management Studies, he has
                      held leadership roles at Salesforce, Equifax, Persistent Systems, and Lendingkart Technologies
                      Private Limited.
                    </p>
                    <p>
                      At Equifax, he scaled the business multifold, strengthening strategic relationships across BFSI
                      and fintech segments. As a founding member of Lendingkart&apos;s platform business, he played a
                      key role in building and scaling the B2B SaaS vertical, driving new revenue streams and strategic
                      partnerships.
                    </p>
                    <p>
                      He has also served as a strategic advisor and growth partner to multiple startups, helping them
                      establish operations, refine GTM models, secure partnerships, and scale across India and
                      international markets. At Holistech Global Solutions, he leads the vision of building a
                      structured, channel-driven growth platform focused on scalable revenue models, strategic OEM
                      alliances, and long-term recurring value creation.
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  </section>
  );
};

export default CompanySection;
