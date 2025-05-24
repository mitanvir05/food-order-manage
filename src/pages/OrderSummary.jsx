const OrderSummary = ({ orders = [] }) => {
  const total = orders.length;
  const pending = orders.filter((o) => o.status === "PENDING").length;
  const delivered = orders.filter((o) => o.status === "DELIVERED").length;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-cardbg rounded-lg p-4">
          <div className="text-5xl font-bold text-yellow-500 mb-2">{total}</div>
          <div className="bg-yellow-800 bg-opacity-50 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
            Total Order
          </div>
        </div>
        <div className="bg-cardbg rounded-lg p-4">
          <div className="text-5xl font-bold text-red-500 mb-2">{pending}</div>
          <div className="bg-red-800 bg-opacity-50 text-red-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
            Pending
          </div>
        </div>
        <div className="bg-cardbg rounded-lg p-4">
          <div className="text-5xl font-bold text-green-500 mb-2">
            {delivered}
          </div>
          <div className="bg-green-800 bg-opacity-50 text-green-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
            Delivered
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
