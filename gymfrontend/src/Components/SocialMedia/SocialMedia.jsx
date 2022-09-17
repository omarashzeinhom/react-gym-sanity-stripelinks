import React from "react";
import "./SocialMedia.scss";
import { MDBIcon } from "mdb-react-ui-kit";

const SocialMedia = () => {
  return (
    <div className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        {socialMedia.map((social, index) => (
          <a key={social + index}
            href={social?.link}
            className="me-4 text-reset"
            target="_blank"
            rel="noreferrer"
          >
            <MDBIcon fab icon={social?.icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;

const socialMedia = [
  {
    icon: "facebook-f",
    link: "https://www.facebook.com",
  },
  {
    icon: "twitter",
    link: "https://www.twitter.com",
  },
  {
    icon: "google",
    link: "https://www.google.com",
  },
  {
    icon: "linkedin",
    link: "https://www.linkedin.com",
  },
  {
    icon: "github",
    link: "https://www.github.com",
  },
  {
    icon: "instagram",
    link: "https://www.instagram.com",
  },
];
