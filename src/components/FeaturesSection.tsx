
import { useEffect, useRef } from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const features: Feature[] = [
    {
      icon: "⚔️",
      title: "PvP Arenas",
      description: "Battle other players in custom-designed PvP arenas with unique challenges and rewards.",
    },
    {
      icon: "🏰",
      title: "Creative Mode",
      description: "Express your creativity with unlimited resources and custom world editing tools.",
    },
    {
      icon: "🌎",
      title: "Survival World",
      description: "Experience Minecraft survival with custom plugins and balanced gameplay enhancements.",
    },
    {
      icon: "🎮",
      title: "Mini Games",
      description: "Enjoy a variety of custom mini-games like Skyblock, Bedwars, and more with friends.",
    },
    {
      icon: "🏆",
      title: "Weekly Events",
      description: "Participate in weekly community events with exciting prizes and exclusive rewards.",
    },
    {
      icon: "💎",
      title: "Economy System",
      description: "Trade with other players using our balanced in-game economy and marketplace.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Don't remove the animation class when leaving viewport
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach((feature) => {
      observer.observe(feature);
    });

    return () => {
      featureCards.forEach((feature) => {
        observer.unobserve(feature);
      });
    };
  }, []);

  return (
    <section id="features" ref={sectionRef} className="section-container bg-blue-50 dark:bg-blue-900/20">
      <h2 className="section-title text-primary">Server Features</h2>
      <p className="section-subtitle">
        Discover what makes Minverse unique and exciting for players of all styles
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card opacity-0 bg-white dark:bg-slate-800/70 border-blue-100 dark:border-blue-500/20"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
          >
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
              <p className="text-muted-foreground text-center">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
