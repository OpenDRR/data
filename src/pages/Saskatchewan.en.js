import React from "react";
import SKMapComponent from "../svg/SK-Generalized.svg";
import YAMLData from "../../content/data/yaml/prov-terr.yaml";
import { Link } from "gatsby";
import { Accordion, Card, Button } from "react-bootstrap";
import Layout from "../components/layout";

const Saskatchewan = () => {
  return (
    <Layout>
      <div className="container provincial-banner">
        <div className="breadcrumb">
          <Link to="/en/Provinces-and-Territories">
            Provinces and Territories
          </Link>{" "}
          / Saskatchewan
        </div>
        <div className="provincial-data">
          <h1 id="wb-cont">{YAMLData.enNameSK}</h1>
        </div>
        <section className="gc-srvinfo col-md-3 pull-left">
          <ul>
            {YAMLData.enContentSK.map((data, index) => {
              return (
                <li key={`enContentSK_region_${index}`}>
                  <Link to={data.url}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="col-lg-9 col-s-4 pull-right">
          <img
            className="prov-map"
            src={SKMapComponent}
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
                  Regina Moose Mountain (4710)
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
                      {YAMLData.downloads4710.map((data, index) => {
                        return (
                          <tr key={`downloads4710_${index}`}>
                            <td key={`downloads4710_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4710_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4710_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4710_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Swift Current Moose Jaw (4720)
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
                      {YAMLData.downloads4720.map((data, index) => {
                        return (
                          <tr key={`downloads4720_${index}`}>
                            <td key={`downloads4720_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4720_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4720_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4720_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Saskatoon Biggar (4730)
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
                      {YAMLData.downloads4730.map((data, index) => {
                        return (
                          <tr key={`downloads4730_${index}`}>
                            <td key={`downloads4730_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4730_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4730_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4730_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Yorkton Melville (4740)
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
                      {YAMLData.downloads4740.map((data, index) => {
                        return (
                          <tr key={`downloads4740_${index}`}>
                            <td key={`downloads4740_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4740_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4740_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4740_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Prince Albert (4750)
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
                      {YAMLData.downloads4750.map((data, index) => {
                        return (
                          <tr key={`downloads4750_${index}`}>
                            <td key={`downloads4750_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4750_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4750_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4750_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                  Northern (4760)
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
                      {YAMLData.downloads4760.map((data, index) => {
                        return (
                          <tr key={`downloads4760_${index}`}>
                            <td key={`downloads4760_threat_title_${index}`}>
                              {data.title}
                            </td>
                            <td
                              key={`downloads4760_threat_lastUpdated_${index}`}
                            >
                              {data.lastUpdated}
                            </td>
                            <td key={`downloads4760_threat_format_${index}`}>
                              <span className="label label-default">
                                {data.format}
                              </span>
                            </td>
                            <td key={`downloads4760_threat_url_${index}`}>
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
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default Saskatchewan;
