import React, { useState } from "react";
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
  const [quantities, setQuantities] = useState({});
  const [customerName, setCustomerName] = useState("");

  const handlePlus = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleMinus = (id) => {
    setQuantities((prev) => {
      const newQty = (prev[id] || 0) - 1;
      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const totalPrice = foodItemsInitial.reduce((total, item) => {
    const qty = quantities[item.id] || 0;
    return total + item.price * qty;
  }, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOrder
        foodItems={foodItemsInitial}
        quantities={quantities}
        customerName={customerName}
        setCustomerName={setCustomerName}
        handlePlus={handlePlus}
        handleMinus={handleMinus}
        totalPrice={totalPrice}
      />
    </div>
  );
};

export default OrderPage;
