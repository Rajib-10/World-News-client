import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

const SubscriptionOption = () => {
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  const subscriptionOptions = [
    { value: '1-minute', label: '1 Minute - $5.99' },
    { value: '5-days', label: '5 Days - $19.99' },
    { value: '10-days', label: '10 Days - $29.99' },
  ];

  const handleSubscriptionChange = (selectedOption) => {
    setSelectedSubscription(selectedOption);
  };

  return (
    <div>
      

      <div>
        <div className="my-4 w-[90%] lg:w-[40%] ">
          <label className="text-lg font-semibold">
            Choose Subscription Period:
          </label>
          <Select
            options={subscriptionOptions}
            value={selectedSubscription}
            onChange={handleSubscriptionChange}
            placeholder="Select a period..."
          />
        </div>

        
        <Link to='/payment'>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-md"
        >
          Subscribe
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SubscriptionOption;
