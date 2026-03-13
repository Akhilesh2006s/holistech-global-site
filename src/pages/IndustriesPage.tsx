import { motion } from "framer-motion";
import PageBackground from "@/components/PageBackground";
import Navbar from "@/components/Navbar";
import IndustriesSection from "@/components/IndustriesSection";
import FooterSection from "@/components/FooterSection";

const IndustriesPage = () => {
  return (
    <>
      <PageBackground />

      <motion.div
        className="min-h-screen relative z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />

        {/* Industries hero - dedicated banner image */}
        <section
          className="hero-premium-bg relative flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/Industries.png')",
          }}
        >
          <div className="hero-premium-content container mx-auto px-4 lg:px-8 pt-20 pb-24 lg:pt-24 lg:pb-32">
            <div className="hero-layout">
              <div className="hero-layout__text">
                <div className="relative z-10">
                  <p className="hero-label text-sm uppercase tracking-[0.25em] mb-4 font-semibold">
                    Industries
                  </p>
                  <h1 className="hero-title">
                    Channel strategies across industries
                  </h1>
                  <p className="hero-subtitle text-lg md:text-xl mb-10 font-body">
                    Sector-specific partner models tailored to how your buyers evaluate and adopt technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <IndustriesSection />
        <FooterSection />
      </motion.div>
    </>
  );
};

export default IndustriesPage;

