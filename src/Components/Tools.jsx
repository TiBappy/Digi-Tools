import { useEffect, useState } from "react";
import ToolCard from "./ToolCard";

const Tools = ({ carts, setCarts }) => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("/tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div className="mt-22">
      <div className="text-center p-5 space-y-4">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {tools.map((tool) => (
          <div key={tool.id} className="h-full flex">
            <ToolCard
              tool={tool}
              carts={carts}
              setCarts={setCarts}
              className="flex-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
