import {
    MDBBtn,
    MDBBtnGroup,
    MDBContainer,
    MDBRipple,
    MDBRow,
    MDBCol,
  } from "mdb-react-ui-kit";
  import React from "react";
  
  const CTA = () => {
    const mouseSVG =
      "https://res.cloudinary.com/du9aympvd/image/upload/v1662851528/code/js/gym%20fullstack%20company%20portfolio/CTA/mouse-1_qsp8pg.svg";
    return (
      <>
        <MDBContainer fluid className="bg-dark text-center py-2 ">
          <MDBBtnGroup className="bg-dark w-100 rounded-5 shadow-5-strong hover-overlay ">
            <MDBRipple
              fluid
              className="w-100"
              rippleColor="light"
              rippleTag="div"
            >
              <MDBRow>
                <MDBCol size="4">
                  <MDBBtn
                    href="/Contact"
                    outline
                    rounded
                    color="info"
                    className="mx-2 w-75 "
                  >
                    {" "}
                    Contact
                  </MDBBtn>
                </MDBCol>
                <MDBCol size="4">
                  <MDBBtn
                    href="#About"
                    outline
                    rounded
                    color="success"
                    className="mx-2 w-75"
                  >
                    <img
                      src={mouseSVG}
                      width="25px"
                      height="25px"
                      alt="mousesvg"
                    />
                  </MDBBtn>
                </MDBCol>
                <MDBCol size="4">
                  <MDBBtn
                    href="/MemberShip"
                    outline
                    rounded
                    color="light"
                    className="mx-2 w-75"
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
  