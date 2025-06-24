import React from "react";
import { useParams } from "react-router-dom";
import restaurantsData from "../../data/restaurants.json";

interface Restaurant {
  id: string;
  name: string;
  address: string;
  phone: string;
  foodCategories: string[];
  image: string;
}

const RestaurantDetail: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const restaurant: Restaurant | undefined = restaurantsData[restaurantId];

  if (!restaurant) {
    return (
      <div className="container mx-auto p-4 text-center text-red-500">
        Restaurant not found.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{restaurant.name}</h1>
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-lg mb-2">
        <strong>Address:</strong> {restaurant.address}
      </p>
      <p className="text-lg mb-2">
        <strong>Phone:</strong> {restaurant.phone}
      </p>
      <p className="text-lg mb-2">
        <strong>Categories:</strong> {restaurant.foodCategories.join(", ")}
      </p>
      {/* Add more restaurant details here as needed */}
    </div>
  );
};

export default RestaurantDetail;
