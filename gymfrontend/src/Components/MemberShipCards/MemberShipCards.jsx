import React, { useState, useEffect } from "react";
//MDB
import {
  MDBCard,
  MDBCardImage,
  MDBRipple,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
  MDBCardLink,
} from "mdb-react-ui-kit";
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
import { client, urlFor } from "../../../src/client";

const MemberShipCards = () => {
  const [membershipcards, setMemberShipCards] = useState([]);

  useEffect(() => {
    const query = '*[_type== "membership"]';
    client.fetch(query).then((data) => setMemberShipCards(data));
  }, []);

  return (
    <MDBContainer fluid className="text-center">
      <MDBRow>
        <h5> MemberShipCards</h5>
        {membershipcards.map((membershipcard, index) => (
          <MDBCol key={membershipcard + index} size={4}>
            <a href={membershipcard?.slug}>
        {/**Takes user to a link with product link */}
          test
            </a>
            
            <MDBCard
              className="shadow-5-strong bg-dark w-100 h-75"
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
                  alt="..."
                  className="shadow-5-strong rounded w-100 h-100"
                  style={{ objectFit: "cover", maxHeight: "75rem" }}
                />
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle className="text-white">
                  <strong> {membershipcard.title}</strong>{" "}
                </MDBCardTitle>
                <MDBCardText className="text-dark">
                  <em> {membershipcard.description}</em>
                </MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <p className="text-success">{membershipcard?.price + "$" + membershipcard?.currency }</p>
{/**TODO: ADD PRODUCT TO CART use-shopping-cart */}
                <MDBBtn color="info" rounded outline className="py-2">
                  Add to Cart
                  <MDBIcon icon="cart" />
                </MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default MemberShipCards;
