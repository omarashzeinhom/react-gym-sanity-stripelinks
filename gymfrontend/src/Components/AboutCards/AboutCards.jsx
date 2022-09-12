import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBRipple,
  MDBCardTitle,
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

const AboutCards = () => {
  return (
    <MDBContainer fluid className="bg-dark">
      <MDBRow>
        <MDBCol lg="4" sm="6" md="6" xl="4">
          <MDBCard className="bg-info shadow-5-strong">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                fluid
                alt="..."
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle className="text-white">Card title</MDBCardTitle>
              <MDBCardText className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" sm="6" md="6" xl="4">
          <MDBCard className="bg-info shadow-5-strong">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                fluid
                alt="..."
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle className="text-white">Card title</MDBCardTitle>
              <MDBCardText className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" sm="6" md="6" xl="4">
          <MDBCard className="bg-info shadow-5-strong">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage
                src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                fluid
                alt="..."
              />
              <a>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle className="text-white">Card title</MDBCardTitle>
              <MDBCardText className="text-white">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutCards;
