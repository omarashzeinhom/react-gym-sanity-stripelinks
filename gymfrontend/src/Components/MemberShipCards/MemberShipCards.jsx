import React, { useState, useEffect } from "react";
//MDB
import {
  MDBCard,
  MDBCardImage,
  MDBRipple,
  MDBCardTitle,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
  MDBCardLink,
  MDBCardSubTitle,
  MDBTooltip,
} from "mdb-react-ui-kit";
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
import { client, urlFor } from "../../../src/client";


const MemberShipCards = () => {
  const [membershipcards, setMemberShipCards] = useState([]);

  
  //TODO ADD PRODUCT TO CART IN REACT REDUX WITH GLOBAL PROPS
  
  const addProduct = function () {};


  useEffect(() => {
    const query = '*[_type== "membership"]';
    client.fetch(query).then((data) => setMemberShipCards(data));
  }, []);

  return (
    <MDBContainer fluid className="text-center bg-info">
      <MDBRow>
        <h3 className="text-white">
          Members<span className="text-warning"> Cards</span>
        </h3>

        {membershipcards.map((membershipcard, index) => (
          <MDBCol
            key={membershipcard + index}
            xs="12"
            sm="6"
            md="3"
            lg="3"
            xl="3"
          >
            <MDBCardLink href={membershipcard?.slug} className="link-info">
              {/**Takes user to a link with product link */}
              SLUG
            </MDBCardLink>

            <MDBCard
              className="shadow-5-strong bg-dark w-100 h-100"
              style={{ maxHeight: "50vh" }}
            >
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src={urlFor(membershipcard?.image)}
                  fluid
                  className="shadow-5-strong rounded w-100 h-100"
                  style={{ objectFit: "cover", maxHeight: "175rem" }}
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
                ></div>
                <MDBCardBody></MDBCardBody>
              </MDBRipple>
              <MDBCardFooter>
                <MDBCardTitle className="text-white rounded-5 py-2 px-1 shadow-5-strong">
                  <strong> {membershipcard.title}</strong>{" "}
                </MDBCardTitle>
                <small className="text-info shadow-5-strong py-3 rounded-5">
                  Description
                </small>
                <MDBTooltip tag='div' wrapperProps={{ href: '#' }} title={membershipcard?.description}>
                {membershipcard?.description.slice(0, 15) + "..."}
                  </MDBTooltip>
                <p className="text-white">
                  <em> </em>
                </p>

                <MDBCardSubTitle className="text-success shadow-5-strong rounded-5 bg-light">
                  <strong>{membershipcard?.price}</strong>
                </MDBCardSubTitle>

                {/**TODO: ADD PRODUCT TO CART use-shopping-cart */}
              </MDBCardFooter>
              <MDBBtn
                color="success"
                className="py-4"
                onClick={() => addProduct(membershipcard)}
              >
                Add to Cart
                <MDBIcon fas icon="cart-plus" />
              </MDBBtn>
           
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>

    
    </MDBContainer>
  );
};

export default MemberShipCards;
