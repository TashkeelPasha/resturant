import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeroProps {
  name: string;
  image?: string;
  foodCategories: string[];
}

const Hero: React.FC<HeroProps> = ({ name, image, foodCategories }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${
            image || "https://images.unsplash.com/photo-1544025162-d76694265947"
          }')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-orange-400/30 rounded-full animate-bounce`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0 animate-delay-300">
          The Best BBQ{" "}
          <span className="text-orange-400 animate-pulse">
            You'll Ever Taste
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in opacity-0 animate-delay-500 max-w-2xl mx-auto leading-relaxed">
          Experience the rich, smoky flavors of our perfectly grilled meats,
          crafted with passion and tradition.
        </p>
        <div className="animate-fade-in opacity-0 animate-delay-700 animate-slide-in-bottom">
          <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl rounded-full border-2 border-orange-400/50">
            RESERVE A TABLE
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
