import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Link } from "react-router-dom";
import restaurantsData from '../../data/restaurants.json';



const FeaturedDishes = () => {
  return (
    <section id="menu" className="py-16 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
          Our Featured Restaurants
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto animate-fade-in-up animate-delay-300">
          Explore our selection of top-rated restaurants, each offering a unique culinary experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(restaurantsData).map(([id, restaurant]) => (
            <Link to={`/restaurants/${id}`} key={id}>
              <Card
                className="bg-gray-800 border-gray-700 text-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 animate-slide-in-bottom"
                style={{ animationDelay: `${Object.keys(restaurantsData).indexOf(id) * 100}ms` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzM5MzAyfDB8MXxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHx8fDE3MTY5OTQ1ODl8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Restaurant Image"
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {restaurant.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{restaurant.address}</p>
                  <p className="text-orange-400 text-xl font-semibold">
                    {restaurant.foodCategories.join(", ")}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
