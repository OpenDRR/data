import React from "react";
import FooterLogo from "../images/wmms-blk.svg";

const Footer = () => (
  <footer id="wb-info">
    <div className="landscape"></div>
    <div className="brand">
      <div className="container">
        <div className="row">
          <nav className="col-md-9 col-lg-10 ftr-urlt-lnk" style={{display: "flex"}}>
            <h2 className="wb-inv">About This Site</h2>
            <ul>
               <li>
                <a href="https://www.canada.ca/en/social.html">Social media </a>
              </li>
              <li>
                <a href="https://www.canada.ca/en/mobile.html">Mobile applications</a>
              </li>
              <li>
                <a href="https://www1.canada.ca/en/newsite.html">About Canada.ca</a>
              </li>
              <li>
                <a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a>
              </li>
              <li>
                <a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a>
              </li>
            </ul>
          </nav>
          <div className="col-xs-6 col-md-3 col-lg-2 text-right">
            <img src={FooterLogo} alt="Symbol of the Government of Canada" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
