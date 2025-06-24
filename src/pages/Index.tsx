import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedDishes from "@/components/FeaturedDishes";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero
          name="Restaurant Name"
          foodCategories={["Italian", "Mediterranean", "Seafood", "Desserts"]}
        />
        <About
          name="Restaurant Name"
          address="123 Restaurant Street, City, Country"
          phone="+1 234 567 8900"
        />
        <FeaturedDishes />
        <Contact whatsappLink="https://wa.me/your-number-here" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
