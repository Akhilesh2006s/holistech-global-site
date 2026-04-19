import { motion } from "framer-motion";
import PageBackground from "@/components/PageBackground";
import Navbar from "@/components/Navbar";
import CompanySection from "@/components/CompanySection";
import FooterSection from "@/components/FooterSection";
import { PageSeo } from "@/components/Seo";

const CompanyPage = () => {
  return (
    <>
      <PageSeo
        title="Company — Operator-Led Channel-First Advisory"
        description="Holistech Global Solutions is an operator-led strategic advisory and channel partner firm helping technology vendors build scalable partner-led revenue models."
        image="/What%20we%20do.png"
      />
      <PageBackground />

      <motion.div
        className="min-h-screen relative z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />

        {/* Company hero */}
        <section
          className="hero-premium-bg hero-premium-bg--company relative flex items-center overflow-hidden"
          style={{
            backgroundImage: "url('/What we do.png')",
          }}
        >
          <div className="hero-premium-content container mx-auto px-4 lg:px-8 pt-20 pb-24 lg:pt-24 lg:pb-32">
            <div className="hero-layout">
              <div className="hero-layout__text">
                <div className="relative z-10">
                  <p className="hero-label text-sm uppercase tracking-[0.25em] mb-4 font-semibold">
                    Company
                  </p>
                  <h1 className="hero-title">
                    Operator-led channel-first growth advisory
                  </h1>
                  <p className="hero-subtitle text-lg md:text-xl mb-10 font-body">
                    A team of practitioners building scalable partner-led revenue models with technology vendors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        <CompanySection />
        <FooterSection />
      </motion.div>
    </>
  );
};

export default CompanyPage;

