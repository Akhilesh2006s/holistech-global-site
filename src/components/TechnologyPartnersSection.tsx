import { motion } from "framer-motion";

const partners = [
  { name: "Microsoft", image: "/Microsoft.avif" },
  { name: "AWS", image: "/aws.avif" },
  { name: "ServiceNow", image: "/Servicenow.png" },
  { name: "Salesforce", image: "/Salesforce.png" },
  { name: "SAP", image: "/sap.png" },
];

const TechnologyPartnersSection = () => {
  // Duplicate partners to create a seamless scrolling loop
  const scrollingPartners = [...partners, ...partners];

  return (
    <section
      id="technology-partners"
      className="section-padding relative overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-gradient-to-tl from-violet-100/15 to-transparent rounded-full blur-[70px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
            Leading Technology Providers
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
            Strategic Alliances with Global Platforms
          </h2>
          <p className="text-body max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            We work with leading technology providers, delivering consulting and growth-driven solutions across their platforms.
          </p>
        </motion.div>

        {/* Scrolling partner logo carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="logo-carousel max-w-5xl mx-auto"
        >
          <div className="logo-carousel-track">
            {scrollingPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="logo-carousel-item"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="logo-carousel-image"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologyPartnersSection;
