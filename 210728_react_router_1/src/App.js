import React from 'react'
import { BrowserRouter as Router, Route,Link,Switch } from 'react-router-dom'; 
import Home from './components1/Home';
import Ceo from './components1/Ceo';
import Sub1 from './components1/Sub1';
import Sub2 from './components1/Sub2';
import Notfiles from './components1/Notfiles';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/ceo">Ceo</Link></li>
            <li><Link to="/sub1">Sub1</Link></li>
            <li><Link to="/sub2">Sub2</Link></li>
          </ul>
        </nav>
        {/* 화면에 보이는 영역 */}
        <Switch>
          <Route path="/" exact ><Home/></Route>
          <Route path="/ceo" ><Ceo/></Route>
          <Route path="/sub1" ><Sub1/></Route>
          <Route path="/sub2" ><Sub2/></Route>
          <Route path="*" ><Notfiles/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/*
 <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/ceo" component={Ceo}/>
    <Route path="/sub1" component={Sub1}/>
    <Route path="/sub2" component={Sub2}/>
    <Route path="*" component={Notfiles}/>
  </Switch>

  // 동적 라우팅 설정 - :변수, :name
  <Route path="/경로:변수"/> 
    = "/경로:변수" => "/about:1" => 변수=1

  <Route path="/경로/:name"/>
  name 변수가 값을 받는다.
  <Link to="/경로/홍길동">  =>  name=홍길동

  const { name } = useParams() : 동적 라우팅 값으로 걸어둔 이름으로 객체를 가져옴

  useParams hooks 글 상세조회, 유저 상세조회 API

*/

