import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedDishes from "@/components/FeaturedDishes";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import restaurantsData from '../../data/restaurants.json';

const Index = () => {
  const firstRestaurantKey = Object.keys(restaurantsData)[0];
  const firstRestaurant = restaurantsData[firstRestaurantKey];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <Hero
          name={firstRestaurant?.name || "Restaurant Name"}
          foodCategories={firstRestaurant?.foodCategories || []}
        />
        <About
          name={firstRestaurant?.name || "Restaurant Name"}
          address={
            firstRestaurant?.address || "123 Restaurant Street, City, Country"
          }
          phone={firstRestaurant?.phone || ""}
        />
        <FeaturedDishes />
        <Contact whatsappLink="https://wa.me/your-number-here" restaurantInfo={{ address: firstRestaurant?.address || "", phone: firstRestaurant?.phone || "" }} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
