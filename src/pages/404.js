import React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout>
    <div className="container">
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
    </div>
  </Layout>
);

export default NotFoundPage;
