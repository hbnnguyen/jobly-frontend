import React from "react";
import JobCard from "./JobCard";

/** Render a list of jobs.
 *
 * Jobs -> JobCardList -> { JobCard }
 */
function JobCardList({ jobs }) {
  return (
    <div className="jobs-list">
      {jobs.map(j =>
        <JobCard
          key={j.id}
          handle={j.companyName}
          salary={j.salary}
          equity={j.equity}
          title={j.title} />)}
    </div>
  );
}

export default JobCardList;