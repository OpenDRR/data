import React from "react";
// import { Link } from "gatsby"
import SEO from "../components/seo";
import Banner from "../components/Banner";
import HomeCardGrid from "../components/homeCardGrid/index.jsx";
import { SliderData } from "../../config/SliderData";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <div className="container">
      <h1>OpenDRR Downloads</h1>
      <p>
        Welcome to the OpenDRR data download site. Here you will find the latest
        versions of all datasets.
      </p>
      <p>
        These datasets are available for download by Province/Territory and by
        Economic Region.
      </p>

      <SEO title="Home" />
      <Banner slides={SliderData} />
      <HomeCardGrid />
    </div>
  </Layout>
);

export default IndexPage;
