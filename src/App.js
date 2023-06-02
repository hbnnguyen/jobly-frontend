import { useState, useEffect } from 'react';
import userContext from "./userContext";
import { JoblyApi } from './API';
import './App.css';
import RoutesList from './RoutesList';
import jwt_decode from "jwt-decode";
import NavBar from './NavBar';

/** Render the routes list
 *
 * state:
 * - token: the token returned from signing up/logging in
 * - user: user object
 *
 * effect:
 * - fetchUser: get user data from the API
 */
function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState({
    data: null,
    isLoading: true
  });

  /**
   * When a token is set or changed, get the user data from the API, set user
   * and update the token
   */
  useEffect(function fetchAndSetUser() {
    async function fetchUser() {
      if (token) {
        const { username } = jwt_decode(token);
        JoblyApi.token = token;
        const currUser = await JoblyApi.getUser(username);
        setUser({
          data: currUser,
          isLoading: false
        });
      } else {
        setUser({
          data: null,
          isLoading: false
        });
      }
    }
    fetchUser();
  }, [token]);

  /** Login and get token from the backend, store it on the token state and
   * localStorage */
  async function login(data) {
    const newToken = await JoblyApi.login(data);
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  /** Signup and get token from the backend, store it on the token state and
   * localStorage
  */
  async function signup(data) {
    const newToken = await JoblyApi.signup(data);
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }

  /** Reset the token, user states, remove token from localStorage */
  function logout() {
    setToken("");
    localStorage.removeItem("token");
  }

  if (user.isLoading) return <i>Loading...</i>;

  return (
    <userContext.Provider value={{ user: user.data }}>
      <div className="App">
        <NavBar logout={logout} />
        <RoutesList login={login} signup={signup} logout={logout} />
      </div>
    </userContext.Provider>
  );
}

export default App;
