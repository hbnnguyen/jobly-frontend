import React from "react";
import { useContext } from "react";
import userContext from "./userContext";

/** Render the homepage.
 */
function Home() {
  const { user } = useContext(userContext);

  return (
    <div>
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place.</h3>
      {user && <h6>Hello, {user.username}</h6>}
    </div>
  );
}

export default Home;