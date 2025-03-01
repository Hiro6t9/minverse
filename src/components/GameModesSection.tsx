
import { useEffect, useRef } from "react";
import { Sword, Skull, Bed, Shield, Trophy } from "lucide-react";
import { Button } from "./ui/button";

interface GameMode {
  name: string;
  description: string;
  bgColor: string;
  icon: React.ReactNode;
  features: string[];
}

export default function GameModesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const gameModes: GameMode[] = [
    {
      name: "LIFESTEAL",
      description: "In this intense game mode, stealing hearts from enemies is the key to survival. Each kill grants you a heart from your victim.",
      bgColor: "from-rose-500/80 to-red-700/80 dark:from-rose-600/50 dark:to-red-800/50",
      icon: <Skull className="w-12 h-12 text-white" />,
      features: [
        "Lose a heart when you die, gain one when you kill",
        "Once you lose all hearts, you're banned until the next reset",
        "Craft special items to regain hearts or steal more",
        "Form alliances to survive the brutal competition"
      ]
    },
    {
      name: "BEDWARS",
      description: "Protect your bed and destroy others' in this strategic PvP game. Collect resources, upgrade your gear, and conquer the arena.",
      bgColor: "from-cyan-500/80 to-blue-700/80 dark:from-cyan-600/50 dark:to-blue-800/50",
      icon: <Bed className="w-12 h-12 text-white" />,
      features: [
        "Solo, duo, trio, and squad modes available",
        "Custom maps with unique resource generators",
        "Special power-ups and custom enchantments",
        "Seasonal competitions with exclusive rewards"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const gameModeCards = document.querySelectorAll(".game-mode-card");
    gameModeCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      gameModeCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="game-modes" ref={sectionRef} className="section-container bg-gradient-to-br from-cyan-50/50 to-emerald-50/50 dark:from-cyan-900/10 dark:to-emerald-900/10">
      <div className="flex flex-col items-center mb-12">
        <h2 className="section-title text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
          Game Modes
        </h2>
        <p className="section-subtitle">
          Experience intense competition and strategic gameplay in our featured game modes
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        {gameModes.map((mode, index) => (
          <div
            key={index}
            className="game-mode-card opacity-0 group overflow-hidden"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
          >
            <div className={`relative h-full rounded-xl overflow-hidden bg-gradient-to-br ${mode.bgColor} backdrop-blur-sm border border-white/20 shadow-xl`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm mr-4">
                    {mode.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-wider">{mode.name}</h3>
                </div>
                
                <p className="text-white/90 text-lg mb-6">{mode.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 uppercase tracking-wider text-sm">Key Features</h4>
                  <ul className="space-y-2">
                    {mode.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Shield className="w-4 h-4 text-white/70 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
