import React from "react";
import CreateOrder from "./CreateOrder";
import hamburger from "../assets/hamburger.svg";
import chicken from "../assets/chicken.svg";
import submarine from "../assets/submarine.svg";
import pizza from "../assets/pizza.svg";

const foodItemsInitial = [
  { id: 1, name: "Hamburger", price: 300, img: hamburger },
  { id: 2, name: "Chicken Nuggets", price: 200, img: chicken },
  { id: 3, name: "Submarine Sandwich", price: 500, img: submarine },
  { id: 4, name: "Pizza slices", price: 100, img: pizza },
];

const OrderPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder foodItems={foodItemsInitial}/>
    </div>
  );
};

export default OrderPage;
