import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './router3/Home';
import About from './router3/About';
import Profile from './router3/Profile';
import Notfile from './router3/Notfile';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
          <hr/>
          <Switch>
            <Route path="/" exact><Home/></Route>
            <Route path="/about"><About/></Route>
            <Route path="/profile"><Profile/></Route>
            <Route path="/*"><Notfile/></Route>
          </Switch>
      </div>
    </Router>
  );
};

export default App;