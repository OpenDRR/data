import React from "react";
import PropTypes from "prop-types";
import HeaderFR from "./headerFR";
import FooterFR from "./footerFR";
import "../styles/index.scss";

const LayoutFR = ({ children }) => {
  return (
    <>
      <HeaderFR />
      {children}
      <FooterFR />
    </>
  );
};

LayoutFR.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutFR;
