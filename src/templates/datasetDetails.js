import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import ContactInfo from "../../content/data/yaml/contact.yaml";

const DatasetDetails = (props) => {
  const { pageContext } = props;
  const { details } = pageContext;
  return (
    <Layout>
      <div className="container">
        <div className="breadcrumb">
          <Link to="https://www.canada.ca/en.html">Canada.ca </Link>/
          <Link to="/en/Provinces-and-Territories">
            {" "}
            Provinces and Territories{" "}
          </Link>
          /<Link to="/en/Provinces-and-Territories"> Details </Link>
        </div>
        <div>
          {details.map((item, index) => {
            return <h1 key={`details_title_${index}`}>{item.title}</h1>;
          })}
          <hr />
        </div>
        <section className="module-content indent-large col-md-7">
          <div id="resource-desc" className="pull-left">
            {details.map((item, index) => {
              return (
                <p key={`details_description_${index}`}>{item.description}</p>
              );
            })}
          </div>
        </section>
        <section>
          <div className=" pull-right col-md-4">
            <h2>Spatial Extent</h2>
            {details.map((item, index) => {
              return (
                <p key={`details_spatial_extent_${index}`}>
                  {item.spatial_extent}
                </p>
              );
            })}
          </div>
        </section>
        <div className="pull-right supplemental  col-md-4">
          <h2 id="wb-cont">Additional Information</h2>
          <p className="contact-email">
            Contact Email:{" "}
            <a href="mailto:nrcan.egs-sgu.rncan@canada.ca">
              nrcan.egs-sgu.rncan@canada.ca
            </a>
          </p>
          <p className="keywords">
            Keywords:{" "}
            <span className="label label-default">Natural Disasters</span>
          </p>
          <p className="publisher">
            Publisher - Current Organization Name: Natural Resources Canada{" "}
          </p>
          <div className="license-col">
            <p className="licence">Licence: </p>
            <a href="https://open.canada.ca/en/open-government-licence-canada">
              Open Government Licence - Canada
            </a>
          </div>
          <h2>Contact</h2>
          <p>Name: {ContactInfo.contact.name}</p>
          <p>Position: {ContactInfo.contact.position}</p>
          <p>Address: {ContactInfo.contact.address}</p>
          <p>Province: {ContactInfo.contact.stateorprovince}</p>
          <p>Postal Code: {ContactInfo.contact.postalcode}</p>
          <p>Country: {ContactInfo.contact.country}</p>
          <p>Phone: {ContactInfo.contact.phone}</p>
          <p>Fax: {ContactInfo.contact.fax}</p>
          <p>Email:{ContactInfo.contact.email}</p>
          <p>{ContactInfo.contact.url}</p>
          <p>Hours: {ContactInfo.contact.hours}</p>
          <p>Instructions: {ContactInfo.contact.instructions}</p>
          <p>Role: {ContactInfo.contact.role}</p>
        </div>
        {/* <section className="col-lg-4 pull-right" >

          </section> */}

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
          {/* <tbody>
            {supportingdownloads.map((item, index) => {
              return (
                <tr key={`itemName_${index}`}>
                  <td key={`itemLink_${index}`}>{item.itemName}</td>
                </tr>
              );
            })}
          </tbody> */}
        </table>
      </div>
    </Layout>
  );
};
export default DatasetDetails;
