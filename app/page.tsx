import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoTicker from "./components/LogoTicker";
import CoursesSection from "./components/CoursesSection";
import ExploreCategoriesSection from "./components/ExploreCategoriesSection";
import GrowthSection from "./components/GrowthSection";
import CreateCoursesSection from "./components/CreateCoursesSection";
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
        <ExploreCategoriesSection />
        <GrowthSection />
        <CreateCoursesSection />
        <CreatorCTASection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
