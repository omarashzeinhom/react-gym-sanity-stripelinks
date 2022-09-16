import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBInputGroup,
  MDBTextArea,
} from "mdb-react-ui-kit";

const ContactForm = () => {
  return (
    <MDBContainer className="text-center  rounded-5 shadow-strong">
      <h1 className="text-info">
        Contact <span className="text-dark">Us!</span>
      </h1>
      <div
        className="p-2 text-center bg-image rounded-5 shadow-5-strong"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/du9aympvd/image/upload/v1663303530/code/js/gym%20fullstack%20company%20portfolio/ContactForm/undraw_contact_us_re_4qqt_1_eyyrd0.svg')",
          height: 370,
          objectFit: "cover",
        }}
        loading="lazy"
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Send us your</h1>
              <h4 className="mb-3">Questions?</h4>
            </div>
          </div>
        </div>
      </div>
      <form className="py-5" action="">
        <label className="text-dark">Name</label>
        <MDBInput className="text" placeholder="Name" />
        <label className="text-dark">Email</label>
        <MDBInput className="text" placeholder="Email" />
        <label className="text-dark">Message</label>
        <MDBTextArea className="text" style={{ resize: "none" }}></MDBTextArea>
        <hr className="py-1" />
        <MDBBtn
          className="py-3"
          color="info"
          rounded
          type="submit"
          placeholder="Enter Inquiry Here"
        >
          Message us!
        </MDBBtn>
      </form>
    </MDBContainer>
  );
};

export default ContactForm;
