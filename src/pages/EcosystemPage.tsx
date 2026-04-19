import { motion } from "framer-motion";
import PageBackground from "@/components/PageBackground";
import Navbar from "@/components/Navbar";
import EcosystemSection from "@/components/EcosystemSection";
import FooterSection from "@/components/FooterSection";
import { PageSeo } from "@/components/Seo";

const EcosystemPage = () => {
  return (
    <>
      <PageSeo
        title="Ecosystem — Partner & Vendor Channel Networks"
        description="Connected vendor, partner, and enterprise ecosystems: channel networks where every actor is aligned to long-term revenue."
        image="/Ecosystem.png"
      />
      <PageBackground />

      <motion.div
        className="min-h-screen relative z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />

        {/* Ecosystem hero - dedicated banner image */}
        <section
          className="hero-premium-bg hero-page-full relative flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/Ecosystem.png')",
          }}
        >
          <div className="hero-premium-content container mx-auto px-4 lg:px-8 pt-20 pb-24 lg:pt-24 lg:pb-32">
            <div className="hero-layout">
              <div className="hero-layout__text">
                <div className="relative z-10">
                  <p className="hero-label text-sm uppercase tracking-[0.25em] mb-4 font-semibold">
                    Ecosystem
                  </p>
                  <h1 className="hero-title">
                    Connected vendor partner and enterprise ecosystems
                  </h1>
                  <p className="hero-subtitle text-lg md:text-xl mb-10 font-body">
                    Designing channel networks where every actor is aligned to long-term revenue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <EcosystemSection />
        <FooterSection />
      </motion.div>
    </>
  );
};

export default EcosystemPage;

