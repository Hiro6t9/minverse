
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GameModesSection from "@/components/GameModesSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <HeroSection />
          <GameModesSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
