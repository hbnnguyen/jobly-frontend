import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/** Render a Login form.
 *
 * Props:
 * - login: function that authenticates user
 *
 * State:
 * - formData: user's infotmation inputs
 *
 * { NavBar, RoutesList } -> LoginForm
 */
function LoginForm({ login }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
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
    await login(formData);
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
        <div>
          <button className="btn create-account">Submit</button>
        </div>
      </form >
    </div >
  );
}

export default LoginForm;