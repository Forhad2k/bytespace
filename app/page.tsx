import Navbar from "./sections/Navbar";
import HeroSection from "./sections/HeroSection";
import LogoTicker from "./sections/LogoTicker";
import CoursesSection from "./sections/CoursesSection";
import GrowthSection from "./sections/GrowthSection";
import CreatorCTASection from "./sections/CreatorCTASection";
import TestimonialsSection from "./sections/TestimonialsSection";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoTicker />
        <CoursesSection />
        <GrowthSection />
        <CreatorCTASection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
