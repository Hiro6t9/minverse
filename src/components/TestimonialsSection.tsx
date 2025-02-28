
import { useEffect, useRef } from "react";

interface Testimonial {
  name: string;
  avatar: string;
  text: string;
  role: string;
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials: Testimonial[] = [
    {
      name: "Alex_Builder",
      avatar: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=150&h=150&auto=format&fit=crop",
      text: "Minverse has the best creative mode server I've ever played on. The community is super helpful and the custom plugins make building so much more fun!",
      role: "Creative Builder",
    },
    {
      name: "SurvivalQueen",
      avatar: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=150&h=150&auto=format&fit=crop",
      text: "I've been playing on Minverse for over a year now. The survival experience is perfectly balanced and the events keep things exciting!",
      role: "Survival Player",
    },
    {
      name: "PvPMaster99",
      avatar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=150&h=150&auto=format&fit=crop",
      text: "If you're looking for competitive PvP with fair gameplay, Minverse is the place to be. The custom arenas are amazing and really test your skills.",
      role: "PvP Champion",
    },
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

    const testimonials = document.querySelectorAll(".testimonial-card");
    testimonials.forEach((testimonial) => {
      observer.observe(testimonial);
    });

    return () => {
      testimonials.forEach((testimonial) => {
        observer.unobserve(testimonial);
      });
    };
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="section-container bg-muted/20">
      <h2 className="section-title">Player Testimonials</h2>
      <p className="section-subtitle">
        See what our community has to say about their Minverse experience
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card opacity-0"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <p className="text-muted-foreground italic mb-4 text-center">
                "{testimonial.text}"
              </p>
              <div className="mt-auto">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
