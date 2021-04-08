import React from "react";
import NTMapComponent from "../svg/NT-Generalized.svg";
import YAMLData from "../../content/data/yaml/prov-terr.yaml";
import { Link } from "gatsby";
import { Accordion, Card, Button } from "react-bootstrap";
import LayoutFR from "../components/layoutFR";

const NorthwestTerritories = () => {
  return (
    <LayoutFR>
      <div className="container provincial-banner">
        <div className="breadcrumb">
          <Link to="/fr/Provinces-et-Territoires">
            Provinces et Territoires
          </Link>{" "}
          / Territories du Nord Ouest
        </div>
        <div className="provincial-data">
          <h1 id="wb-cont">{YAMLData.frNameNT}</h1>
        </div>
        <section className="gc-srvinfo col-md-3 pull-left">
          <ul>
            {YAMLData.enContentNT.map((data, index) => {
              return (
                <li key={`enContentNT_region_${index}`}>
                  <Link to={data.url}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="col-lg-9 col-s-4 pull-right">
          <img
            className="prov-map"
            src={NTMapComponent}
            alt="Economic Regions of Northwest Territories"
          />
        </section>
      </div>
      <section className="container">
        <div className="container">
          <h2>Ensembles de données au niveau provincial</h2>
          <table
            className="table table-hover"
            style={{
              marginTop: "5vh",
            }}
          >
            <thead>
              <tr>
              <th>Nom</th>
              <th>Date de modification</th>
              <th>Format</th>
              </tr>
            </thead>
            <tbody>
              {YAMLData.downloads.map((data, index) => {
                return (
                  <tr key={`downloads_${index}`}>
                    <td key={`downloads_file_title_${index}`}>{data.title}</td>
                    <td key={`downloads_file_lastUpdated_${index}`}>
                      {data.lastUpdated}
                    </td>
                    <td key={`downloads_file_format_${index}`}>
                      <span className="label label-default">{data.format}</span>
                    </td>
                    <td key={`downloads_file_url_${index}`}>
                      <a
                        className="btn btn-primary btn-sm pull-right"
                        href={data.url}
                        download
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <section className="container">
        <div className="container">
          <h2>Ensembles de données au niveau des régions économiques</h2>
          <Accordion
            defaultActiveKey="0"
            style={{
              marginBottom: "20vh",
              marginTop: "5vh",
            }}
          >
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Territories du Nord Ouest (6110)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                      <th>Nom</th>
                      <th>Date de modification</th>
                      <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads6110.map((data, index) => {
                        return (
                          <tr key={`downloads6110_${index}`}>
                            <td key={`downloads6110_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads6110_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads6110_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads6110_threat_url_${index}`}>
                            <Link
                        className="btn btn-primary btn-sm pull-right"
                        to={data.url}
                      >
                        Access
                      </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </section>
    </LayoutFR>
  );
};

export default NorthwestTerritories;
