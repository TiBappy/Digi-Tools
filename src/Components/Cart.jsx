import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts
    .reduce((sum, item) => sum + Number(item.price), 0)
    .toFixed(2);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment Successful");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast("Deleted Successfully");
  };

  return (
    <div className="mt-10 px-4">
      <div className="text-center space-y-4 mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Your Cart
        </h1>
        <p className="max-w-xl mx-auto text-sm text-gray-600">
          Review your selected tools and proceed to checkout.
        </p>
      </div>

      {carts.length === 0 ? (
        <div className="max-w-4xl mx-auto mt-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold">Your Cart is Empty</h1>
        </div>
      ) : (
        <>
          <div className="space-y-4 max-w-4xl mx-auto">
            {carts.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center justify-between gap-4 border border-gray-200 p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4 w-full">
                  <img
                    src={item.image || ""}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />

                  <div>
                    <h3 className="font-semibold text-base">{item.name}</h3>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-error btn-sm rounded-full"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto flex justify-between items-center mt-8 p-4 border-t">
            <span className="text-lg font-medium">Total</span>
            <span className="text-xl sm:text-2xl font-bold">${totalPrice}</span>
          </div>

          <div className="max-w-4xl mx-auto mt-4">
            <button
              onClick={handlePayment}
              className="btn btn-primary w-full rounded-full py-3 text-base sm:text-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
