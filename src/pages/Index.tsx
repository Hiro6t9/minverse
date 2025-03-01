
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GameModesSection from "@/components/GameModesSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  // Function to handle copying server IP to clipboard
  const copyServerIP = () => {
    const serverIp = "PLAY.MINVERSE.FUN";
    navigator.clipboard.writeText(serverIp);
    toast({
      title: "Server IP Copied!",
      description: "PLAY.MINVERSE.FUN has been copied to your clipboard.",
      duration: 3000,
    });
  };

  useEffect(() => {
    // Play background music when component mounts
    if (audioRef.current) {
      // Set low volume
      audioRef.current.volume = 0.2;
      
      // Play music on user interaction
      const playMusic = () => {
        if (audioRef.current) {
          audioRef.current.play().catch(err => console.error("Error playing audio:", err));
        }
        // Remove event listeners after first interaction
        document.removeEventListener('click', playMusic);
        document.removeEventListener('keydown', playMusic);
      };

      // Add event listeners for user interaction
      document.addEventListener('click', playMusic);
      document.addEventListener('keydown', playMusic);
      
      return () => {
        document.removeEventListener('click', playMusic);
        document.removeEventListener('keydown', playMusic);
      };
    }
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar copyServerIP={copyServerIP} />
        <main>
          <HeroSection copyServerIP={copyServerIP} />
          <GameModesSection />
        </main>
        <Footer copyServerIP={copyServerIP} />
        
        {/* Background Music */}
        <audio 
          ref={audioRef}
          loop
          preload="auto"
          src="https://archive.org/download/MinecraftThemeSong/Minecraft%20Theme%20Song.mp3"
          className="hidden"
        />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Index;
