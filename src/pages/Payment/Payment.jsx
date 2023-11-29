import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";




const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    return (
        <div className="my-10">
          <h1 className="text-3xl text-[#6D28D9] font-medium text-center">Payment Now.</h1>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;