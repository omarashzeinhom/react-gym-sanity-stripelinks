import { AboutBrands, AboutCards } from "../../Components/index";
const AboutSec = () => {
  
  
  return (
    <section id='About' className='section bg-dark'>
<h1 className="text-white">Ab<span className='text-info'>out</span> </h1>

<AboutBrands/>

<AboutCards/>


      </section>
  )
}

export default AboutSec;

/**
 * REFERENCES
 * https://mdbootstrap.com/docs/react/navigation/tabs/
 * https://mdbootstrap.com/docs/react/layout/breakpoints/
 * 
 */