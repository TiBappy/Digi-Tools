import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Stats from "./Components/Stats";
import Tools from "./Components/Tools";
import Cart from "./Components/Cart";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Steps from "./Components/Steps";
import PricingCard from "./Components/PricingCard";
import Footer from "./Components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("tool");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar carts={carts} />

      <Banner />
      <Stats />

      <div className="flex justify-center gap-4 mt-10 cursor-pointer">
        <button
          onClick={() => setActiveTab("tool")}
          className={`px-6 py-2 cursor-pointer rounded-full font-medium transition-all duration-300
            ${
              activeTab === "tool"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("Cart")}
          className={`px-6 py-2 cursor-pointer rounded-full font-medium transition-all duration-300
            ${
              activeTab === "Cart"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
        >
          Cart
        </button>
      </div>

      <ToastContainer />

      {activeTab === "tool" && <Tools carts={carts} setCarts={setCarts} />}

      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts} />}

      <Steps />
      <PricingCard />
      <Footer />
    </>
  );
}

export default App;
