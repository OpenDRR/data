import React from "react";
import YKMapComponent from "../svg/YK-Generalized.svg";
import YAMLData from "../../content/data/yaml/prov-terr.yaml";
import { Link } from "gatsby";
import { Accordion, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";

const Yukon = () => {
  return (
    <Layout>
      <div className="container provincial-banner">
        <div className="breadcrumb">
        <Link to="/fr/Provinces-et-Territoires">
            Provinces et Territoires
          </Link>{" "}
          / Yukon
        </div>
        <div className="provincial-data">
          <h1 id="wb-cont">{YAMLData.enNameYK}</h1>
        </div>
        <section className="gc-srvinfo col-md-3 pull-left">
          <ul>
            {YAMLData.enContentYK.map((data, index) => {
              return (
                <li key={`enContentYK_region_${index}`}>
                  <Link to={data.url}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="col-lg-9 col-s-4 pull-right">
          <img
            className="prov-map"
            src={YKMapComponent}
            alt="Economic Regions of Alberta Map"
          />
        </section>
      </div>
      <section className="container">
        <div>
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
                        Accès
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
                  Yukon (6010)
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
                      {YAMLData.downloads6010.map((data, index) => {
                        return (
                          <tr key={`downloads6010_${index}`}>
                            <td key={`downloads6010_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads6010_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads6010_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads6010_threat_url_${index}`}>
                            <Link
                        className="btn btn-primary btn-sm pull-right"
                        to={data.url}
                      >
                        Accès
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
    </Layout>
  );
};

export default Yukon;
