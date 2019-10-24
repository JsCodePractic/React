import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Other from './other/other';
import Top from './TopComponent/Top';

function App(props) {

  return (
    <BrowserRouter>
      <div className="App">     
      <Route path="" component={Top}></Route>     
        <Route path="/other" component={Other} />              
        
        
        
          
      </div>

    </BrowserRouter>

  );
}

export default App;
