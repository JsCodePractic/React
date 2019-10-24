import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Other from './other/other';
import Top from './TopComponent/Top';

function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Top}></Route>
          <Route path="/other" exact component={Other} />
        </Switch>
      </div>

    </BrowserRouter>

  );
}

export default App;
