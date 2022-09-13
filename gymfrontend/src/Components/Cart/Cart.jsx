import {CartProvider} from "use-shopping-cart";
import getStripe from "../../../../backend/library/stripe/getStripe";

export default function Cart ({children}){
    return (
        <CartProvider mode="checkout-session" stripe={getStripe()} currency={"usd"}>
            {children}
        </CartProvider>
    )
}