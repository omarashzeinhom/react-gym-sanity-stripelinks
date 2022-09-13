//import getStripe from '../../getStripe';
import React from "react";
import Subtotal from "../SubTotal/SubTotal";
import CheckOutProduct from "../CheckOutProduct/CheckOutProduct";
import { useStateValue } from "../StateProvider/StateProvider";

export default function Cart ({children}){
  const [{ cart}] = useStateValue();
    const items = ["Product 1", "Product 2", "Product 3", "Product 4"];
    //https://mdbootstrap.com/docs/react/components/dropdowns/#
    return (
       <>
        <div className="checkout__billboard">
      <img
        className="checkout__ad"
        src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1652438966/theshop/checkout_ad_rqcgvh.webp"
        alt="checkoutad"
        loading="lazy"
      />

      <div className="checkout__title">
        <h2>
          Welcome to your cart
          <br />
        </h2>
      </div>

      <div className="checkout">
        <div className="checkout__left">
          {cart.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
    </>
  
    )
}