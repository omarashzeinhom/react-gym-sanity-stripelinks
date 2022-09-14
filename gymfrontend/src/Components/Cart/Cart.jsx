//import getStripe from '../../getStripe';
import React, { useState, useEffect } from "react";
import Subtotal from "../SubTotal/SubTotal";
import CheckOutProduct from "../CheckOutProduct/CheckOutProduct";

import { useStateValue } from "../StateProvider/StateProvider";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Cart({ children }) {

  return (
    <MDBContainer fluid>
      <MDBRow>
        Welcome to your cart
        <MDBCol size={12}>
         
            <CheckOutProduct
              key={"key1"}
              id={"id1"}
              title={"test title"}
             
            />
        
        </MDBCol>
        <MDBCol size={12}>
          <Subtotal />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

//    //https://mdbootstrap.com/docs/react/components/dropdowns/#
