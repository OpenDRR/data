import React from "react";
import FooterLogo from "../images/wmms-blk.svg";

const FooterFR = () => (
  <div className="container Footer wb-info brand">
    <hr />
    <ul className="footer-ul">
      <li className="footer-li">
        <a href="https://www.canada.ca/fr/sociaux.html">Médias sociaux</a>
      </li>
      <li className="footer-li">
        <a href="https://www.canada.ca/fr/mobile.html">Applications mobiles</a>
      </li>
      <li className="footer-li">
        <a href="https://www.canada.ca/fr/gouvernement/a-propos.html">À propos de Canada.ca</a>
      </li>
      <li className="footer-li">
        <a href="https://www.canada.ca/fr/transparence/avis.html">
         Avis
        </a>
      </li>
      <li className="footer-li">
        <a href="https://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a>
      </li>
    </ul>
    <div className="col-md-2 pull-right">
        <img src={FooterLogo} alt="Symbol of the Government of Canada" />
    </div>
  </div>
);

export default FooterFR;
