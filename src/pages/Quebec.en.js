import React from "react";
import QCMapComponent from "../svg/QC-Generalized.svg";
import YAMLData from "../../content/data/yaml/prov-terr.yaml";
import { Link } from "gatsby";
import { Accordion, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";

const Quebec = () => {
  return (
    <Layout>
      <div className="container provincial-banner">
        <div className="breadcrumb">
          <Link to="/en/Provinces-and-Territories">
            Provinces and Territories
          </Link>{" "}
          / Quebec
        </div>
        <div className="provincial-data">
          <h1 id="wb-cont">{YAMLData.enNameQC}</h1>
        </div>
        <section className="gc-srvinfo col-md-3 pull-left">
          <ul>
            {YAMLData.enContentQC.map((data, index) => {
              return (
                <li key={`enContentQC_region_${index}`}>
                  <Link to={data.url}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="col-lg-9 col-s-4 pull-right">
          <img
            className="prov-map"
            src={QCMapComponent}
            alt="Economic Regions of Alberta Map"
          />
        </section>
      </div>
      <section className="container">
        <div>
          <h2>Provincial Level Datasets</h2>
          <table
            className="table table-hover"
            style={{
              marginTop: "5vh",
            }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Date Modified</th>
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
          <h2>Economic Region Level Datasets</h2>
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
                  Gasp (2410)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2410.map((data, index) => {
                        return (
                          <tr key={`downloads2410_${index}`}>
                            <td key={`downloads2410_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2410_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2410_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2410_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Bas-Saint-Laurent (2415)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2415.map((data, index) => {
                        return (
                          <tr key={`downloads2415_${index}`}>
                            <td key={`downloads2415_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2415_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2415_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2415_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Capitale Nationale (2420)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2420.map((data, index) => {
                        return (
                          <tr key={`downloads2420_${index}`}>
                            <td key={`downloads2420_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2420_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2420_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2420_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Chaudi re-Appalaches (2425)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2425.map((data, index) => {
                        return (
                          <tr key={`downloads2425_${index}`}>
                            <td key={`downloads2425_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2425_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2425_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2425_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Estrie (2430)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2430.map((data, index) => {
                        return (
                          <tr key={`downloads2430_${index}`}>
                            <td key={`downloads2430_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2430_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2430_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2430_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Centre-du-Quebec (2433)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2433.map((data, index) => {
                        return (
                          <tr key={`downloads2433_${index}`}>
                            <td key={`downloads2433_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2433_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2433_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2433_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                  Mont (2435)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="6">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2435.map((data, index) => {
                        return (
                          <tr key={`downloads2435_${index}`}>
                            <td key={`downloads2435_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2435_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2435_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2435_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                  Montreal (2440)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="7">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2440.map((data, index) => {
                        return (
                          <tr key={`downloads2440_${index}`}>
                            <td key={`downloads2440_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2440_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2440_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2440_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="8">
                  Lanaudi (2450)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="8">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2450.map((data, index) => {
                        return (
                          <tr key={`downloads2450_${index}`}>
                            <td key={`downloads2450_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2450_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2450_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2450_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="9">
                  Laurentides (2455)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="9">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2455.map((data, index) => {
                        return (
                          <tr key={`downloads2455_${index}`}>
                            <td key={`downloads2455_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2455_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2455_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2455_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="10">
                  Outaouais (2460)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="10">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2460.map((data, index) => {
                        return (
                          <tr key={`downloads2460_${index}`}>
                            <td key={`downloads2460_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2460_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2460_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2460_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="11">
                  Abitibi Temiscamique (2465)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="11">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2465.map((data, index) => {
                        return (
                          <tr key={`downloads2465_${index}`}>
                            <td key={`downloads2465_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2465_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2465_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2465_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="12">
                  Mauricie (2470)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="12">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2470.map((data, index) => {
                        return (
                          <tr key={`downloads2470_${index}`}>
                            <td key={`downloads2470_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2470_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2470_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2470_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="13">
                  Saguenay Lac Saint Jean (2475)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="13">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2475.map((data, index) => {
                        return (
                          <tr key={`downloads2475_${index}`}>
                            <td key={`downloads2475_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2475_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2475_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2475_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="14">
                  Cote Nord (2480)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="14">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2480.map((data, index) => {
                        return (
                          <tr key={`downloads2480_${index}`}>
                            <td key={`downloads2480_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2480_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2480_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2480_threat_url_${index}`}>
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
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="15">
                  Nord Du Quebec (2490)
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="15">
                <Card.Body>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date Modified</th>
                        <th>Format</th>
                      </tr>
                    </thead>
                    <tbody>
                      {YAMLData.downloads2490.map((data, index) => {
                        return (
                          <tr key={`downloads2490_${index}`}>
                            <td key={`downloads2490_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads2490_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads2490_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads2490_threat_url_${index}`}>
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
    </Layout>
  );
};

export default Quebec;
