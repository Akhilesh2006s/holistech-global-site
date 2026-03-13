import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Operator-Led GTM & Channel Expansion for Global Technology Companies",
    subtitle: "Where strategic design meets revenue execution",
    image: "/Banner1.png",
  },
  {
    title: "We build scalable partner ecosystems that transform strategy into predictable revenue",
    subtitle: "Transforming OEM partnerships into predictable revenue engines",
    image: "/hero.png",
  },
  {
    title: "Channel intelligence that turns complex markets into clear growth paths",
    subtitle: "Real-time partner pipeline and market insights for data-led decisions",
    image: "/Banner2.png",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="hero-premium-bg relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('${slides[current].image}')`,
      }}
    >
      {/* Content — single-column layout, tightened padding so CTAs fit above the fold */}
      <div className="hero-premium-content container mx-auto px-4 lg:px-8 pt-16 pb-16 lg:pt-20 lg:pb-24">
        <div className="hero-layout">
          {/* Left column: Text content */}
          <div className="hero-layout__text">
            <div className="relative z-10">
              <p className="hero-label text-sm uppercase tracking-[0.25em] mb-4 font-semibold">
                Holistech Global Solutions
              </p>
              <h1 className="hero-title">
                {current === 2 ? (
                  <>
                    Channel intelligence
                    <span className="block">that turns complex markets</span>
                    <span className="block">into clear growth paths</span>
                  </>
                ) : (
                  slides[current].title
                )}
              </h1>
              <p className="hero-subtitle text-lg md:text-xl mb-10 font-body">
                {slides[current].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="hero-btn-secondary"
                  onClick={() => navigate("/solutions")}
                >
                  Explore Our Services
                </Button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`hero-dot ${
                    i === current ? "hero-dot--active" : ""
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
