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
        <div>
          {details.map((item, index) => {
            return <h1 key={`details_title_${index}`}>{item.title}</h1>;
          })}
          <hr/>
        </div>
        <div className="pull-left">
          {details.map((item, index) => {
            return (
              <p key={`details_description_${index}`}>{item.description}</p>
            );
          })}
        </div>
          <div className="pull-right supplemental">
            <h2 id="wb-cont">Additional Information</h2>
            <p className="contact-email">
              Contact Email:{" "}
              <a href="mailto:nrcan.egs-sgu.rncan@canada.ca">
                nrcan.egs-sgu.rncan@canada.ca
              </a>
            </p>
            <p className="keywords">Keywords:{" "}
            <span className="label label-default">Natural Disasters</span>
            </p>
            <p className="publisher">
              Publisher - Current Organization Name: Natural Resources Canada{" "}
            </p>
            <div className='license-col'>
            <p className="licence">
              Licence: {" "}
    
            </p>
            <a href="https://open.canada.ca/en/open-government-licence-canada">
                 Open Government Licence - Canada
              </a>
              </div>
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
