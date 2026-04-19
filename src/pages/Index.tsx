import { motion } from "framer-motion";
import PageBackground from "@/components/PageBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyUsSection from "@/components/WhyUsSection";
import TechnologyPartnersSection from "@/components/TechnologyPartnersSection";
import FooterSection from "@/components/FooterSection";
import { PageSeo } from "@/components/Seo";
import { SITE_DEFAULT_DESCRIPTION } from "@/config/site";

const Index = () => {
  return (
    <>
      <PageSeo
        title="Operator-Led GTM & Channel Expansion"
        description={SITE_DEFAULT_DESCRIPTION}
        image="/Banner1.png"
      />
      {/* Full-page scroll-reactive background */}
      <PageBackground />

      <motion.div
        className="min-h-screen relative z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
        <HeroSection />
        <div className="section-divider" aria-hidden="true" />
        <WhyUsSection />
        <TechnologyPartnersSection />
        <FooterSection />
      </motion.div>
    </>
  );
};

export default Index;
