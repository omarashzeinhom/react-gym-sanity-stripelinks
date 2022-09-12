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

import { client, urlFor } from "../../client";
import { useEffect, useState } from "react";

const AboutCards = () => {
  const [cards, setCards]= useState([]);


  useEffect(()=>{
    const query = '*[_type== "abouts"]';

    client.fetch(query).then((data) => setCards(data));
  },[])



  











  return (
    <MDBContainer fluid className="bg-dark ">
      <MDBRow>
        {cards.map((card,index)=> 
        <MDBCol lg="3" sm="6" md="6" xl="3">
        <MDBCard className="bg-info shadow-5-strong" key={card+index}>
          <MDBRipple
            rippleColor="light"
            rippleTag="div"
            className="bg-image hover-overlay"
          >
            <MDBCardImage
              src={urlFor(card.aboutimage)}
              fluid
              alt="..."
              className=""
            />
            <a>
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
              ></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle className="text-white"> {card.title}</MDBCardTitle>
            <MDBCardText className="text-white">
             {card.description}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
  
        
        )}
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutCards;