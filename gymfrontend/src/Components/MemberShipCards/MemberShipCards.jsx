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
  MDBCardGroup,
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
        <h5 className="text-dark">
          {" "}
          MemberShip <span className="text-info">Cards</span>
        </h5>

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
                  alt="membershipcardImg"
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
                <MDBCardTitle className="text-warning">
                  <strong> {membershipcard.title}</strong>{" "}
                </MDBCardTitle>
                <MDBCardText>
                  <small className="text-info">Description</small>
                  <p className="text-white">
                    <em> {membershipcard?.description.slice(0, 10) + "..."}</em>
                  </p>
                </MDBCardText>

                <p className="text-success">
                  {membershipcard?.price + "$" + membershipcard?.currency}
                </p>
                {/**TODO: ADD PRODUCT TO CART use-shopping-cart */}
               
              </MDBCardFooter>
              <MDBBtn color="success" className="py-4">
                  Add to Cart
                  <MDBIcon icon="cart" />
                </MDBBtn>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default MemberShipCards;
