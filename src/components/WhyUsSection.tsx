import { motion } from "framer-motion";
import { Sparkles, Users, Globe, TrendingUp, Infinity } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Structured Market Access",
    desc: "Systematic entry into high-growth regions with local execution capability.",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
  },
  {
    icon: Sparkles,
    title: "Advisory-Led Commercialization",
    desc: "Revenue models designed around market reality not theory",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    icon: Users,
    title: "Enterprise Network Alignment",
    desc: "Deep connections across buyers, integrators, and decision-makers.",
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
  },
  {
    icon: TrendingUp,
    title: "Performance-Driven Models",
    desc: "Engagement structures tied to measurable commercial outcomes.",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
  },
  {
    icon: Infinity,
    title: "Long-Term Revenue Partnerships",
    desc: "Built for recurring value creation, not short-term transactions.",
    gradient: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
  },
];

const WhyUsSection = () => (
  <section className="section-padding relative overflow-hidden" style={{ background: "transparent" }}>
    {/* Subtle dot pattern */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.2) 1px, transparent 0)`,
      backgroundSize: "28px 28px"
    }} />

    <div className="container mx-auto relative z-10">
      {/* Header */}
      <div className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3"
        >
          Our Advantage
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4"
        >
          Why Holistech?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-body max-w-xl mx-auto text-base md:text-lg"
        >
          Every engagement is aligned to long-term revenue performance, not short-term transactions.
        </motion.p>
      </div>

      {/* Reason cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/60 p-5 text-center hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-400 hover:-translate-y-2 overflow-hidden"
          >
            {/* Top gradient */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${r.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className={`w-16 h-16 ${r.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <r.icon className="w-8 h-8 text-slate-700" />
            </div>
            <h3 className="font-heading font-bold text-sm mb-2">{r.title}</h3>
            <p className="text-xs text-body leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
