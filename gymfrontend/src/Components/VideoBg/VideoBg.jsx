import { MDBContainer, MDBRipple } from "mdb-react-ui-kit";
import "./VideoBg.scss";

const VideoBg = () => {
  const videoSrc =
    "https://res.cloudinary.com/du9aympvd/video/upload/v1662833890/code/js/gym%20fullstack%20company%20portfolio/VideoBg/pexels-tima-miroshnichenko-6389060_1_yev0lg.webm";
  return (
    <MDBContainer className="shadow-5-strong bg-info py-2" fluid>
      <MDBRipple fluid className="w-100">
      <video
        playsInline={true}
        controls={false}
        autoPlay={true}
        loop={true}
        className="app__video-Bg"
        loading="lazy"
      >
        <source src={videoSrc} type="video/webm" />
      </video>
      </MDBRipple>
   
    </MDBContainer>
  );
};

export default VideoBg;

/**
 * STEPS
 * 1. Create New Component Called CTA
 * 2. Add Components To Home Section
 * 3. Add HomeSection To HomePage
 *
 * REFERENCES
 * https://mdbootstrap.com/snippets/standard/mdbootstrap/2515523
 * https://mdbootstrap.com/docs/react/utilities/ratio/
 * https://mdbootstrap.com/docs/react/components/buttons/
 * https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp
 *
 * Video by Tima Miroshnichenko: https://www.pexels.com/video/man-using-jump-rope-6389060/
 * https://www.freeconvert.com/video-compressor
 * https://cloudconvert.com/mp4-to-webm
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 */
