import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavbarBrand,

} from "mdb-react-ui-kit";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const navLinks = ["#Home", "#About", "Contact", "MemberShip", "Classes"];

  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand
          href="/"
          className="mx-2 shadow-5-strong text-info"
          color="info"
        >
          JIMS GYM
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => setShowNav(!showNav)}>
          <MDBIcon
            fas
            icon="dumbbell"
            className="link-info mx-2 shadow-5-strong"
          />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            {navLinks.map((link, index) => (
              <MDBNavbarItem key={link + index}>
                <MDBNavbarLink
                  href={link}
                  className="text-info mx-2 shadow-3-strong"
                >
                  {link.replace("#", " ")}
                </MDBNavbarLink>
              </MDBNavbarItem>
            ))}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
      
    </MDBNavbar>
    
  );
};

export default Nav;

//REFERENCES
/***
 *
 * 1. [MDB-Colors](https://mdbootstrap.com/docs/react/content-styles/colors/)
 * 2. [Pankaj, 2022] (https://www.digitalocean.com/community/tutorials/java-remove-character-string )
 * 3. [MDB - NavBar](https://mdbootstrap.com/docs/react/navigation/navbar/)
 * 4. [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
 */
