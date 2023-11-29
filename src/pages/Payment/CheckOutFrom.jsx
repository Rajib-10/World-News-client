import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {  useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure"
import useAuth from "../../Hook/useAuth";


import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
  const [clientSecret,setClientSecret] = useState('')
  const [error,setError] = useState('')
  const [transactionId,setTransactionId] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  
  const navigate = useNavigate()
 


  useEffect(()=>{
   
    axiosSecure.post('/create-payment-intent',{price: 10})
   .then(res=>{
    setClientSecret(res.data.clientSecret)
    console.log("payment secret",res.data)
    console.log(res.data.clientSecret)
   })
   
  },[axiosSecure])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error ,paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card
    })
    if (error) {
        console.log('[error]', error);
        setError(error.message)
      } 
      else {
        console.log('[PaymentMethod]', paymentMethod);
        setError('')
      }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,{
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "anonymous",
          email: user?.email || "anonymous"
        }
      }
    })

    if(confirmError){
      console.log("confirm error",confirmError)
    }
    else{
      console.log("confirm paymentIntent",paymentIntent)
      if(paymentIntent.status==="succeeded"){
        console.log("Transaction id",paymentIntent.id)
        setTransactionId(paymentIntent.id)

        const payment = {
          email: user?.email,
          price: 10,
          date: new Date(),
          cartIds: 2,
          menuItemIds: 1,
          transactionId: paymentIntent.id,
          status: "pending"
        }

        const res = await axiosSecure.post('/payments',payment)
        console.log("payment save",res.data)
        navigate("/dashboard/paymentHistory")

      }
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
      className="w-[50%] mx-auto mt-20"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
     <div className="ml-80">
     <button className="p-2 bg-violet-700 text-white my-4 rounded-lg" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
     </div>
      <p className="text-red-600">{error}</p>
      {transactionId && <p className="text-green-600">Your Transaction Id: {transactionId}</p> }
    </form>
  );
};

export default CheckOutForm;