import { use} from "react";
import ToolCard from "./ToolCard";

const Tools = ({ toolsPromise }) => {
  const tools = use(toolsPromise);
  
//   console.log(tools);
  return (
    <div className="mt-22">
      <div className="text-center p-5 space-y-4">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tools.map((tool) => (
          <div>
            <ToolCard key={tool.id} tool = {tool}></ToolCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
