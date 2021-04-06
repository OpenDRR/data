import React from "react";
// import { Link } from "gatsby"
import SEO from "../components/seo";
import Banner from "../components/Banner";
import HomeCardGrid from "../components/homeCardGrid/index.jsx";
import { SliderData } from "../../config/SliderData";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
const IndexPage = () => (
  <Layout>
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
      <Banner slides={SliderData} />
      <HomeCardGrid />
    </div>
  </Layout>
);

export default IndexPage;
