import { Flip, Slide, Zoom } from "react-awesome-reveal";
import SubscriptionOption from "./SubscriptionOption";

const Subscription = () => {
  return (
    <div className="my-10">
     <Flip>
     <h1 className="text-3xl text-center text-[#7B1FA2] my-4">Subscription</h1>
     </Flip>
    <Zoom>
    <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <img
              className="h-[70vh] w-full object-cover rounded-lg"
              src="https://i.ibb.co/L9rhT1t/subscribe.jpg"
              alt=""
            />
            <h2 className="text-center text-2xl md:text-6xl  font-bold absolute top-[40%] right-[7%] lg:right-[5%]">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
          </div>
        </div>
      </div>
    </Zoom>
      <Slide direction="right">
      <SubscriptionOption />
      </Slide>
    </div>
  );
};

export default Subscription;
