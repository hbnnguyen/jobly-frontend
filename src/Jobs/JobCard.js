import React from "react";

/** Render a job.
 *
 * Jobs -> JobCardList -> JobCard
 */
function JobCard({ salary, handle, equity, title }) {
  return (
    <div className="job-card">
      <h4>{title}</h4>
      <p>{handle}</p>
      <p>Salary: {salary}</p>
      {equity !== null && <p>Equity: {equity}</p>}
    </div>
  );
}

export default JobCard;