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

function App() {
  const [activeTab, setActiveTab] = useState("tool");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar />
      <Banner />
      <Stats />

      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Products"
          defaultChecked
          onClick={() => setActiveTab("tool")}
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab"
          aria-label="Cart"
          onClick={() => setActiveTab("Cart")}
        />
      </div>

      <ToastContainer />

      {activeTab === "tool" && <Tools carts={carts} setCarts={setCarts} />}

      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts} />}

      <Steps></Steps>
    </>
  );
}

export default App;
