import {CartProvider} from "use-shopping-cart";
import getStripe from '../../getStripe';
import { MDBContainer } from "mdb-react-ui-kit";

export default function Cart ({children}){
    return (
        <MDBContainer fluid>
            <h1>Cart</h1>
      <CartProvider mode="checkout-session" stripe={getStripe()} currency={"usd"}>
            {children}
        </CartProvider>
        </MDBContainer>
  
    )
}