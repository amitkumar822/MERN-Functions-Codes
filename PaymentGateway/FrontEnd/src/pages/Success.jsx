import React from "react";
import { useSearchParams } from "react-router-dom";

const Success = () => {
  const [query] = useSearchParams();
  const transactionId = query.get("payment_id");

  return (
    <div className="text-center min-h-screen bg-pink-200 flex justify-center items-center text-2xl font-bold">
      <div>
        Success! Your payment was successful.
        <br /> Transaction ID: 
        <span className="text-green-500">{transactionId}</span>
      </div>
    </div>
  );
};

export default Success;
