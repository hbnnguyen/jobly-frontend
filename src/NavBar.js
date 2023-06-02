import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import userContext from "./userContext";

/** Display NavBar with links to Home, Companies, and Jobs.
 * if user is logged in, display logout and profile links
 * if user is not logged in, display sign up and login links
 *
 * props:
 * - logout: calls the logout function
 */

function NavBar({ logout }) {
  const { user } = useContext(userContext);

  /** Show login and signup on the NavBar if no user is logged in */
  function loggedOutNav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="nav-item nav-link" to="/">Jobly</NavLink>
        <div className="navbar" id="navbarNav">
          <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
          <NavLink className="nav-item nav-link" to="/signup">Signup</NavLink>
        </div>
      </nav>
    );
  }

  /** Show Jobs, Companies, logout, and Profile on the NavBar ifuser is logged
   *  in
  */
  function loggedInNav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="nav-item nav-link" to="/">Jobly</NavLink>
        <div className="navbar" id="navbarNav">
          <NavLink className="nav-item nav-link" to="/companies">
            Companies
          </NavLink>
          <NavLink className="nav-item nav-link" to="/jobs">Jobs</NavLink>
          <NavLink className="nav-item nav-link" to="/profile">Profile</NavLink>
          <NavLink className="nav-item nav-link" to="/" onClick={logout}>
            Logout {user.username}
          </NavLink>
        </div>
      </nav>
    );
  }

  if (!user) {
    return loggedOutNav();
  } else {
    return loggedInNav();
  }
}

export default NavBar;