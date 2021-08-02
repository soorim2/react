import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './router2/Home';
import About from './router2/About';
import Profile from './router2/Profile';
import Notfile from './router2/Notfile';

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
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/profile">profile</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact><Home/> </Route>
          <Route path="/about"><About/></Route>
          <Route path="/profile"><Profile/></Route>
          {/* <Route path="/front/:name"><Front data={data}/></Route> */}
          {/* <Route path="/front/:사용자 정의 변수"><Front/></Route> */}
          {/* 1. data 값 전달 */}
          <Route path="/*"><Notfile/></Route>
        </Switch>
      </div>  
    </Router>
  );
};

export default App;