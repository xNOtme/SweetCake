import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink as Link } from "react-router-dom";

const NavbarBrand = ({ className, href, ...attributes }) => {
  const classes = classNames("navbar-brand", className);
  const navbarBrand = () => {
    if(href) {
      return <Link to={href} {...attributes} className={classes} />;
    }
    else {
      return <div {...attributes} className={classes} />
    }
  }

  return navbarBrand();
}

NavbarBrand.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string
};

export default NavbarBrand;
export { NavbarBrand as MDBNavbarBrand };
