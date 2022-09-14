import React from "react";

export default function CheckoutProduct({  }) {

  const deletefromCart = () => {
   
  };

  return (
    <div>
      <img
        src={""}
        alt="checkoutproduct_img"
      />
           {""}
          <small>$</small>
          <strong>{""}</strong>


          
        <button onClick={deletefromCart} className="checkoutProduct__button">
          Remove from cart
        </button>
      </div>
  );
}

