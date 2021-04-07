import React from "react";
import Layout from "../components/layout";
// import { Link } from 'gatsby'

const DatasetDetails = (props) => {
  const { pageContext } = props;
  const { details } = pageContext;
  return (
    <Layout>
      <div className="container">
      {/* <div className="breadcrumb">
          <Link to="/en/Provinces-and-Territories">
            Provinces and Territories 
          </Link>{" "}
          / Details
        </div> */}
        <div id="wb-cont">
          {details.map((item, index) => {
            return <h1 key={`details_title_${index}`}>{item.title}</h1>;
          })}
        </div>
        <div className="pull-left">
          {details.map((item, index) => {
            return (
              <p key={`details_description_${index}`}>{item.description}</p>
            );
          })}
        </div>
        <div className="pull-right">
          <h2>Additional Information</h2>
          <p>
            Contact Email:{" "}
            <a href="mailto:nrcan.egs-sgu.rncan@canada.ca">
              nrcan.egs-sgu.rncan@canada.ca
            </a>
          </p>
          Keywords:{" "}
          <span className="label label-default">Natural Disasters</span>
          <p>
            Publisher - Current Organization Name: Natural Resources Canada{" "}
          </p>
          <p>
            Licence:{" "}
            <a href="https://open.canada.ca/en/open-government-licence-canada">
              Open Government Licence - Canada
            </a>
          </p>
        </div>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Resource Name</th>
              <th>Resource Type</th>
              <th>Format</th>
              <th>Language</th>
              <th>Links</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>Web Service</td>
              <td>
                <span className="label label-default">Esri Rest </span>
              </td>
              <td>English</td>
              <td>
                <button className="btn btn-primary btn-sm map-link pull-right">
                  Access
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};
export default DatasetDetails;
