import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Companies from './Companies/Companies';
import CompanyDetail from './Companies/CompanyDetail';
import Jobs from './Jobs/Jobs';
import LoginForm from './Forms/LoginForm';
import SignupForm from './Forms/SignupForm';
import ProfileForm from './Forms/ProfileForm';
import userContext from "./userContext";
import { useContext } from 'react';

/** Render the NavBar and individual routes for jobs, companies, and company
 * handle.
 *
 * app -> RoutesList -> { NavBar, Home, Companies, CompanyDetail, Jobs }
 */

function RoutesList({ login, signup }) {
  const { user } = useContext(userContext);

  function loggedInRoutes() {
    return (
      <div className='routes-list'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    );
  }

  function loggedOutRoutes() {
    return (
      <div className='routes-list'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm login={login} />} />
          <Route path="/signup" element={<SignupForm signup={signup} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    );
  }

  if (user) {
    return loggedInRoutes();
  } else {
    return loggedOutRoutes();
  }
}

export default RoutesList;