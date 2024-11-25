import React from "react";
import Cart from "../components/Cart";
import ProductData from "../api/productData.json";
import axios from "axios";
import { toast } from "react-toastify";

const Product = () => {
  const CheckoutHandle = async ({ productName, amount }) => {
    toast.info("Please wait...");
    try {
      const { data } = await axios.post(
        "/api/payment/checkout",
        { productName, amount },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // const options = {
      //   key: "rzp_test_e6zVRFhnIAZ4q9", // Enter the Key ID generated from the Dashboard
      //   amount: data?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      //   currency: data?.currency,
      //   name: "Acme Corp",
      //   description: "Test Transaction",
      //   image: "https://example.com/your_logo", //! LOGO
      //   order_id: data?.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      //   callback_url: "/api/payment/payment-verification",
      //   prefill: {
      //     name: "Amit Kumar",
      //     email: "ak7772100@gmail.com",
      //     contact: "82288843870",
      //   },
      //   notes: {
      //     address: "Razorpay Corporate Office",
      //   },
      //   theme: {
      //     color: "#3399cc",
      //   },
      // };

      // const rzp1 = new Razorpay(options);
      // rzp1.open();
      toast.success("Successfully your transaction");
      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to checkout. Please try again.");
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {ProductData.map((item, index) => (
              <Cart
                key={index}
                image={item.image}
                title={item.title}
                price={item.price}
                onCheckout={CheckoutHandle}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
