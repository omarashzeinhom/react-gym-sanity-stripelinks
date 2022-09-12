import { AboutBrands, AboutCards, AboutMap } from "../../Components/index";
const AboutSec = () => {
  return (
    <section id="About" className="section  text-center py-1 w-100">
      <h1 className="text-white">
        <strong>
        About<span className="text-info">Us</span>
        </strong>
      </h1>
      <AboutBrands />
      <AboutMap/>
      <AboutCards />

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
