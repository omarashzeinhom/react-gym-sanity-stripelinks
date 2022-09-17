import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  /**FIXED ERROR NO3 THE HREF LINK TO AVOID USERS GOING OUT OF PAGE */
  const navLinks = ["/#home", "/#about", "/contact", "/membership", "/classes"];
  return (
    <MDBNavbar expand="lg" dark bgColor="dark">
      <MDBContainer fluid>
        <MDBNavbarBrand
          href="/"
          className="mx-2 shadow-5-strong text-info"
          color="info"
        >
          OZ GYM
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={() => setShowNav(!showNav)}>
          💪
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            {navLinks.map((link, index) => (
              <MDBNavbarItem key={link + index}>
                <MDBNavbarLink
                  href={link}
                  className="text-info mx-2 shadow-3-strong"
                >
                  {link.replace("/", " ").replace("#", "").toLocaleUpperCase()}
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
