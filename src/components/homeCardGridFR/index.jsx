import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const HomeCardGrid = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       markdownRemark {
//         frontmatter {
//           title
//           slug
//           date
//         }
//         id
//       }
//     }
//   `);

  return (
    <>
    <div className="col-md-12">
    <h2>Voir les données</h2>
      <Link to="/fr/Ensembles-De-Données-Nationales">Ensembles De Données Nationales</Link>
      <div className="">
      <Link to="/fr/Provinces-et-Territoires">Provinces et Territoires </Link>
    </div>
   </div>
    {/* <div className="col-md-12 LNU">
      <h2>Latest News & Updates</h2>
      <Link to={data.markdownRemark.frontmatter.slug}>
        <p>{data.markdownRemark.frontmatter.title}</p>
      </Link>
    </div> */}
    </>
  );
};

export default HomeCardGrid;
