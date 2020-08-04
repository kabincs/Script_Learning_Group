import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './components/Dashboard';
import Footer1 from './components/Footer1';
import GlobalHomePage from './components/GlobalHomePage';
import Logout from './pages/Logout';
import Homepage from './pages/Homepage';
import store from './redux/store';
import RecomendedJob from './pages/RecomendedJob';
// import NavBar from './components/NavBar';
import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/@fortawesome/fontawesome-free/css/all.min.css';
import './assets/scss/argon-dashboard-react.scss';
import jobseeker from './pages/jobseeker';
import Profile from './pages/Profile';
import job_recommend from './pages/job_recommend';

function App() {
  return (
    <BrowserRouter>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/register">Regis</Link>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/dashboard" component={Dashboard} exact></Route>
      </Switch> */}
      <Provider store={store}>
        <Switch>
          <Route path="/" component={GlobalHomePage} exact></Route>
          <Route path="/login" component={Login} exact></Route>
          <Route path="/logout" component={Logout}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/dashboard" component={Dashboard} exact></Route>
          <Route path="/jobseeker" component={jobseeker} exact></Route>
          <Route path="/Footer1" component={Footer1} exact></Route>
          <Route path="/Profile" component={Profile} exact></Route>
          <Route path="/job_recommend" component={job_recommend} exact></Route>
          <Route path="/RecomendedJob" component={RecomendedJob}exact></Route>
          <Route
            path="/homepage"
            render={props => <Homepage {...props}></Homepage>}
          ></Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
