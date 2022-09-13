//import getStripe from '../../getStripe';
import { MDBContainer,MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useState } from "react";
export default function Cart ({children}){
  
    const items = ["Product 1", "Product 2", "Product 3", "Product 4"];
    //https://mdbootstrap.com/docs/react/components/dropdowns/#
    return (
       <>
        <MDBContainer fluid>
            <h1>Cart</h1>
            {children}
        

      <MDBDropdown dropleft group>
        <MDBBtn>Checkout</MDBBtn>
        <MDBDropdownToggle 
        
        >
            <MDBIcon icon="shopping-cart"/>
            </MDBDropdownToggle>
        <MDBDropdownMenu dark>
          {items.map((item, index)=> 
          <MDBDropdownItem link key={item + index}><p>
            {item}</p>
          <MDBBtn className="" color="danger" outline><MDBIcon fas icon="minus" /></MDBBtn>
          </MDBDropdownItem>
          )}
         
        </MDBDropdownMenu>
      </MDBDropdown>
      </MDBContainer>

    </>
  
    )
}