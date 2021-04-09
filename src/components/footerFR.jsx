import React from "react";
// import FooterLogo from "../images/wmms-blk.svg";

const FooterFR = () => (
  <footer id="wb-info">
    <div className="landscape">
		  <nav className="container wb-navcurr">
			  <h2 className="wb-inv">
			    <ul className="list-unstyled colcount-sm-2 colcount-md-3">
            <li><a href="https://www.canada.ca/fr/contact.html">Contactez-nous</a></li>
            <li><a href="https://www.canada.ca/fr/gouvernement/min.html">Ministères et organismes</a></li>
            <li><a href="https://www.canada.ca/fr/gouvernement/fonctionpublique.html">Fonction publique et force militaire</a></li>
            <li><a href="https://www.canada.ca/fr/nouvelles.html">Nouvelles</a></li>
            <li><a href="https://www.canada.ca/fr/gouvernement/systeme/lois.html">Traités, lois et règlements</a></li>
            <li><a href="https://www.canada.ca/fr/transparence/rapports.html">Rapports à l'échelle du gouvernement</a></li>
            <li><a href="https://pm.gc.ca/fra">Premier ministre</a></li>
            <li><a href="https://www.canada.ca/fr/gouvernement/systeme.html">Comment le gouvernement fonctionne</a></li>
            <li><a href="https://ouvert.canada.ca/">Gouvernement ouvert</a></li>
          </ul>
          </h2>
              </nav>
            </div>
            <div className="brand">
            <div className="container">
              <div className="row ">
                <nav className="col-md-9 col-lg-10 ftr-urlt-lnk">
                  <h2 className="wb-inv">About this site</h2>
                  <ul>
                    <li><a href="https://www.canada.ca/fr/sociaux.html">Médias sociaux</a></li>
                    <li><a href="https://www.canada.ca/fr/mobile.html">Applications mobiles</a></li>
                    <li><a href="https://www1.canada.ca/fr/nouveausite.html">À propos de Canada.ca</a></li>
                    <li><a href="https://www.canada.ca/fr/transparence/avis.html">Avis</a></li>
                    <li><a href="https://www.canada.ca/fr/transparence/confidentialite.html">Confidentialité</a></li>
                  </ul>
                </nav>
                <div className="col-xs-6 visible-sm visible-xs tofpg">
                  <a href="#wb-cont">Top of Page <span className="glyphicon glyphicon-chevron-up"></span></a>
                </div>
                <div className="col-xs-6 col-md-3 col-lg-2 text-right">
                  <img src="https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/assets/wmms-blk.svg" alt="Symbol of the Government of Canada"/>
                </div>
              </div>
            </div>
          </div>
  </footer>
);

export default FooterFR;