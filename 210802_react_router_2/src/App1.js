import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './router1/Home';
import About from './router1/About';
import Profile from './router1/Profile';
import Front from './router1/Front';
import Notfile from './router1/Notfile';

const data =[
  {title: 'html', info : 'html에 대한 설명입니다.'},
  {title: 'css', info : 'css에 대한 설명입니다.'},
  {title: 'javascript', info : 'javscript에 대한 설명입니다.'},
  {title: 'react', info : 'react에 대한 설명입니다.'},
]

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
            <li>
              <Link to="/front/html">html</Link>
            </li>
            <li>
              <Link to="/front/css">css</Link>
            </li>
            <li>
              <Link to="/front/javascript">javascript</Link>
            </li>
            <li>
              <Link to="/front/react">react</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact><Home/> </Route>
          <Route path="/about"><About/></Route>
          <Route path="/profile"><Profile/></Route>
          <Route path="/front/:name"><Front data={data}/></Route>
          {/* <Route path="/front/:사용자 정의 변수"><Front/></Route> */}
          {/* 1. data 값 전달 */}
          <Route path="/*"><Notfile/></Route>
        </Switch>
      </div>  
    </Router>
  );
};

export default App;