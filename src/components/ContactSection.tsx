import { motion } from "framer-motion";
import { Mail, MapPin, Globe2, MessageCircle, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const conversationTypes = [
  "Vendor GTM consultations",
  "Channel expansion discussions",
  "Strategic advisory engagements",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden" style={{ background: "transparent" }}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/20 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4"
          >
            Let&apos;s Build Scalable Growth Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body max-w-2xl mx-auto text-base md:text-lg"
          >
            Share your market, channel, or expansion priorities, and we&apos;ll explore how Holistech
            can help structure and activate the right ecosystem for your next phase of growth.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-10 items-start max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Ideal for card */}
            <div className="rounded-2xl border border-slate-200/60 bg-slate-50/50 p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                </div>
                <p className="text-sm font-bold font-heading">Ideal For</p>
              </div>
              <ul className="space-y-2 text-sm text-body">
                {conversationTypes.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "contact@holistechglobal.com" },
                { icon: Phone, label: "Phone", value: "+91 98402 54952" },
                { icon: MapPin, label: "Location", value: "India Chennai | Bengaluru" },
                { icon: Globe2, label: "Coverage", value: "India & global expansion support" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{item.label}</p>
                    <p className="text-sm text-slate-900 font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/75 backdrop-blur-sm rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-200/30 p-6 md:p-8"
          >
            <h3 className="text-lg font-bold font-heading mb-6">Send Us a Message</h3>
            <form
              className="space-y-4"
              action="https://formsubmit.co/contact@holistechglobal.com"
              method="POST"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl text-base bg-gradient-to-r from-slate-900 to-slate-700 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 group"
              >
                Send Message
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
