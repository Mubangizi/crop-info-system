import { Container } from "@material-ui/core";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/c-logo.jpg";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <Container>
        <Link to="/">
          <div className="HeaderLogo">
            <img src={Logo} alt="" />
            <p>Urban Crop System</p>
          </div>
        </Link>
        <div className="NavItems">
          <NavLink to={{ pathname: `/` }} exact={true}>
            Home
          </NavLink>
          <NavLink to={{ pathname: `/about` }}>About</NavLink>
          <NavLink to={{ pathname: `/services` }}>Services</NavLink>
          <NavLink to={{ pathname: `/team` }}>Team</NavLink>
          <NavLink to={{ pathname: `/contact` }}>Contact</NavLink>
        </div>
      </Container>
    </div>
  );
};

export default Header;
