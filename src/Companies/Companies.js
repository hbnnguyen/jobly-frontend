import React from "react";
import { useEffect, useState, useContext } from "react";
import { JoblyApi } from "../API";
import CompanyCard from "./CompanyCard";
import SearchForm from "../Forms/SearchForm";
import userContext from "../userContext";
import { Navigate } from "react-router-dom";


/** Render a list of companies.
 *
 * State:
 * - companies: a current list of companies
 *
 * RoutesList -> Companies -> { CompanyCard, SearchForm }
 */
function Companies() {
  const { user } = useContext(userContext);
  const [companies, setCompanies] = useState(({
    data: null,
    isLoading: true
  }));

  /** Renders all companies on mount. */
  useEffect(function () {
    searchCompanies();
  }, []);

  /** Retrieve a list of companies from the API. */
  async function searchCompanies(searchInput) {
    const companies = await JoblyApi.getCompanies(searchInput);
    setCompanies(({
      data: companies,
      isLoading: false
    }));
  }

  if (companies.isLoading) return <i>Loading...</i>;

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Companies</h1>
      <SearchForm search={searchCompanies} />
      <div className="company-list">
        {companies.data.map(c =>
          <CompanyCard
            key={c.handle}
            handle={c.handle}
            name={c.name}
            description={c.description}
            logoUrl={c.logoUrl} />)}
      </div>
    </div>
  );
}

export default Companies;