import React from "react";
import { Link } from "gatsby";

const HomeCardGridFR = () => {


  return (
    <>
    <div className="col-md-12">
    <h2>Voir les données</h2>
      <Link to="/fr/Ensembles-De-Données-Nationales">Ensembles De Données Nationales</Link>
      <div className="">
      <Link to="/fr/Provinces-et-Territoires">Provinces et Territoires </Link>
    </div>
   </div>
    </>
  );
};

export default HomeCardGridFR;
