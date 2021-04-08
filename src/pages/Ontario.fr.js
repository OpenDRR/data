import React from "react";
import ONMapComponent from "../svg/ON-Generalized.svg";
import YAMLData from "../../content/data/yaml/prov-terr.yaml";
import { Link } from "gatsby";
import { Accordion, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";

const Ontario = () => {
  return (
    <Layout>
      <div className="container provincial-banner">
        <div className="breadcrumb">
          <Link to="/fr/Provinces-et-Territoires">
            Provinces et Territoires
          </Link>{" "}
          / Ontario
        </div>
        <div className="provincial-data">
          <h1 id="wb-cont">{YAMLData.frNameON}</h1>
        </div>
        <section className="gc-srvinfo col-md-3 pull-left">
          <ul>
            {YAMLData.enContentON.map((data, index) => {
              return (
                <li key={`enContentON_region_${index}`}>
                  <Link to={data.url}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="col-lg-9 col-s-4 pull-right">
          <img
            className="prov-map"
            src={ONMapComponent}
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
                  Ottawa (3510)
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
                      {YAMLData.downloads3510.map((data, index) => {
                        return (
                          <tr key={`downloads3510_${index}`}>
                            <td key={`downloads3510_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads3510_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads3510_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads3510_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Kingston Pembroke (3515)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
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
                      {YAMLData.downloads3515.map((data, index) => {
                        return (
                          <tr key={`downloads3515_${index}`}>
                            <td key={`downloads3515_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads3515_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads3515_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads3515_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Muskoka Kawarthas (3520)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
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
                      {YAMLData.downloads3520.map((data, index) => {
                        return (
                          <tr key={`downloads3520_${index}`}>
                            <td key={`downloads3520_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads3520_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads3520_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads3520_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Toronto (3530)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
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
                      {YAMLData.downloads3530.map((data, index) => {
                        return (
                          <tr key={`downloads3530_${index}`}>
                            <td key={`downloads3530_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads3530_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads3530_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads3530_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Kitchener Waterloo Barrie (3540)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
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
                      {YAMLData.downloads3540.map((data, index) => {
                        return (
                          <tr key={`downloads3540_${index}`}>
                            <td key={`downloads3540_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads3540_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads3540_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads3540_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Hamilton Niagra Peninsula (3550)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
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
                      {YAMLData.downloads3550.map((data, index) => {
                        return (
                          <tr key={`downloads3550_${index}`}>
                            <td key={`downloads3550_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads3550_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads3550_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads3550_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                  London (3560)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
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
                      {YAMLData.downloads3560.map((data, index) => {
                        return (
                          <tr key={`downloads3560_${index}`}>
                            <td key={`downloads3560_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads3560_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads3560_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads3560_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                  Windsor Sarnia (3570)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
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
                      {YAMLData.downloads3570.map((data, index) => {
                        return (
                          <tr key={`downloads3570_${index}`}>
                            <td key={`downloads3570_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads3570_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads3570_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads3570_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="8">
                  Stratford Bruce Peninsula (3580)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="8">
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
                      {YAMLData.downloads3580.map((data, index) => {
                        return (
                          <tr key={`downloads3580_${index}`}>
                            <td key={`downloads3580_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads3580_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads3580_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads3580_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="9">
                  Nord Est (3590)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="9">
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
                      {YAMLData.downloads3590.map((data, index) => {
                        return (
                          <tr key={`downloads3590_${index}`}>
                            <td key={`downloads3590_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads3590_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads3590_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads3590_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="10">
                  Nord Ouest (3595)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="10">
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
                      {YAMLData.downloads3595.map((data, index) => {
                        return (
                          <tr key={`downloads3595_${index}`}>
                            <td key={`downloads3595_threat_title_${index}`}>
                              {data.titlefr}
                            </td>
                            <td
                              key={`downloads3595_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads3595_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads3595_threat_url_${index}`}>
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

export default Ontario;
