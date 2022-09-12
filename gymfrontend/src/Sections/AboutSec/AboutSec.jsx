import { MDBContainer } from "mdb-react-ui-kit";
import { AboutBrands, AboutCards, AboutMap } from "../../Components/index";
const AboutSec = () => {
  return (
    <section id="About" className="section  text-center py-1 w-100 bg-info">
     <MDBContainer fluid className="bg-dark">
     <h1 className="text-white">
        <strong>
        About<span className="text-info">Us</span>
        </strong>
      </h1>
      <AboutBrands />
      <AboutMap/>
      <AboutCards />
     </MDBContainer>
   

    </section>
  );
};

export default AboutSec;

/**
 * REFERENCES
 * https://mdbootstrap.com/docs/react/navigation/tabs/
 * https://mdbootstrap.com/docs/react/layout/breakpoints/
 *
 */
