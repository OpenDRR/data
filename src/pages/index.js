import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <div className="background">
    <StaticImage className="splash-image" src="../images/sp-bg-2.jpg" alt="splash-image" />
    <div className="container landing-content">
      <h1 className="wb-inv">
        Language selection - Web Experience Toolkit /{" "}
        <span lang="fr">
          Sélection de la langue - Boîte à outils de l’expérience Web
        </span>
      </h1>

      <section className="col-md-6">
        <h2 className="h3 text-center">OpenDRR Downloads</h2>
        <ul className="list-unstyled">
          <li>
            <Link
              className="btn btn-lg btn-primary btn-block"
              style={{ color: "white" }}
              to="/en/"
            >
              English
            </Link>
          </li>
          <li>
            <a
              className="btn btn-lg btn-default btn-block mrgn-tp-sm"
              href="https://www.canada.ca/en/transparency/terms.html"
              rel="license"
            >
              Terms and conditions of use
            </a>
          </li>
        </ul>
      </section>

      <section className="col-md-6" lang="fr">
        <h2 className="h3 text-center">Téléchargements OpenDRR</h2>
        <ul className="list-unstyled">
          <li>
            <Link
              className="btn btn-lg btn-primary btn-block"
              style={{ color: "white" }}
              to="/fr/"
            >
              Français
            </Link>
          </li>
          <li>
            <a
              className="btn btn-lg btn-default btn-block mrgn-tp-sm"
              href="https://www.canada.ca/fr/transparence/avis.html"
              rel="license"
            >
              Avis
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
);

export default IndexPage;