import React, { Component } from "react"
import Logo from "../images/sig-blk-en.svg"
import { Link } from 'gatsby'


class HeaderFR extends Component {
  render() {
    return (
      <div className="container header navbar navbar-default">
        <a href="/">
          <img className="navbar-brand" src={Logo} alt="logo" />
        </a>
        <div className="lang-toggle">
          <Link to="/en/">English</Link>
        </div>
      </div>
    );
  }
}

export default HeaderFR
