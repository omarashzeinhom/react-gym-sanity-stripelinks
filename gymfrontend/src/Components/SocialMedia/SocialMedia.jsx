import React from 'react';
import './SocialMedia.scss';
import { MDBIcon } from 'mdb-react-ui-kit';

const SocialMedia = () => {
  return (
    <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div>
      <a href="www.facebook.com" className="me-4 text-reset">
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href="www.twitter.com" className="me-4 text-reset">
        <MDBIcon fab icon="twitter" />
      </a>
      <a href="www.google.com" className="me-4 text-reset">
        <MDBIcon fab icon="google" />
      </a>
      <a href="www.instagram.com" className="me-4 text-reset">
        <MDBIcon fab icon="instagram" />
      </a>
      <a href="www.linkedin.com" className="me-4 text-reset">
        <MDBIcon fab icon="linkedin" />
      </a>
      <a href="www.github.com" className="me-4 text-reset">
        <MDBIcon fab icon="github" />
      </a>
    </div>
  </div>
  )
}

export default SocialMedia