import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../client";
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
} from "mdb-react-ui-kit";

const AboutCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const query = '*[_type== "abouts"]';
    client.fetch(query).then((data) => setCards(data));
  }, []);

  return (
    <MDBContainer fluid>
      <MDBRow>
        {cards.map((card, index) => (
          <MDBCol key={card + index}>
            <MDBCard
              className="shadow-5-strong bg-info w-100 h-75"
              style={{ maxHeight: "50vh" }}
            >
              <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image hover-overlay"
              >
                <MDBCardImage
                  src={urlFor(card?.aboutimg)}
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
                  <strong>{card?.title}</strong>{" "}
                </MDBCardTitle>
                <MDBCardText className="text-dark">
                  <em>{card?.description}</em>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutCards;
