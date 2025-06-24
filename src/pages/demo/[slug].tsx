import React from "react";
import { useParams } from "react-router-dom";
import restaurantsData from "../../../data/restaurants.json";
import Hero from "../../components/Hero";
import About from "../../components/About";
import FeaturedDishes from "../../components/FeaturedDishes";
import Contact from "../../components/Contact";
import Navigation from "../../components/Navigation";

interface Restaurant {
  name: string;
  phone: string;
  address: string;
  foodCategories: string[];
  image?: string;
}

const DemoPage: React.FC = () => {
  const { slug } = useParams();

  const restaurant: Restaurant | undefined = slug
    ? (restaurantsData as any)[slug as string]
    : undefined;

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          This demo doesn&apos;t exist yet.
        </h1>
      </div>
    );
  }

  const formattedPhoneNumber = restaurant.phone.replace(/\s/g, "");
  const whatsappLink = `https://wa.me/${formattedPhoneNumber.replace(
    /\+/g,
    ""
  )}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero
          name={restaurant.name}
          image={restaurant.image}
          foodCategories={restaurant.foodCategories}
        />
        <About
          name={restaurant.name}
          address={restaurant.address}
          phone={restaurant.phone}
        />
        <FeaturedDishes />
        <Contact whatsappLink={whatsappLink} />
      </main>
    </div>
  );
};

export default DemoPage;
