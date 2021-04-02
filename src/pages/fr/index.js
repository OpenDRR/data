import React from "react";
// import { Link } from "gatsby"
import SEO from "../../components/seo";
import Banner from "../../components/Banner";
import HomeCardGrid from "../../components/homeCardGrid/index.jsx";
import { SliderData } from "../../../config/SliderData";
import { Helmet } from "react-helmet";

const IndexPage = () => (
  <div className="container">
    <Helmet>
      <html lang="fr"></html>
    </Helmet>
    <SEO title="Accueil" />
    <Banner slides={SliderData} />
    <HomeCardGrid />
  </div>
);

export default IndexPage;
