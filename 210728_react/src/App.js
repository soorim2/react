import React from 'react';
import {Todos,Plan,Music} from './components' 
const App = () => {
  return (
    <div>
        <Todos/>
        <Music/>
        <hr/>
        <Plan/>
    </div>
  );
};

export default App;