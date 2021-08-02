import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './router4/Main';
import MemberDetail from './router4/MemberDetail';
import NotMember from './router4/NotMember';


const App = () => {
  return (
    <Router>
      <div>
          <Switch>
            {/* 힌번에 여러경로 지정 */}
            <Route path={["/","/main"]} exact><Main/></Route>
            <Route path="/member/:memberID"><MemberDetail/></Route>
            <Route path="/*"><NotMember/></Route>
          </Switch>
      </div>
    </Router>
  );
};

export default App;