import React from 'react'
import {MDBBtn, MDBContainer, MDBInput, MDBInputGroup, MDBTextArea} from 'mdb-react-ui-kit';

const ContactForm = () => {
  return (
    <MDBContainer>
      <h1 className="text-info">Contact<span className='text-dark'>US!</span></h1>
      <MDBInputGroup>
        <MDBInput className='text' />
        <MDBInput className='text'/>
      </MDBInputGroup>
<MDBTextArea className='text' style={{ resize: "none" }}>

</MDBTextArea>
<MDBBtn className='py-3' color='info' rounded>
Message us!
</MDBBtn>
      </MDBContainer>
  )
}

export default ContactForm