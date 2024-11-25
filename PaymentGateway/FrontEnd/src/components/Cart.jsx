import React from "react";

const Cart = ({ price, image, title, onCheckout }) => {
  return (
    <>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={image}
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {title}
            </h1>
            <p className="py-2 text-3xl font-bold text-black">
              &#8377; {price}
            </p>
            <div className="flex items-center flex-wrap ">
              <button
                onClick={() =>
                  onCheckout({ productName: title, amount: price })
                }
                className="bg-blue-600 text-white w-full py-2 text-2xl font-semibold"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
