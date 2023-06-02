import React from "react";
import { Link } from "react-router-dom";

/** Render information about a company.
 *
 * Link:
 * - handle: link to company detail
 *
 * Companies -> CompanyCard -> { CompanyDetail }
 */

function CompanyCard({ handle, name, description, logoUrl }) {
  return (
    <Link to={`/companies/${handle}`} style={{
      textDecoration: "none",
      color: "black"
    }}>
      <div className="card">
        <div className="card-body">
          {logoUrl && <img className="mr-0" src={logoUrl} alt={name}></img>}
          <h6>{name}</h6>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default CompanyCard;