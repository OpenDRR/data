import React from "react";
import { Link, graphql } from "gatsby";
import splash from '../images/sp-bg-2.jpg'

const IndexPage = () => (
  <div className="background">
    <img className="splash-image" src={splash} alt="splash-image" />
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
    {/* </div> */}
  </div>
  //   <div classNameName="splash">
  //     <div classNameName="container">
  //       <h1>OpenDRR Downloads</h1>

  //       <Link to="/en/en/">English</Link>
  //       <Link to="/fr/fr/">Français</Link>
  //     </div>
  //   </div>
);

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "../images/sp-bg-2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 3000, quality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
