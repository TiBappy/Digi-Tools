import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Stats from "./Components/Stats";
import Tools from "./Components/Tools";
import Cart from "./Components/Cart";
import { useState } from "react";
import { Suspense } from "react";

const getTools = async () => {
  const res = await fetch("/tools.json");
  return res.json();
};

function App() {
  const toolsPromise = getTools();
  const [activeTab, setActiveTab] = useState("tool");
  console.log(activeTab);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      {/* name of each tab group should be unique */}
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

      {activeTab === "tool" && (
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <Tools toolsPromise={toolsPromise}></Tools>
        </Suspense>
      )}

      {
        activeTab === "Cart" && <Cart></Cart>
      }

      
    </>
  );
}

export default App;
