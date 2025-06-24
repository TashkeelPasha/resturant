import { useEffect, useRef, useState } from "react";

interface AboutProps {
  name: string;
  address: string;
  phone: string;
}

const About: React.FC<AboutProps> = ({ name, address, phone }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {[
              {
                icon: "🔥",
                title: "High Quality",
                desc: "We use only the freshest, locally sourced ingredients for an unparalleled dining experience.",
              },
              {
                icon: "👨‍🍳",
                title: "Top Chefs",
                desc: "Our award-winning chefs bring years of expertise and passion to every dish they create.",
              },
              {
                icon: "🍖",
                title: "Best Meat",
                desc: "Savor the finest cuts of meat, expertly grilled to perfection, juicy and tender every time.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4 group">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mr-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <span className="text-orange-400 text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-400 group-hover:text-orange-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed ml-16">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100 animate-fade-in-up"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="mb-8">
              <h4 className="text-orange-400 text-lg mb-2 animate-pulse">
                About
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We Serve Tasty Grilled
                <br />
                Goodness!
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                At our restaurant, we believe in the art of grilling. Every dish
                is a masterpiece, crafted with passion and precision. From our
                sizzling steaks to our succulent ribs, we guarantee a culinary
                experience that will tantalize your taste buds. Join us for an
                unforgettable journey of flavors and aromas.
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-full text-lg font-semibold animate-slide-in-bottom">
                Learn More
              </button>
              {/* <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-full text-lg font-semibold">
                Order Now
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
