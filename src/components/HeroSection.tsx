
import { useEffect, useState } from "react";
import ServerStatus from "./ServerStatus";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const serverIp = "PLAY.MINVERSE.FUN";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black">
        <div 
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000", 
            isLoaded ? "opacity-40" : "opacity-0"
          )}
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1607513746994-51f730a44832?q=80&w=1974&auto=format&fit=crop')` 
          }}
        ></div>
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 px-4 pt-16 flex flex-col items-center text-center">
        <h1 
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-700",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">MINEVERSE</span>
        </h1>
        
        <p 
          className={cn(
            "text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8 transition-all duration-700 delay-100",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          Join the ultimate Minecraft experience with custom game modes, events, and an amazing community.
        </p>
        
        <div 
          className={cn(
            "flex flex-col sm:flex-row items-center gap-6 mb-10 transition-all duration-700 delay-200",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <button className="minecraft-btn">
            Join Now
          </button>
          
          <div className="flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-md px-4 py-2 border border-white/10">
            <span className="font-mono font-bold">{serverIp}</span>
            <button 
              className="text-xs bg-white/10 hover:bg-white/20 rounded px-2 py-1 transition-colors"
              onClick={() => {
                navigator.clipboard.writeText(serverIp);
                // You could add a toast notification here
              }}
            >
              Copy
            </button>
          </div>
        </div>
        
        <ServerStatus 
          serverIp={serverIp} 
          className={cn(
            "transition-all duration-700 delay-300 w-full max-w-xs",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        />
        
        <div 
          className={cn(
            "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-700 delay-700",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <a href="#game-modes" className="text-white/80 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
