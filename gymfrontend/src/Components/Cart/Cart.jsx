//import getStripe from '../../getStripe';
import { MDBContainer } from "mdb-react-ui-kit";

export default function Cart ({children}){
    return (
        <MDBContainer fluid>
            <h1>Cart</h1>
            {children}
        </MDBContainer>
  
    )
}