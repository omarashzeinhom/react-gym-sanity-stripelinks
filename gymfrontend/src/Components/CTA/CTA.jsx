import {
  MDBBtn,
  MDBBtnGroup,
  MDBContainer,
  MDBRipple,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import React from "react";
import "./CTA.scss";

const CTA = () => {
  return (
    <>
      <MDBContainer fluid className="bg-info text-center py-2">
        <MDBBtnGroup className="z-index bg-info w-100 rounded-5 shadow-5-strong">
        <MDBRipple fluid className="w-100" rippleColor="light">
          <MDBRow>
            <MDBCol size="6">
              <MDBBtn
                href="/Contact"
                outline
                rounded
                color="dark"
                className="mx-2 w-100"
              >
                {" "}
                Contact
              </MDBBtn>
            </MDBCol>
            <MDBCol size="6">
              <MDBBtn
                href="/MemberShip"
                outline
                rounded
                color="light"
                className="mx-2 w-100"
              >
                Join US
              </MDBBtn>
            </MDBCol>
          </MDBRow>
          </MDBRipple>
        </MDBBtnGroup>
        
      </MDBContainer>
    </>
  );
};

export default CTA;
