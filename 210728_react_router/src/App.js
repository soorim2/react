import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Sub1 from './components/Sub1';

function App() {
  return (
    <div>
      <ul className="gnb">
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/sub1">sub1</Link></li>
      </ul>
      {/* 화면에 보여질 영역 */}
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
        <Route path="/about" component={Sub1}/>
        <Route path="/sub1" component={Sub1}/>
      </Switch>
    </div>
  );
}

export default App;
