import React,{useState} from 'react'
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBIcon } from 'mdb-react-ui-kit';

const AboutSec = () => {
  const [activeIcon, setActiveIcon] = useState("tab1");

  const handleIconClick = (value) => {
    if(value === activeIcon){
      return;
    }
    setActiveIcon(value);
  }
  
  return (
    <section id='About'>
      <h1>About </h1>

      <MDBTabs>
  <MDBTabsItem>
    <MDBTabsLink>
      Contact Us
      <MDBIcon onClick={handleIconClick("tab1")} icon="phone"/>
    </MDBTabsLink>
  </MDBTabsItem>
  <MDBTabsItem>
    <MDBTabsLink>
      Contact Us
      <MDBIcon onClick={handleIconClick("tab1")} icon="phone"/>
    </MDBTabsLink>
  </MDBTabsItem>
  <MDBTabsItem>
    <MDBTabsLink>
      Contact Us
      <MDBIcon onClick={handleIconClick("tab1")} icon="phone"/>
    </MDBTabsLink>
  </MDBTabsItem>
</MDBTabs>



      </section>
  )
}

export default AboutSec;

/**
 * REFERENCES
 * https://mdbootstrap.com/docs/react/navigation/tabs/
 */