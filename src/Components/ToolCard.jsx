import { toast } from "react-toastify";

const ToolCard = ({ tool, carts, setCarts }) => {
  const isSubscribed = carts.find((item) => item.id === tool.id);

  const handleSubscription = () => {
    if (isSubscribed) {
      toast.error("Item already Selected");
      return;
    }

    setCarts([...carts, tool]);
    toast.success("Item Added to Cart");
  };

  return (
    <div className="h-full">
      <div className="border border-gray-200 p-3 rounded-lg h-full flex flex-col justify-between">
        {/* Top Content */}
        <div className="space-y-2">
          <div className="badge badge-soft badge-success text-xs">
            {tool.tag}
          </div>

          <img
            src={tool.image || ""}
            alt={tool.name}
            className="w-full h-10 object-cover rounded-md"
          />

          <h3 className="text-base font-semibold">{tool.name}</h3>

          <p className="text-xs text-gray-600 line-clamp-2">
            {tool.description}
          </p>

          <div className="flex gap-2 items-center">
            <h3 className="text-sm font-bold">{tool.price}</h3>
            <span className="text-xs">{tool.period}</span>
          </div>

          <p className="text-xs line-clamp-2">{tool.features}</p>
        </div>

        <button
          onClick={handleSubscription}
          className="btn btn-primary w-full rounded-full mt-3 text-sm"
        >
          {isSubscribed ? "Subscribed" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default ToolCard;
