import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './router5/Main';
import Products from './router5/Products';
import ProductDetail from './router5/ProductDetail';
import NotProduct from './router5/NotProduct';

const App = () => {
  return (
    <Router>
      <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
            </ul>
          </nav>
          <Switch>
            {/* 힌번에 여러경로 지정 */}
            <Route path={["/","/main"]} exact><Main/></Route>
            <Route path="/products/"><Products/></Route>
            <Route path="/products/:productID"><ProductDetail/></Route>
            <Route path="/*"><NotProduct/></Route>
          </Switch>
      </div>
    </Router>
  );
};

export default App;