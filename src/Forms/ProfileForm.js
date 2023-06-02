import React from "react";
import { useState, useContext } from "react";
import { JoblyApi } from "../API";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import userContext from "../userContext";
import './FormTemplate.css';

/** Render a Profile form.
 *
 * State:
 * - formData: user's infotmation inputs
 *
 * { NavBar, RoutesList } -> ProfileForm
 */
function ProfileForm() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });

  /** Handle form change. */
  function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
      currData[fieldName] = value;
      return { ...currData };
    });
  }

  /** Handle form submit. */
  async function handleSubmit(evt) {
    evt.preventDefault();
    await JoblyApi.editProfile(formData);

    alert("Profile updated!");

    return (
      navigate("/profile")
    );
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="username-input">Username:</label>
          <input
            className="form-control item"
            disabled="disabled"
            name="username"
            id="username-input"
            value={user.username}
          ></input>
        </div>

        <div className="form-group">
          <label className="text" htmlFor="firstName-input">First Name:</label>
          <input
            className="form-control item"
            name="firstName"
            id="firstName-input"
            value={formData.firstName}
            onChange={handleChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="lastName-input ">Last Name:</label>
          <input
            className="form-control item"
            name="lastName"
            id="lastName-input"
            value={formData.lastName}
            onChange={handleChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="email-input">Email:</label>
          <input
            className="form-control item"
            name="email"
            id="email-input"
            value={formData.email}
            onChange={handleChange}
          ></input>
        </div>

        <div className="form-group">
          <button className="btn btn-block create-account">Submit</button>
        </div>
      </form>
    </div>
  );

}

export default ProfileForm;;