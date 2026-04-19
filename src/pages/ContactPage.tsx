import { motion } from "framer-motion";
import PageBackground from "@/components/PageBackground";
import Navbar from "@/components/Navbar";
import PartnerSection from "@/components/PartnerSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { PageSeo } from "@/components/Seo";

const ContactPage = () => {
  return (
    <>
      <PageSeo
        title="Partner With Us — Revenue Partnerships & Contact"
        description="Build structured, long-term revenue partnerships with Holistech: ecosystem-centric growth for vendors, distributors, and channel partners."
        image="/hero.png"
      />
      <PageBackground />

      <motion.div
        className="min-h-screen relative z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />

        {/* Partner + Contact combined hero */}
        <section
          className="hero-premium-bg relative flex items-center overflow-hidden"
        >
          <div className="hero-premium-content container mx-auto px-4 lg:px-8 pt-20 pb-24 lg:pt-24 lg:pb-32">
            <div className="hero-layout">
              <div className="hero-layout__text">
                <div className="relative z-10">
                  <p className="hero-label text-sm uppercase tracking-[0.25em] mb-4 font-semibold">
                    Partner With Us
                  </p>
                  <h1 className="hero-title">
                    Build structured{" "}
                    <span className="block">
                      long-term revenue partnerships with Holistech
                    </span>
                  </h1>
                  <p className="hero-subtitle text-lg md:text-xl mb-10 font-body">
                    For vendors distributors and partners seeking performance-linked ecosystem-centric growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true" />

        {/* Partnership overview from Partner page */}
        <PartnerSection />

        {/* Contact form and details */}
        <ContactSection />
        <FooterSection />
      </motion.div>
    </>
  );
};

export default ContactPage;

