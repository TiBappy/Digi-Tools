import { useState } from "react";
import { toast } from "react-toastify";

const ToolCard = ({ tool, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscription = () => {
    
     setIsSubscribed(true)
     const isFound = carts.find(item => item.id === tool.id)
     if(isFound) {
      toast.error("Item already Selected")
      return;
     }
     setCarts([...carts, tool])
     toast.success("Item Added to Cart")
}

  

  return (
    <div>
      <div className="border border-gray-200 p-4 space-y-3 rounded-lg">
        <div>
          <div className="badge badge-soft badge-success">{tool.tag}</div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <h3 className="text-xl font-semibold">{tool.name}</h3>
        <p className="text-sm">{tool.description}</p>
        <div className="flex gap-2 items-center">
          <h3 className="text-[18px] font-bold">{tool.price}</h3>
          <span className="text-sm">{tool.period}</span>
        </div>
        <p>{tool.features}</p>
        <button
          onClick={handleSubscription}
          className="btn btn-primary w-full rounded-full"
        >
          {isSubscribed ? "Subscribed" : "Subscribed Now"}
        </button>
      </div>
    </div>
  );
};

export default ToolCard;
