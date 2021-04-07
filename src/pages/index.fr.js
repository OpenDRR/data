import React from "react";
// import { Link } from "gatsby"
import SEO from "../components/seo";
import Banner from "../components/Banner";
import HomeCardGridFR from "../components/HomeCardGridFR/index.jsx";
import { SliderDataFR } from "../../config/SliderData";
import { Helmet } from "react-helmet";
import LayoutFR from "../components/layoutFR";
const IndexPage = () => (
  <LayoutFR>
    <div className="container">
      <Helmet>
        <html lang="fr"></html>
      </Helmet>
      <h1>Téléchargements OpenDRR</h1>
      <p>
        Bienvenue sur le site de téléchargement des données OpenDRR. Vous
        trouverez ici les dernières versions de tous les ensembles de données.
      </p>
      <p>
        Ces jeux de données peuvent être téléchargés par province/territoire et
        par région économique.
      </p>

      <SEO title="Accueil" />
      <Banner slides={SliderDataFR} />
      <HomeCardGridFR />
    </div>
  </LayoutFR>
);

export default IndexPage;
