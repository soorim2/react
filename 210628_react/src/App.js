import React from 'react'; 
import './assets/css/reset.css' 
// import Starbucks from './starbucks/Starbucks'
import Todos from './todos/Todos'


import Test1 from './components/Test1'

const App = () => {
  return (
    <div>     
      {/* <Starbucks /> */}
      {/* <Test1/> */}
      <Todos />
    </div>
  );
};

export default App;