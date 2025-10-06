import Hero from "@/components/mainpage-sections/mainhero";
import Statement from "@/components/mainpage-sections/statement";
import ServicesPremium from "@/components/mainpage-sections/services-premium";
import PortfolioTiles from "@/components/mainpage-sections/portfolio-tiles";
import ProcessRail from "@/components/mainpage-sections/process-rail";
import TestimonialsElegant from "@/components/mainpage-sections/testimonials-elegant";
import CtaSlab from "@/components/mainpage-sections/cta-slab";

export default function Home() {
  return (
    <main>

      <Hero />
      <Statement />
      <ServicesPremium />
      <PortfolioTiles />
      <ProcessRail />
      <TestimonialsElegant />
      <CtaSlab />
    </main>
  );
}
