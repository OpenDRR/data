import React from "react";
// import FooterLogo from "../images/wmms-blk.svg";

const Footer= () => (
  <footer id="wb-info">
    <div className="landscape">
		  <nav className="container wb-navcurr">
			  <h2 className="wb-inv">
			    <ul className="list-unstyled colcount-sm-2 colcount-md-3">
            <li><a href="https://www.canada.ca/en/contact.html">Contact us</a></li>
            <li><a href="https://www.canada.ca/en/government/dept.html">Departments and agencies</a></li>
            <li><a href="https://www.canada.ca/en/government/publicservice.html">Public service and military</a></li>
            <li><a href="https://www.canada.ca/en/news.html">News</a></li>
            <li><a href="https://www.canada.ca/en/government/system/laws.html">Treaties, laws and regulations</a></li>
            <li><a href="https://www.canada.ca/en/transparency/reporting.html">Government-wide reporting</a></li>
            <li><a href="https://pm.gc.ca/eng">Prime Minister</a></li>
            <li><a href="https://www.canada.ca/en/government/system.html">How government works</a></li>
            <li><a href="https://open.canada.ca/en/">Open government</a></li>
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
                    <li><a href="https://www.canada.ca/en/social.html">Social media</a></li>
                    <li><a href="https://www.canada.ca/en/mobile.html">Mobile applications</a></li>
                    <li><a href="https://www1.canada.ca/en/newsite.html">About Canada.ca</a></li>
                    <li><a href="https://www.canada.ca/en/transparency/terms.html">Terms and conditions</a></li>
                    <li><a href="https://www.canada.ca/en/transparency/privacy.html">Privacy</a></li>
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

export default Footer;





{/* <footer id="wb-info">
	<div class="landscape">
		<nav class="container wb-navcurr">
			<h2 class="wb-inv">About Government</h2>
			<ul class="list-unstyled colcount-sm-2 colcount-md-3">
	<li><a href="{{{i18n "menu-footer-about-contact-link"}}}">{{{i18n "menu-footer-about-contact-text"}}}</a></li>
	<li><a href="{{{i18n "menu-footer-about-departments-link"}}}">{{{i18n "menu-footer-about-departments-text"}}}</a></li>
	<li><a href="{{{i18n "menu-footer-about-military-link"}}}">{{{i18n "menu-footer-about-military-text"}}}</a></li>
	<li><a href="{{{i18n "menu-footer-about-news-link"}}}">{{{i18n "menu-footer-about-news-text"}}}</a></li>
	<li><a href="{{{i18n "menu-footer-about-treaties-link"}}}">{{{i18n "menu-footer-about-treaties-text"}}}</a></li>
	<li><a href="{{{i18n "menu-footer-about-reporting-link"}}}">{{{i18n "menu-footer-about-reporting-text"}}}</a></li>
	<li><a href="{{{i18n "menu-footer-about-pm-link"}}}">{{{i18n "menu-footer-about-pm-text"}}}</a></li>
	<li><a href="{{{i18n "menu-footer-about-government-link"}}}">{{{i18n "menu-footer-about-government-text"}}}</a></li>
	<li><a href="{{{i18n "menu-footer-about-open-link"}}}">{{{i18n "menu-footer-about-open-text"}}}</a></li>
</ul>
		</nav>
	</div>
	<div class="brand">
	<div class="container">
		<div class="row ">
			<nav class="col-md-9 col-lg-10 ftr-urlt-lnk">
				<h2 class="wb-inv">{{{i18n "tmpl-about-site"}}}</h2>
				<ul>
					<li><a href="{{{i18n "menu-footer-communications-social-link"}}}">{{{i18n "menu-footer-communications-social-text"}}}</a></li>
					<li><a href="{{{i18n "menu-footer-communications-mobile-link"}}}">{{{i18n "menu-footer-communications-mobile-text"}}}</a></li>
					<li><a href="{{{i18n "menu-footer-communications-about-link"}}}">{{{i18n "menu-footer-communications-about-text"}}}</a></li>
					<li><a href="{{{i18n "menu-footer-communications-terms-link"}}}">{{{i18n "menu-footer-communications-terms-text"}}}</a></li>
					<li><a href="{{{i18n "menu-footer-communications-privacy-link"}}}">{{{i18n "menu-footer-communications-privacy-text"}}}</a></li>
				</ul>
			</nav>
			<div class="col-xs-6 visible-sm visible-xs tofpg">
				<a href="#wb-cont">{{{i18n "tmpl-toppage"}}} <span class="glyphicon glyphicon-chevron-up"></span></a>
			</div>
			<div class="col-xs-6 col-md-3 col-lg-2 text-right">
				<img src="{{assets}}/../{{site.theme}}/assets/wmms-blk.svg" alt="{{{i18n "tmpl-gc-wmms"}}}" />
			</div>
		</div>
	</div>
</div>

</footer> */}



    {/* <div classNameName="landscape">






    </div>
    <div classNameName="brand">
      <div classNameName="container">
        <div classNameName="row">
          <nav classNameName="ccontainer wb-navcurr" style={{display: "flex"}}>
            <h2 classNameName="wb-inv">About This Site</h2>
            <ul classNameName="list-unstyled colcount-sm-2 colcount-md-3">
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
          <div classNameName="col-xs-6 col-md-3 col-lg-2 text-right">
            <img src={FooterLogo} alt="Symbol of the Government of Canada" />
          </div>
        </div>
      </div>
    </div> */}