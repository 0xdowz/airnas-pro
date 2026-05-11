import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BentoGrid from "../components/BentoGrid";
import TechStack from "../components/TechStack";
import TechnicalSpecs from "../components/TechnicalSpecs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-space-black min-h-screen text-apple-text overflow-hidden">
      <Navbar />
      <Hero />
      <BentoGrid />
      <TechStack />
      <TechnicalSpecs />
      <Footer />
    </div>
  );
}
