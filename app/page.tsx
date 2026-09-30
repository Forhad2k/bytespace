import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoTicker from "./components/LogoTicker";
import CoursesSection from "./components/CoursesSection";
import GrowthSection from "./components/GrowthSection";
import CreatorCTASection from "./components/CreatorCTASection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";

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
