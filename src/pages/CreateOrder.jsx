import React from "react";
import PlusIcons from "../icons/PlusIcons";
import MinusIcons from "../icons/MinusIcons";

const CreateOrder = ({
  foodItems,
  quantities,
  customerName,
  setCustomerName,
  handlePlus,
  handleMinus,
  totalPrice,
  handlePlaceOrder,
}) => {
  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)] flex flex-col">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      {/* Customer Name Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full bg-gray-800 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      {/* Choose Items */}
      <div className="mb-4 flex-grow overflow-auto max-h-[300px]">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        {foodItems.map((item) => {
          const qty = quantities[item.id] || 0;
          return (
            <div
              key={item.id}
              className="bg-gray-800 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 flex items-center justify-center mr-3">
                  <img src={item.img} alt={item.name} className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-400">BDT {item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleMinus(item.id)}
                  className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                  disabled={qty === 0}
                >
                  <MinusIcons />
                </button>
                <span className="text-white font-semibold w-6 text-center">
                  {qty}
                </span>
                <button
                  onClick={() => handlePlus(item.id)}
                  className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                >
                  <PlusIcons />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Place Order Button */}
      <button
        onClick={handlePlaceOrder}
        className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 cursor-pointer"
        disabled={totalPrice === 0}
      >
        Place Order (BDT {totalPrice})
      </button>
    </div>
  );
};

export default CreateOrder;
