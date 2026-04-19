import { motion } from "framer-motion";
import PageBackground from "@/components/PageBackground";
import Navbar from "@/components/Navbar";
import InsightsSection from "@/components/InsightsSection";
import FooterSection from "@/components/FooterSection";
import { PageSeo } from "@/components/Seo";

const InsightsPage = () => {
  return (
    <>
      <PageSeo
        title="Insights — GTM, Channel & Ecosystem Perspectives"
        description="GTM, channel, and ecosystem perspectives for growth leaders: frameworks, playbooks, and market intelligence drawn from real execution."
        image="/insights.png"
      />
      <PageBackground />

      <motion.div
        className="min-h-screen relative z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />

        {/* Insights hero - dedicated banner image */}
        <section
          className="hero-premium-bg hero-page-full relative flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/insights.png')",
          }}
        >
          <div className="hero-premium-content container mx-auto px-4 lg:px-8 pt-20 pb-24 lg:pt-24 lg:pb-32">
            <div className="hero-layout">
              <div className="hero-layout__text">
                <div className="relative z-10">
                  <p className="hero-label text-sm uppercase tracking-[0.25em] mb-4 font-semibold">
                    Insights
                  </p>
                  <h1 className="hero-title">
                    GTM channel and ecosystem perspectives for growth leaders
                  </h1>
                  <p className="hero-subtitle text-lg md:text-xl mb-10 font-body">
                    Frameworks playbooks and market intelligence drawn from real execution
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <InsightsSection />
        <FooterSection />
      </motion.div>
    </>
  );
};

export default InsightsPage;

