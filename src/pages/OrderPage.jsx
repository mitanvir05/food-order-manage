import React, { useState } from "react";
import CreateOrder from "./CreateOrder";
import hamburger from "../assets/hamburger.svg";
import chicken from "../assets/chicken.svg";
import submarine from "../assets/submarine.svg";
import pizza from "../assets/pizza.svg";
import OrderSummary from "./OrderSummary";
import OrderReports from "./OrderReports";

const foodItemsInitial = [
  { id: 1, name: "Hamburger", price: 300, img: hamburger },
  { id: 2, name: "Chicken Nuggets", price: 200, img: chicken },
  { id: 3, name: "Submarine Sandwich", price: 500, img: submarine },
  { id: 4, name: "Pizza slices", price: 100, img: pizza },
];

const OrderPage = () => {
  const [quantities, setQuantities] = useState({});
  const [customerName, setCustomerName] = useState("");
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("All");

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

  const handlePlaceOrder = () => {
    if (!customerName.trim()) {
      alert("Customer name is required!");
      return;
    }
    if (Object.keys(quantities).length === 0) {
      alert("Please add at least one item.");
      return;
    }

    const items = foodItemsInitial
      .map((item) => ({
        ...item,
        qty: quantities[item.id] || 0,
      }))
      .filter((item) => item.qty > 0);

    const newOrder = {
      id: crypto.randomUUID(),
      customerName,
      items,
      amount: totalPrice,
      status: "PENDING",
    };

    setOrders((prev) => [...prev, newOrder]);
    setCustomerName("");
    setQuantities({});
  };

  const handleDelete = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  const handleDeliver = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: "DELIVERED" } : order
      )
    );
  };

   const filteredOrders = orders.filter((order) => {
    if (filter === "All") return true;
    return order.status === filter.toUpperCase();
  });

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
        handlePlaceOrder={handlePlaceOrder}
      />
      <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
        <OrderSummary orders={orders}/>
        <OrderReports
          orders={filteredOrders}
          onDelete={handleDelete}
          onDeliver={handleDeliver}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
};

export default OrderPage;
