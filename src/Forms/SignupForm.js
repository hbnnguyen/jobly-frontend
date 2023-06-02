import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Render a signup form.
 *
 * Props:
 * - signup: function that registers user into the database
 *
 * State:
 * - formData: user's infotmation inputs
 *
 * { NavBar, RoutesList } -> SignupForm
 */
function SignupForm({ signup }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
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
    await signup(formData);
    navigate("/");
  }

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="username-input">Username:</label>
          <input
            className="form-control item"
            name="username"
            id="username-input"
            value={formData.username}

            onChange={handleChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="password-input">Password:</label>
          <input
            className="form-control item"
            name="password"
            id="password-input"
            value={formData.password}
            type="password"
            onChange={handleChange}
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="firstName-input">First Name:</label>
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
        <div>
          <button className="btn-primary btn-block create-account">Submit</button>
        </div>
      </form>
    </div>
  );

}

export default SignupForm;;