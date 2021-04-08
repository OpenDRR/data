import React from "react";
import { Link } from "gatsby";
import LayoutFR from "../components/layoutFR";
const NationalDatasetsPage = () => {
  return (
    <LayoutFR>
      <div className="container">
        <div className="breadcrumb">
          <Link to="/fr/">Accueil</Link>
          <span> / Ensembles de données nationales </span>
        </div>
        <h1 id="wb-cont">National Datasets</h1>
        <section style={{ marginTop: "20vh", marginBottom: "20vh" }} id="NHSL">
          <h2>Couches nationales d'établissements humains</h2>
          <hr />
          <table className="table table-hover">
            <thead>
              <th>Name</th>
              <th>Last Updated</th>
              <th>Format</th>
            </thead>
            <tbody></tbody>
          </table>
        </section>
        <section style={{ marginTop: "20vh", marginBottom: "20vh" }} id="SR">
          <h2>Risque sismique</h2>
          <hr />
          <table className="table table-hover">
            <thead>
              <th>Nom</th>
              <th>Dernière mise à jour</th>
              <th>Format</th>
            </thead>
            <tbody></tbody>
          </table>
          <p>Bientôt disponible</p>
        </section>
        <section style={{ marginTop: "20vh", marginBottom: "20vh" }} id="ES">
          <h2>Scénarios de tremblement de terre</h2>
          <hr />
          <table className="table table-hover">
            <thead>
              <th>Nom</th>
              <th>Dernière mise à jour</th>
              <th>Format</th>
            </thead>
            <tbody></tbody>
          </table>
          <p>Bientôt disponible</p>
        </section>
      </div>
    </LayoutFR>
  );
};
export default NationalDatasetsPage;
