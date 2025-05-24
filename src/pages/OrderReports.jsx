import React from "react";
import FunnelIcon from "../icons/FunnelIcon";
import DropdownIcon from "../icons/DropdownIcon";

const OrderReports = ({ orders, onDelete, onDeliver, setFilter }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <div className="flex gap-4 items-center relative">
          <FunnelIcon />

          <div className="relative">
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="bg-zinc-900 text-white pr-8 pl-2 py-1 rounded appearance-none"
            >
              <option>All</option>
              <option>Pending</option>
              <option>Delivered</option>
            </select>
            <div className="pointer-events-none absolute top-2.5 right-2">
              <DropdownIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-gray-700">
                  <td className="py-3">{order.id}</td>
                  <td className="py-3">{order.customerName}</td>
                  <td className="py-3">{order.items.length}</td>

                  <td className="py-3">{order.amount}</td>
                  <td className="py-3">
                    <span
                      className={
                        order.status === "DELIVERED"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <button
                      onClick={() => onDelete(order.id)}
                      className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                    >
                      Delete
                    </button>
                    {order.status === "PENDING" && (
                      <button
                        onClick={() => onDeliver(order.id)}
                        className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                      >
                        DELIVER
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderReports;
