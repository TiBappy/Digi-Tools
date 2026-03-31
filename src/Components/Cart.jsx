import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts
    .reduce((sum, item) => sum + Number(item.price), 0)
    .toFixed(2);
  console.log(totalPrice);
  const handlePayment = () => {
    setCarts([]);
    toast.success("payment Succesfull")
  };
  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast("Deleted Succesfully")
  };
  return (
    <div>
      <div>
        <div className="text-center p-5 space-y-4">
          <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
          <p className="max-w-2xl mx-auto">
            Choose from our curated collection of premium digital products
            designedto boost your productivity and creativity.
          </p>
        </div>
      </div>
      {carts.length === 0 ? (
        <div className="max-w-5xl mx-auto mt-5">
          <h1 className="text-3xl text-center font-bold">The Cart Is Empty</h1>
        </div>
      ) : (
        <>
          <div className="mt-15">
            {carts.map((item) => (
              <div className="max-w-6xl mx-auto border-2 flex justify-between">
                <div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <p>$ {item.price}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-error rounded-full"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-6xl mx-auto flex justify-between items-center p-5">
            <div>Total</div>
            <div className="text-2xl font-bold">${totalPrice}</div>
          </div>
          <div className="max-w-6xl mx-auto">
            <button
              onClick={handlePayment}
              className="btn btn-primary w-full rounded-full p-3 text-lg"
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
